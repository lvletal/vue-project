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
        <router-link 
          to="/main" 
          class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors duration-200"
        >
          Main 페이지
        </router-link>
      </div>
    </div>

    <!-- Available Components Info -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold mb-4 text-center">사용 가능한 컴포넌트</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded-lg">
          <h3 class="font-semibold text-blue-800">Header Component</h3>
          <p class="text-blue-600 text-sm">네비게이션 헤더 컴포넌트</p>
        </div>
        <div class="bg-green-50 p-4 rounded-lg">
          <h3 class="font-semibold text-green-800">SwiperCardList Component</h3>
          <p class="text-green-600 text-sm">스와이프 가능한 카드 리스트 컴포넌트</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 컴포넌트가 삭제되어 간단한 홈 페이지로 변경
</script> 