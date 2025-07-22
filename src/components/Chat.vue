<template>
  <div class="chat-container">
    <div class="chat-header">
      <div class="header-content">
        <h3 class="chat-title">Chat Component</h3>
        <p class="chat-subtitle">실시간 대화형 채팅 인터페이스 - 누구나 쉽게 사용할 수 있습니다</p>
      </div>
      <div class="chat-status">
        <span class="status-dot"></span>
        {{ isOnline ? 'Online' : 'Offline' }}
      </div>
    </div>
    
    <div class="chat-messages" ref="messagesContainer">
      <div v-if="messages.length === 0" class="empty-state">
        <div class="empty-icon">💬</div>
        <p class="empty-text">아직 메시지가 없습니다. 대화를 시작해보세요!</p>
        <p class="empty-hint">메시지를 입력하고 Enter를 누르거나 전송 버튼을 클릭하세요</p>
      </div>
      
      <div 
        v-for="(message, index) in messages" 
        :key="index"
        :class="[message.type === 'user' ? 'message-user' : 'message-bot']"
      >
        <div class="message-content">
          <div class="message-text">{{ message.text }}</div>
          <div class="message-time">{{ formatTime(message.timestamp) }}</div>
        </div>
        <div class="message-avatar">
          {{ message.type === 'user' ? '👤' : '🤖' }}
        </div>
      </div>
    </div>
    
    <div class="chat-input-container">
      <form @submit.prevent="sendMessage">
        <input
          v-model="inputMessage"
          type="text"
          class="chat-input"
          :placeholder="placeholder"
          :disabled="disabled"
          @keydown.enter.exact.prevent="sendMessage"
        />
        <button 
          type="submit"
          class="chat-send-btn"
          :disabled="disabled || !inputMessage.trim()"
        >
          <svg class="send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-9 2-9-9 9 2 9-9 9 2-9 9 9" />
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'

interface Message {
  id: string
  text: string
  type: 'user' | 'bot'
  timestamp: Date
}

interface Props {
  /** 초기 메시지들 */
  initialMessages?: Message[]
  /** 입력창 플레이스홀더 */
  placeholder?: string
  /** 컴포넌트 비활성화 */
  disabled?: boolean
  /** 온라인 상태 */
  isOnline?: boolean
  /** 봇 응답 활성화 */
  enableBot?: boolean
  /** 봇 응답 지연 시간 (ms) */
  botDelay?: number
}

const props = withDefaults(defineProps<Props>(), {
  initialMessages: () => [],
  placeholder: '메시지를 입력하세요...',
  disabled: false,
  isOnline: true,
  enableBot: true,
  botDelay: 1000
})

const emit = defineEmits<{
  messageSent: (message: Message) => void
  messageReceived: (message: Message) => void
}>()

const messages = ref<Message[]>(props.initialMessages)
const inputMessage = ref('')
const messagesContainer = ref<HTMLElement>()

const generateId = () => Math.random().toString(36).substr(2, 9)

const formatTime = (date: Date) => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const sendMessage = () => {
  if (!inputMessage.value.trim() || props.disabled) return

  const userMessage: Message = {
    id: generateId(),
    text: inputMessage.value.trim(),
    type: 'user',
    timestamp: new Date()
  }

  messages.value.push(userMessage)
  emit('messageSent', userMessage)
  
  const messageText = inputMessage.value
  inputMessage.value = ''
  
  scrollToBottom()

  // 봇 응답
  if (props.enableBot) {
    setTimeout(() => {
      const botMessage: Message = {
        id: generateId(),
        text: generateBotResponse(messageText),
        type: 'bot',
        timestamp: new Date()
      }
      
      messages.value.push(botMessage)
      emit('messageReceived', botMessage)
      scrollToBottom()
    }, props.botDelay)
  }
}

const generateBotResponse = (userMessage: string): string => {
  const responses = [
    "흥미로운 이야기네요! 더 자세히 들려주세요.",
    "말씀하신 내용을 이해했습니다.",
    "나눠주셔서 감사합니다.",
    "도움이 필요하시면 언제든 말씀해주세요!",
    "좋은 지적이네요.",
    "메시지 감사합니다.",
    "생각해보겠습니다...",
    "정말 맞는 말씀이에요!",
    "무슨 말씀인지 알겠습니다.",
    "좋은 질문이네요."
  ]
  
  // 간단한 키워드 기반 응답
  const lowerMessage = userMessage.toLowerCase()
  if (lowerMessage.includes('안녕') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return "안녕하세요! 오늘 어떻게 도와드릴까요?"
  }
  if (lowerMessage.includes('어떻게') && lowerMessage.includes('지내')) {
    return "잘 지내고 있어요, 물어봐주셔서 감사합니다!"
  }
  if (lowerMessage.includes('잘가') || lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
    return "안녕히 가세요! 좋은 하루 되세요!"
  }
  if (lowerMessage.includes('도움') || lowerMessage.includes('help')) {
    return "도움이 필요하시면 언제든 말씀해주세요! 무엇을 도와드릴까요?"
  }
  
  return responses[Math.floor(Math.random() * responses.length)]
}

// 메시지가 추가될 때마다 스크롤
watch(messages, () => {
  scrollToBottom()
}, { deep: true })
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 400px;
  max-width: 400px;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  background-color: #f9fafb;
}

.header-content {
  flex: 1;
  margin-right: 1rem;
}

.chat-subtitle {
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0.25rem 0 0 0;
  line-height: 1.2;
}

.chat-title {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.chat-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #672800;
}

.status-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #10b981; /* Online color */
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #9ca3af;
}

.empty-icon {
  font-size: 2rem;
  margin-bottom: 0.5em;
}

.empty-text {
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

.empty-hint {
  font-size: 0.75rem;
  text-align: center;
  color: #9ca3af;
  margin: 0;
}

.message {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  max-width: 80%;
}

.message-user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.message-bot {
  align-self: flex-start;
}

.message-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.message-text {
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  line-height: 1.25;
  word-wrap: break-word;
}

.message-user .message-text {
  background-color: #3b82f6;
  color: white;
  border-bottom-right-radius: 0.25rem;
}

.message-bot .message-text {
  background-color: #f3f4f6;
  color: #111827;
  border-bottom-left-radius: 0.25rem;
}

.message-time {
  font-size: 0.75rem;
  color: #9ca3af;
  padding: 0 0.25rem;
}

.message-avatar {
  width: 2em;
  height: 2rem;
  border-radius: 50%;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.chat-input-container {
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;
}

.chat-form {
  display: flex;
  gap: 0.5rem;
}

.chat-input {
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 1.5rem;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s;
}

.chat-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.chat-input:disabled {
  background-color: #f3f4f6;
  color: #9ca3af;
  cursor: not-allowed;
}

.chat-send-btn {
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 50%;
  background-color: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  flex-shrink: 0;
}

.chat-send-btn:hover:not(:disabled) {
  background-color: #2563eb;
}

.chat-send-btn:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}

.send-icon {
  width: 1em;
  height: 1em;
}
</style> 