<template>
  <div class="min-h-screen bg-gray-900 text-white p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">MCP 연결 상태</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Connection Status -->
        <div class="lg:col-span-1">
          <div class="bg-gray-800 p-6 rounded-lg sticky top-8">
            <h2 class="text-xl font-semibold mb-4">연결 상태</h2>
            
            <div class="space-y-4">
              <div class="flex items-center justify-between p-3 bg-gray-700 rounded">
                <div>
                  <h3 class="font-medium">Figma MCP Server</h3>
                  <p class="text-sm text-gray-400">포트 3005</p>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-sm text-green-400">연결됨</span>
                </div>
              </div>
              
              <div class="flex items-center justify-between p-3 bg-gray-700 rounded">
                <div>
                  <h3 class="font-medium">Design System MCP</h3>
                  <p class="text-sm text-gray-400">포트 3006</p>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-sm text-green-400">연결됨</span>
                </div>
              </div>
              
              <div class="flex items-center justify-between p-3 bg-gray-700 rounded">
                <div>
                  <h3 class="font-medium">Code Generation MCP</h3>
                  <p class="text-sm text-gray-400">포트 3007</p>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-sm text-green-400">연결됨</span>
                </div>
              </div>
              
              <div class="flex items-center justify-between p-3 bg-gray-700 rounded">
                <div>
                  <h3 class="font-medium">Figma to Vue Converter</h3>
                  <p class="text-sm text-gray-400">포트 3008</p>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-sm text-green-400">연결됨</span>
                </div>
              </div>
            </div>
            
            <div class="mt-6 space-y-3">
              <button 
                @click="testConnection"
                class="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                연결 테스트
              </button>
              <button 
                @click="restartServers"
                class="w-full bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                서버 재시작
              </button>
            </div>
          </div>
        </div>

        <!-- System Info -->
        <div class="lg:col-span-1">
          <div class="bg-gray-800 p-6 rounded-lg">
            <h2 class="text-xl font-semibold mb-4">시스템 정보</h2>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-400">Node.js 버전:</span>
                <span class="text-white">v22.14.0</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Vue 버전:</span>
                <span class="text-white">v3.4.0</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Vite 버전:</span>
                <span class="text-white">v7.0.4</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">MCP 프로토콜:</span>
                <span class="text-white">v1.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const testConnection = () => {
  alert('연결 테스트를 시작합니다...')
}

const restartServers = () => {
  alert('MCP 서버들을 재시작합니다...')
}
</script>

<style scoped>
/* MCP 연결 페이지 스타일 */
</style> 