import type { Meta, StoryObj } from '@storybook/vue3';
import Chat from '../components/Chat.vue';

/**
 * # Chat 컴포넌트 📱💬
 * 
 * **사용자와 대화할 수 있는 채팅창**을 만들어주는 컴포넌트예요!
 * 
 * ## 🎯 이 컴포넌트로 할 수 있는 것들
 * 
 * - ✅ **실시간 대화** (메시지를 주고받을 수 있어요)
 * - ✅ **자동 봇 응답** (사용자 메시지에 자동으로 답장해요)
 * - ✅ **온라인 상태** (상대방이 온라인인지 표시해요)
 * - ✅ **모바일 친화적** (휴대폰에서도 잘 보여요)
 * - ✅ **키보드 접근성** (Tab키로 이동할 수 있어요)
 * - ✅ **부드러운 애니메이션** (메시지가 자연스럽게 나타나요)
 * 
 * ## 💡 언제 사용하나요?
 * 
 * **고객 상담** 페이지 만들 때 (예: 쇼핑몰 고객센터)
 * **AI 챗봇** 만들 때 (예: 자동 응답 시스템)
 * **실시간 채팅** 기능 (예: 팀 협업 도구, 소셜 앱)
 * **문의하기** 페이지 (예: 웹사이트 문의 폼)
 * 
 * ## 🚀 간단한 사용법
 * 
 * ```vue
 * <template>
 *   <!-- 기본 채팅창 -->
 *   <Chat 
 *     :initial-messages="messages"
 *     :is-online="true"
 *     @message-sent="handleMessageSent"
 *   />
 * </template>
 * 
 * <script setup>
 * import Chat from '@/components/Chat.vue'
 * import { ref } from 'vue'
 * 
 * const messages = ref([
 *   { 
 *     id: '1', 
 *     text: '안녕하세요! 무엇을 도와드릴까요?', 
 *     type: 'bot', 
 *     timestamp: new Date() 
 *   }
 * ])
 * 
 * const handleMessageSent = (message) => {
 *   console.log('사용자가 보낸 메시지:', message.text)
 * }
 * </script>
 * ```
 * 
 * ## 🎨 메시지 구성 가이드
 * 
 * ### 메시지 데이터 구조
 * ```javascript
 * const message = {
 *   id: '고유번호',           // 메시지를 구분하는 번호
 *   text: '메시지 내용',      // 실제 대화 내용
 *   type: 'user' | 'bot',    // 'user': 사용자, 'bot': 봇/상대방
 *   timestamp: new Date()    // 메시지를 보낸 시간
 * }
 * ```
 * 
 * ### 메시지 예시
 * - **봇 메시지**: "안녕하세요! 무엇을 도와드릴까요?"
 * - **사용자 메시지**: "상품 문의하고 싶어요"
 * - **봇 응답**: "어떤 상품에 대해 궁금하신가요?"
 * 
 * ## ⚙️ 설정 옵션 (Props)
 * 
 * | 옵션 | 타입 | 기본값 | 설명 |
 * |------|------|--------|------|
 * | `initialMessages` | `Array` | `[]` | 채팅 시작할 때 보여줄 메시지들 |
 * | `placeholder` | `String` | `'메시지를 입력하세요...'` | 입력창 안내 텍스트 |
 * | `disabled` | `Boolean` | `false` | 채팅 기능 끄기 (입력 불가) |
 * | `isOnline` | `Boolean` | `true` | 온라인 상태 표시 (녹색 점) |
 * | `enableBot` | `Boolean` | `true` | 자동 봇 응답 기능 |
 * | `botDelay` | `Number` | `1000` | 봇 응답 대기 시간 (밀리초) |
 * 
 * ## 💡 실전 팁
 * 
 * 1. **첫 메시지는 봇이** 보내는 것이 좋아요 (예: "안녕하세요!")
 * 2. **입력창 안내 텍스트**는 명확하게 작성하세요
 * 3. **봇 응답은 1-2초** 정도 기다리는 것이 자연스러워요
 * 4. **모바일에서는 터치**로 쉽게 입력할 수 있어요
 * 5. **긴 메시지는 줄바꿈**을 사용해서 읽기 쉽게 만드세요
 * 
 * ## 🔧 고급 사용법
 * 
 * ### 자동 봇 응답 설정
 * ```vue
 * <template>
 *   <Chat 
 *     :initial-messages="messages"
 *     :enable-bot="true"
 *     :bot-delay="2000"
 *     @message-sent="handleUserMessage"
 *     @message-received="handleBotResponse"
 *   />
 * </template>
 * 
 * <script setup>
 * const handleUserMessage = (message) => {
 *   console.log('사용자:', message.text)
 * }
 * 
 * const handleBotResponse = (message) => {
 *   console.log('봇:', message.text)
 * }
 * </script>
 * ```
 * 
 * ### 커스텀 봇 응답 로직
 * ```vue
 * <template>
 *   <Chat 
 *     :initial-messages="messages"
 *     :enable-bot="false"
 *     @message-sent="handleMessage"
 *   />
 * </template>
 * 
 * <script setup>
 * const handleMessage = (message) => {
 *   // 사용자 메시지에 따라 커스텀 응답
 *   if (message.text.includes('안녕')) {
 *     addBotMessage('안녕하세요! 반갑습니다.')
 *   } else if (message.text.includes('가격')) {
 *     addBotMessage('상품 가격은 10,000원입니다.')
 *   } else {
 *     addBotMessage('죄송합니다. 더 자세히 말씀해 주세요.')
 *   }
 * }
 * 
 * const addBotMessage = (text) => {
 *   messages.value.push({
 *     id: Date.now().toString(),
 *     text,
 *     type: 'bot',
 *     timestamp: new Date()
 *   })
 * }
 * </script>
 * ```
 * 
 * ### 오프라인 상태 표시
 * ```vue
 * <template>
 *   <Chat 
 *     :initial-messages="messages"
 *     :is-online="false"
 *     placeholder="현재 상담원이 오프라인입니다. 메시지를 남겨주세요."
 *   />
 * </template>
 * ```
 */
const meta = {
  title: 'Components/Chat',
  component: Chat,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Chat 컴포넌트 📱💬

**사용자와 대화할 수 있는 채팅창**을 만들어주는 컴포넌트예요!

## �� 이 컴포넌트로 할 수 있는 것들

- ✅ **실시간 대화** (메시지를 주고받을 수 있어요)
- ✅ **자동 봇 응답** (사용자 메시지에 자동으로 답장해요)
- ✅ **온라인 상태** (상대방이 온라인인지 표시해요)
- ✅ **모바일 친화적** (휴대폰에서도 잘 보여요)
- ✅ **키보드 접근성** (Tab키로 이동할 수 있어요)
- ✅ **부드러운 애니메이션** (메시지가 자연스럽게 나타나요)

## 💡 언제 사용하나요?

**고객 상담** 페이지 만들 때 (예: 쇼핑몰 고객센터)
**AI 챗봇** 만들 때 (예: 자동 응답 시스템)
**실시간 채팅** 기능 (예: 팀 협업 도구, 소셜 앱)
**문의하기** 페이지 (예: 웹사이트 문의 폼)

## 🚀 간단한 사용법

\`\`\`vue
<template>
  <!-- 기본 채팅창 -->
  <Chat 
    :initial-messages="messages"
    :is-online="true"
    @message-sent="handleMessageSent"
  />
</template>

<script setup>
import Chat from '@/components/Chat.vue'
import { ref } from 'vue'

const messages = ref([
  { 
    id: '1', 
    text: '안녕하세요! 무엇을 도와드릴까요?', 
    type: 'bot', 
    timestamp: new Date() 
  }
])

const handleMessageSent = (message) => {
  console.log('사용자가 보낸 메시지:', message.text)
}
</script>
\`\`\`

## 🎨 메시지 구성 가이드

### 메시지 데이터 구조
\`\`\`javascript
const message = {
  id: '고유번호',           // 메시지를 구분하는 번호
  text: '메시지 내용',      // 실제 대화 내용
  type: 'user' | 'bot',    // 'user': 사용자, 'bot': 봇/상대방
  timestamp: new Date()    // 메시지를 보낸 시간
}
\`\`\`

### 메시지 예시
- **봇 메시지**: "안녕하세요! 무엇을 도와드릴까요?"
- **사용자 메시지**: "상품 문의하고 싶어요"
- **봇 응답**: "어떤 상품에 대해 궁금하신가요?"

## ⚙️ 설정 옵션 (Props)

| 옵션 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| \`initialMessages\` | \`Array\` | \`[]\` | 채팅 시작할 때 보여줄 메시지들 |
| \`placeholder\` | \`String\` | \`'메시지를 입력하세요...'\` | 입력창 안내 텍스트 |
| \`disabled\` | \`Boolean\` | \`false\` | 채팅 비활성화 |
| \`isOnline\` | \`Boolean\` | \`true\` | 온라인 상태 |
| \`enableBot\` | \`Boolean\` | \`true\` | 봇 응답 활성화 |
| \`botDelay\` | \`Number\` | \`1000\` | 봇 응답 지연 시간 (ms) |

## 💡 실전 팁

1. **첫 메시지는 봇이** 보내는 것이 좋아요 (예: "안녕하세요!")
2. **입력창 안내 텍스트**는 명확하게 작성하세요
3. **봇 응답은 1-2초** 정도 기다리는 것이 자연스러워요
4. **모바일에서는 터치**로 쉽게 입력할 수 있어요
5. **긴 메시지는 줄바꿈**을 사용해서 읽기 쉽게 만드세요

## 🔧 고급 사용법

### 자동 봇 응답 설정
\`\`\`vue
<template>
  <Chat 
    :initial-messages="messages"
    :enable-bot="true"
    :bot-delay="2000"
    @message-sent="handleUserMessage"
    @message-received="handleBotResponse"
  />
</template>

<script setup>
const handleUserMessage = (message) => {
  console.log('사용자:', message.text)
}

const handleBotResponse = (message) => {
  console.log('봇:', message.text)
}
</script>
\`\`\`

### 커스텀 봇 응답 로직
\`\`\`vue
<template>
  <Chat 
    :initial-messages="messages"
    :enable-bot="false"
    @message-sent="handleMessage"
  />
</template>

<script setup>
const handleMessage = (message) => {
  // 사용자 메시지에 따라 커스텀 응답
  if (message.text.includes('안녕')) {
    addBotMessage('안녕하세요! 반갑습니다.')
  } else if (message.text.includes('가격')) {
    addBotMessage('상품 가격은 10,000원입니다.')
  } else {
    addBotMessage('죄송합니다. 더 자세히 말씀해 주세요.')
  }
}

const addBotMessage = (text) => {
  messages.value.push({
    id: Date.now().toString(),
    text,
    type: 'bot',
    timestamp: new Date()
  })
}
</script>
\`\`\`

### 오프라인 상태 표시
\`\`\`vue
<template>
  <Chat 
    :initial-messages="messages"
    :is-online="false"
    placeholder="현재 상담원이 오프라인입니다. 메시지를 남겨주세요."
  />
</template>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: '입력창에 표시될 플레이스홀더 텍스트입니다. 사용자에게 무엇을 입력해야 하는지 안내합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'메시지를 입력하세요...'" },
        category: '입력'
      }
    },
    disabled: {
      control: { type: 'boolean' },
      description: '채팅 컴포넌트를 비활성화합니다. true일 때 메시지 입력이 불가능합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: '상태'
      }
    },
    isOnline: {
      control: { type: 'boolean' },
      description: '온라인 상태를 표시합니다. 헤더의 상태 점 색상이 변경됩니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: '상태'
      }
    },
    enableBot: {
      control: { type: 'boolean' },
      description: '봇 응답 기능을 활성화합니다. false일 때 자동 응답이 없습니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: '봇'
      }
    },
    botDelay: {
      control: { type: 'number', min: 0, max: 5000, step: 100 },
      description: '봇 응답 지연 시간을 설정합니다. 사용자 메시지 전송 후 봇이 응답하기까지의 시간입니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1000' },
        category: '봇'
      }
    },
    initialMessages: {
      control: { type: 'object' },
      description: '채팅 시작 시 표시할 초기 메시지들입니다. 대화가 이미 시작된 상태를 시뮬레이션할 수 있습니다.',
      table: {
        type: { summary: 'Message[]' },
        defaultValue: { summary: '[]' },
        category: '데이터'
      }
    },
    onMessageSent: {
      action: 'messageSent',
      description: '사용자가 메시지를 전송했을 때 호출되는 함수입니다. 전송된 메시지 객체를 매개변수로 받습니다.'
    },
    onMessageReceived: {
      action: 'messageReceived',
      description: '봇이 응답을 보냈을 때 호출되는 함수입니다. 수신된 메시지 객체를 매개변수로 받습니다.'
    }
  },
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ## 기본 Chat 컴포넌트 🎯
 * 
 * 가장 기본적인 설정으로 사용할 수 있는 Chat 컴포넌트입니다.
 * 
 * **특징:**
 * - ✅ 온라인 상태 표시
 * - ✅ 봇 자동 응답 활성화
 * - ✅ 기본 플레이스홀더 텍스트
 * - ✅ 1초 봇 응답 지연
 * 
 * **사용 시나리오:**
 * - 고객 지원 채팅
 * - FAQ 봇
 * - 일반적인 대화형 인터페이스
 */
export const Default: Story = {
  args: {
    isOnline: true,
    enableBot: true,
    placeholder: '메시지를 입력하세요...',
  },
  render: (args) => ({
    components: { Chat },
    setup() {
      return { args };
    },
    template: '<Chat v-bind="args" />',
  }),
};

/**
 * ## 오프라인 상태 Chat 🔴
 * 
 * 오프라인 상태를 표시하는 Chat 컴포넌트입니다.
 * 
 * **특징:**
 * - 🔴 오프라인 상태 표시 (회색 점)
 * - ❌ 봇 응답 비활성화
 * - ⚠️ 사용자만 메시지 전송 가능
 * 
 * **사용 시나리오:**
 * - 서버 점검 중
 * - 네트워크 연결 문제
 * - 관리자 모드
 */
export const Offline: Story = {
  args: {
    isOnline: false,
    enableBot: false,
    placeholder: '현재 오프라인 상태입니다',
  },
  render: (args) => ({
    components: { Chat },
    setup() {
      return { args };
    },
    template: '<Chat v-bind="args" />',
  }),
};

/**
 * ## 비활성화된 Chat 🚫
 * 
 * 메시지 입력이 불가능한 비활성화된 Chat 컴포넌트입니다.
 * 
 * **특징:**
 * - 🚫 입력창 비활성화
 * - 🚫 전송 버튼 비활성화
 * - 📖 읽기 전용 모드
 * 
 * **사용 시나리오:**
 * - 로딩 중 상태
 * - 권한이 없는 사용자
 * - 시스템 점검 중
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '채팅이 비활성화되었습니다',
    isOnline: false,
    enableBot: false,
  },
  render: (args) => ({
    components: { Chat },
    setup() {
      return { args };
    },
    template: '<Chat v-bind="args" />',
  }),
};

/**
 * ## 초기 메시지가 있는 Chat 💬
 * 
 * 대화가 이미 시작된 상태를 보여주는 Chat 컴포넌트입니다.
 * 
 * **특징:**
 * - 💬 미리 로드된 대화 내용
 * - 📅 실제 타임스탬프
 * - 🔄 기존 대화 이어가기
 * 
 * **사용 시나리오:**
 * - 이전 대화 복원
 * - 데모/프레젠테이션
 * - 테스트 데이터 표시
 */
export const WithInitialMessages: Story = {
  args: {
    initialMessages: [
      {
        id: '1',
        text: '안녕하세요! 무엇을 도와드릴까요?',
        type: 'bot',
        timestamp: new Date(Date.now() - 60000)
      },
      {
        id: '2',
        text: '안녕하세요! 질문이 있어요.',
        type: 'user',
        timestamp: new Date(Date.now() - 30000)
      },
      {
        id: '3',
        text: '네, 어떤 질문이신가요?',
        type: 'bot',
        timestamp: new Date(Date.now() - 15000)
      }
    ],
    isOnline: true,
    enableBot: true,
  },
  render: (args) => ({
    components: { Chat },
    setup() {
      return { args };
    },
    template: '<Chat v-bind="args" />',
  }),
};

/**
 * ## 빠른 봇 응답 Chat ⚡
 * 
 * 봇이 빠르게 응답하는 Chat 컴포넌트입니다.
 * 
 * **특징:**
 * - ⚡ 300ms 빠른 응답
 * - 🚀 실시간 느낌의 대화
 * - 💨 즉각적인 피드백
 * 
 * **사용 시나리오:**
 * - 고속 고객 지원
 * - 게임 내 채팅
 * - 실시간 상담
 */
export const FastBot: Story = {
  args: {
    botDelay: 300,
    isOnline: true,
    enableBot: true,
    placeholder: '빠른 응답을 기대하세요!',
  },
  render: (args) => ({
    components: { Chat },
    setup() {
      return { args };
    },
    template: '<Chat v-bind="args" />',
  }),
};

/**
 * ## 커스텀 플레이스홀더 Chat ✏️
 * 
 * 사용자 정의 플레이스홀더를 가진 Chat 컴포넌트입니다.
 * 
 * **특징:**
 * - ✏️ 맞춤형 안내 텍스트
 * - 🎯 특정 용도에 최적화
 * - 📝 명확한 사용법 안내
 * 
 * **사용 시나리오:**
 * - 특정 질문 유도
 * - 브랜드 메시지 전달
 * - 사용법 안내
 */
export const CustomPlaceholder: Story = {
  args: {
    placeholder: '질문이나 궁금한 점을 자유롭게 입력해주세요!',
    isOnline: true,
    enableBot: true,
  },
  render: (args) => ({
    components: { Chat },
    setup() {
      return { args };
    },
    template: '<Chat v-bind="args" />',
  }),
}; 