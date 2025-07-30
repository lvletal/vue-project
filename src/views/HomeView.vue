<template>
  <div class="py-10 px-4 max-w-4xl mx-auto space-y-8">
    <h1 class="text-4xl font-bold text-center mb-8">
      Welcome to <span class="text-blue-600">Vue + Storybook + Tailwind</span>
    </h1>

    <!-- Navigation Links -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-center">페이지 네비게이션</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <router-link 
          to="/token-studio" 
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors duration-200"
        >
          Token Studio
        </router-link>
        <router-link 
          to="/mcp-status" 
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors duration-200"
        >
          MCP 연결
        </router-link>
        <router-link 
          to="/figma-test" 
          class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors duration-200"
        >
          Figma 테스트
        </router-link>
        <router-link 
          to="/figma-import" 
          class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors duration-200"
        >
          Figma 가져오기
        </router-link>
        <router-link 
          to="/promotion" 
          class="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors duration-200"
        >
          Promotion 페이지
        </router-link>
        <router-link 
          to="/vip-club" 
          class="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors duration-200"
        >
          VIP Club 페이지
        </router-link>
        <router-link 
          to="/wallet" 
          class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors duration-200"
        >
          Wallet 페이지
        </router-link>
      </div>
    </div>

    <!-- Accordion Components Section -->
    <div class="space-y-4">
      <!-- Button Accordion -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          @click="toggleAccordion('button')"
          class="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
        >
          <h3 class="text-lg font-semibold">Button Component</h3>
          <svg
            :class="['w-5 h-5 transition-transform duration-200', openAccordion === 'button' ? 'rotate-180' : '']"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="openAccordion === 'button'" class="px-6 py-6 border-t border-gray-200">
          <div class="flex flex-col gap-3 max-w-xs">
            <Button variant="primary" class="w-full">Primary</Button>
            <Button variant="secondary" class="w-full">Secondary</Button>
            <Button variant="outline" class="w-full">Outline</Button>
          </div>
        </div>
      </div>

      <!-- Card Accordion -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          @click="toggleAccordion('card')"
          class="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
        >
          <h3 class="text-lg font-semibold">Card Component</h3>
          <svg
            :class="['w-5 h-5 transition-transform duration-200', openAccordion === 'card' ? 'rotate-180' : '']"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="openAccordion === 'card'" class="px-6 py-6 border-t border-gray-200">
          <Card style="width:100%; max-width: 400px;">
            <template #header>Sample Card</template>
            This is a sample card component with some content.
          </Card>
        </div>
      </div>

      <!-- Color Palette Accordion -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          @click="toggleAccordion('color')"
          class="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
        >
          <h3 class="text-lg font-semibold">Color Palette Component</h3>
          <svg
            :class="['w-5 h-5 transition-transform duration-200', openAccordion === 'color' ? 'rotate-180' : '']"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="openAccordion === 'color'" class="px-6 py-6 border-t border-gray-200">
          <ColorPalette />
        </div>
      </div>

      <!-- Swiper Accordion -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          @click="toggleAccordion('swiper')"
          class="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
        >
          <h3 class="text-lg font-semibold">Swiper Component</h3>
          <svg
            :class="['w-5 h-5 transition-transform duration-200', openAccordion === 'swiper' ? 'rotate-180' : '']"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="openAccordion === 'swiper'" class="px-6 py-6 border-t border-gray-200">
          <div class="max-w-2xl">
            <Swiper :slides="slides" />
          </div>
        </div>
      </div>

      <!-- Chat Accordion -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          @click="toggleAccordion('chat')"
          class="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
        >
          <h3 class="text-lg font-semibold">Chat Component</h3>
          <svg
            :class="['w-5 h-5 transition-transform duration-200', openAccordion === 'chat' ? 'rotate-180' : '']"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="openAccordion === 'chat'" class="px-6 py-6 border-t border-gray-200">
          <div class="flex justify-center">
            <Chat />
          </div>
        </div>
      </div>

      <!-- Tab Accordion -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          @click="toggleAccordion('tab')"
          class="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
        >
          <h3 class="text-lg font-semibold">Tab Component</h3>
          <svg
            :class="['w-5 h-5 transition-transform duration-200', openAccordion === 'tab' ? 'rotate-180' : '']"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="openAccordion === 'tab'" class="px-6 py-6 border-t border-gray-200">
          <div class="max-w-2xl">
            <Tab :tabs="tabItems" />
          </div>
        </div>
      </div>

      <!-- Accordion Component -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          @click="toggleAccordion('accordion')"
          class="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
        >
          <h3 class="text-lg font-semibold">Accordion Component</h3>
          <svg
            :class="['w-5 h-5 transition-transform duration-200', openAccordion === 'accordion' ? 'rotate-180' : '']"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="openAccordion === 'accordion'" class="px-6 py-6 border-t border-gray-200">
          <div class="max-w-2xl">
            <Accordion :items="accordionItems" :allow-multiple="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import ColorPalette from '@/components/ColorPalette.vue'
import Swiper from '@/components/Swiper.vue'
import Chat from '@/components/Chat.vue'
import Tab from '@/components/Tab.vue'
import Accordion from '@/components/Accordion.vue'

const openAccordion = ref<string | null>('button')

function toggleAccordion(section: string) {
  openAccordion.value = openAccordion.value === section ? null : section
}

const slides = [
  { title: 'Slide 1', description: 'This is the first slide', image: '' },
  { title: 'Slide 2', description: 'This is the second slide', image: '' },
  { title: 'Slide 3', description: 'This is the third slide', image: '' }
]

const tabItems = [
  { title: '홈', content: '홈 페이지 내용입니다.' },
  { title: '프로필', content: '프로필 페이지 내용입니다.' },
  { title: '설정', content: '설정 페이지 내용입니다.' }
]

const accordionItems = [
  { title: '자주 묻는 질문 1', content: '첫 번째 질문에 대한 답변입니다.' },
  { title: '자주 묻는 질문 2', content: '두 번째 질문에 대한 답변입니다.' },
  { title: '자주 묻는 질문 3', content: '세 번째 질문에 대한 답변입니다.' }
]
</script> 