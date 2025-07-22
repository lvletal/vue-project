<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
    <!-- Header -->
    <header class="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div class="flex items-center space-x-4">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
            </svg>
          </div>
          <h1 class="text-xl font-bold text-white">Token Studio</h1>
        </div>
        <div class="flex items-center space-x-4">
          <button 
            @click="syncWithFigma" 
            :disabled="!figmaConnected"
            class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            Sync with Figma
          </button>
          <button 
            @click="exportTokens" 
            class="border border-white/30 hover:border-white/50 text-white px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-white/10"
          >
            Export Tokens
          </button>
        </div>
      </nav>
    </header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Connection Status -->
      <div class="mb-8">
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <div :class="figmaConnected ? 'bg-green-500' : 'bg-red-500'" class="w-3 h-3 rounded-full"></div>
                <span class="text-white font-medium">
                  {{ figmaConnected ? 'Connected to Figma' : 'Not connected to Figma' }}
                </span>
              </div>
              <div v-if="figmaConnected" class="text-blue-300 text-sm">
                File: {{ figmaFileName }}
              </div>
            </div>
            <button 
              @click="connectFigma" 
              :class="figmaConnected ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'"
              class="text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              {{ figmaConnected ? 'Disconnect' : 'Connect Figma' }}
            </button>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Token Categories -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Colors -->
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
              </svg>
              Colors
            </h3>
            <div class="space-y-3">
              <div v-for="color in colorTokens" :key="color.name" class="flex items-center space-x-3">
                <div :style="{ backgroundColor: color.value }" class="w-8 h-8 rounded-lg border border-white/20"></div>
                <div class="flex-1">
                  <div class="text-white text-sm font-medium">{{ color.name }}</div>
                  <div class="text-blue-300 text-xs">{{ color.value }}</div>
                </div>
                <button @click="editToken(color)" class="text-blue-400 hover:text-blue-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Typography -->
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              Typography
            </h3>
            <div class="space-y-3">
              <div v-for="font in typographyTokens" :key="font.name" class="flex items-center justify-between">
                <div>
                  <div class="text-white text-sm font-medium">{{ font.name }}</div>
                  <div class="text-blue-300 text-xs">{{ font.value }}</div>
                </div>
                <button @click="editToken(font)" class="text-blue-400 hover:text-blue-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Spacing -->
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
              </svg>
              Spacing
            </h3>
            <div class="space-y-3">
              <div v-for="space in spacingTokens" :key="space.name" class="flex items-center justify-between">
                <div>
                  <div class="text-white text-sm font-medium">{{ space.name }}</div>
                  <div class="text-blue-300 text-xs">{{ space.value }}</div>
                </div>
                <button @click="editToken(space)" class="text-blue-400 hover:text-blue-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Preview & Editor -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Live Preview -->
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 class="text-lg font-semibold text-white mb-4">Live Preview</h3>
            <div class="bg-white rounded-lg p-6 shadow-lg">
              <div class="space-y-4">
                <h1 class="text-3xl font-bold" :style="{ color: selectedColorToken?.value || '#000' }">
                  Sample Heading
                </h1>
                <p class="text-gray-600" :style="{ fontSize: selectedTypographyToken?.value || '16px' }">
                  This is a sample paragraph that demonstrates how your design tokens will look in practice.
                </p>
                <div class="flex space-x-4">
                  <button class="px-4 py-2 rounded-lg text-white font-medium" :style="{ backgroundColor: colorTokens[0]?.value || '#3B82F6' }">
                    Primary Button
                  </button>
                  <button class="px-4 py-2 rounded-lg border text-gray-700 font-medium">
                    Secondary Button
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Token Editor -->
          <div v-if="editingToken" class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 class="text-lg font-semibold text-white mb-4">Edit Token</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-white text-sm font-medium mb-2">Name</label>
                <input 
                  v-model="editingToken.name" 
                  type="text" 
                  class="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>
              <div>
                <label class="block text-white text-sm font-medium mb-2">Value</label>
                <input 
                  v-model="editingToken.value" 
                  type="text" 
                  class="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>
              <div class="flex space-x-3">
                <button @click="saveToken" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                  Save Changes
                </button>
                <button @click="cancelEdit" class="border border-white/30 hover:border-white/50 text-white px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-white/10">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          <!-- Sync Status -->
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 class="text-lg font-semibold text-white mb-4">Sync Status</h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-white">Last sync:</span>
                <span class="text-blue-300">{{ lastSyncTime || 'Never' }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-white">Tokens synced:</span>
                <span class="text-blue-300">{{ totalTokens }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-white">Status:</span>
                <span :class="syncStatus === 'success' ? 'text-green-400' : syncStatus === 'error' ? 'text-red-400' : 'text-yellow-400'">
                  {{ syncStatusText }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { figmaService, type FigmaToken as FigmaTokenType } from '../services/figmaService'

interface DesignToken {
  name: string
  value: string
  category: 'color' | 'typography' | 'spacing'
  figmaId?: string
}

// State
const figmaConnected = ref(false)
const figmaFileName = ref('')
const lastSyncTime = ref('')
const syncStatus = ref<'idle' | 'syncing' | 'success' | 'error'>('idle')
const editingToken = ref<DesignToken | null>(null)
const originalToken = ref<DesignToken | null>(null)

// Design Tokens
const colorTokens = ref<DesignToken[]>([
  // Primary Colors
  { name: 'Primary 50', value: '#EFF6FF', category: 'color' },
  { name: 'Primary 100', value: '#DBEAFE', category: 'color' },
  { name: 'Primary 200', value: '#BFDBFE', category: 'color' },
  { name: 'Primary 300', value: '#93C5FD', category: 'color' },
  { name: 'Primary 400', value: '#60A5FA', category: 'color' },
  { name: 'Primary 500', value: '#3B82F6', category: 'color' },
  { name: 'Primary 600', value: '#2563EB', category: 'color' },
  { name: 'Primary 700', value: '#1D4ED8', category: 'color' },
  { name: 'Primary 800', value: '#1E40AF', category: 'color' },
  { name: 'Primary 900', value: '#1E3A8A', category: 'color' },
  { name: 'Primary 950', value: '#172554', category: 'color' },
  
  // Secondary Colors
  { name: 'Secondary 50', value: '#F5F3FF', category: 'color' },
  { name: 'Secondary 100', value: '#EDE9FE', category: 'color' },
  { name: 'Secondary 200', value: '#DDD6FE', category: 'color' },
  { name: 'Secondary 300', value: '#C4B5FD', category: 'color' },
  { name: 'Secondary 400', value: '#A78BFA', category: 'color' },
  { name: 'Secondary 500', value: '#8B5CF6', category: 'color' },
  { name: 'Secondary 600', value: '#7C3AED', category: 'color' },
  { name: 'Secondary 700', value: '#6D28D9', category: 'color' },
  { name: 'Secondary 800', value: '#5B21B6', category: 'color' },
  { name: 'Secondary 900', value: '#4C1D95', category: 'color' },
  { name: 'Secondary 950', value: '#2E1065', category: 'color' },
  
  // Success Colors
  { name: 'Success 50', value: '#ECFDF5', category: 'color' },
  { name: 'Success 100', value: '#D1FAE5', category: 'color' },
  { name: 'Success 200', value: '#A7F3D0', category: 'color' },
  { name: 'Success 300', value: '#6EE7B7', category: 'color' },
  { name: 'Success 400', value: '#34D399', category: 'color' },
  { name: 'Success 500', value: '#10B981', category: 'color' },
  { name: 'Success 600', value: '#059669', category: 'color' },
  { name: 'Success 700', value: '#047857', category: 'color' },
  { name: 'Success 800', value: '#065F46', category: 'color' },
  { name: 'Success 900', value: '#064E3B', category: 'color' },
  { name: 'Success 950', value: '#022C22', category: 'color' },
  
  // Warning Colors
  { name: 'Warning 50', value: '#FFFBEB', category: 'color' },
  { name: 'Warning 100', value: '#FEF3C7', category: 'color' },
  { name: 'Warning 200', value: '#FDE68A', category: 'color' },
  { name: 'Warning 300', value: '#FCD34D', category: 'color' },
  { name: 'Warning 400', value: '#FBBF24', category: 'color' },
  { name: 'Warning 500', value: '#F59E0B', category: 'color' },
  { name: 'Warning 600', value: '#D97706', category: 'color' },
  { name: 'Warning 700', value: '#B45309', category: 'color' },
  { name: 'Warning 800', value: '#92400E', category: 'color' },
  { name: 'Warning 900', value: '#78350F', category: 'color' },
  { name: 'Warning 950', value: '#451A03', category: 'color' },
  
  // Error Colors
  { name: 'Error 50', value: '#FEF2F2', category: 'color' },
  { name: 'Error 100', value: '#FEE2E2', category: 'color' },
  { name: 'Error 200', value: '#FECACA', category: 'color' },
  { name: 'Error 300', value: '#FCA5A5', category: 'color' },
  { name: 'Error 400', value: '#F87171', category: 'color' },
  { name: 'Error 500', value: '#EF4444', category: 'color' },
  { name: 'Error 600', value: '#DC2626', category: 'color' },
  { name: 'Error 700', value: '#B91C1C', category: 'color' },
  { name: 'Error 800', value: '#991B1B', category: 'color' },
  { name: 'Error 900', value: '#7F1D1D', category: 'color' },
  { name: 'Error 950', value: '#450A0A', category: 'color' },
  
  // Neutral Colors
  { name: 'Neutral 50', value: '#F9FAFB', category: 'color' },
  { name: 'Neutral 100', value: '#F3F4F6', category: 'color' },
  { name: 'Neutral 200', value: '#E5E7EB', category: 'color' },
  { name: 'Neutral 300', value: '#D1D5DB', category: 'color' },
  { name: 'Neutral 400', value: '#9CA3AF', category: 'color' },
  { name: 'Neutral 500', value: '#6B7280', category: 'color' },
  { name: 'Neutral 600', value: '#4B5563', category: 'color' },
  { name: 'Neutral 700', value: '#374151', category: 'color' },
  { name: 'Neutral 800', value: '#1F2937', category: 'color' },
  { name: 'Neutral 900', value: '#111827', category: 'color' },
  { name: 'Neutral 950', value: '#030712', category: 'color' },
  
  // System Colors
  { name: 'Background Primary', value: '#FFFFFF', category: 'color' },
  { name: 'Background Secondary', value: '#F9FAFB', category: 'color' },
  { name: 'Background Tertiary', value: '#F3F4F6', category: 'color' },
  { name: 'Background Dark', value: '#111827', category: 'color' },
  { name: 'Background Dark Secondary', value: '#1F2937', category: 'color' },
  { name: 'Background Dark Tertiary', value: '#374151', category: 'color' },
  
  // Text Colors
  { name: 'Text Primary', value: '#111827', category: 'color' },
  { name: 'Text Secondary', value: '#6B7280', category: 'color' },
  { name: 'Text Tertiary', value: '#9CA3AF', category: 'color' },
  { name: 'Text Inverse', value: '#FFFFFF', category: 'color' },
  { name: 'Text Inverse Secondary', value: '#D1D5DB', category: 'color' },
  
  // Border Colors
  { name: 'Border Primary', value: '#E5E7EB', category: 'color' },
  { name: 'Border Secondary', value: '#D1D5DB', category: 'color' },
  { name: 'Border Dark', value: '#374151', category: 'color' },
  { name: 'Border Dark Secondary', value: '#4B5563', category: 'color' },
  
  // Overlay Colors
  { name: 'Overlay Light', value: 'rgba(0, 0, 0, 0.1)', category: 'color' },
  { name: 'Overlay Medium', value: 'rgba(0, 0, 0, 0.3)', category: 'color' },
  { name: 'Overlay Dark', value: 'rgba(0, 0, 0, 0.5)', category: 'color' },
  { name: 'Overlay Darker', value: 'rgba(0, 0, 0, 0.7)', category: 'color' }
])

const typographyTokens = ref<DesignToken[]>([
  { name: 'Heading Large', value: '32px', category: 'typography' },
  { name: 'Heading Medium', value: '24px', category: 'typography' },
  { name: 'Heading Small', value: '20px', category: 'typography' },
  { name: 'Body Large', value: '18px', category: 'typography' },
  { name: 'Body Medium', value: '16px', category: 'typography' },
  { name: 'Body Small', value: '14px', category: 'typography' }
])

const spacingTokens = ref<DesignToken[]>([
  { name: 'Spacing XS', value: '4px', category: 'spacing' },
  { name: 'Spacing SM', value: '8px', category: 'spacing' },
  { name: 'Spacing MD', value: '16px', category: 'spacing' },
  { name: 'Spacing LG', value: '24px', category: 'spacing' },
  { name: 'Spacing XL', value: '32px', category: 'spacing' },
  { name: 'Spacing XXL', value: '48px', category: 'spacing' }
])

// Computed
const totalTokens = computed(() => 
  colorTokens.value.length + typographyTokens.value.length + spacingTokens.value.length
)

const syncStatusText = computed(() => {
  switch (syncStatus.value) {
    case 'syncing': return 'Syncing...'
    case 'success': return 'Synced successfully'
    case 'error': return 'Sync failed'
    default: return 'Ready to sync'
  }
})

const selectedColorToken = computed(() => colorTokens.value[0])
const selectedTypographyToken = computed(() => typographyTokens.value[4]) // Body Medium

// Methods
const connectFigma = async () => {
  if (figmaConnected.value) {
    figmaService.disconnect()
    figmaConnected.value = false
    figmaFileName.value = ''
    return
  }

  try {
    // 실제 Figma 연결을 위해서는 access token과 file key가 필요합니다
    // 여기서는 시뮬레이션을 위해 더미 데이터를 사용합니다
    const accessToken = 'your-figma-access-token' // 실제 토큰으로 교체 필요
    const fileKey = 'your-figma-file-key' // 실제 파일 키로 교체 필요
    
    // 실제 연결 시도 (토큰이 유효하지 않으면 에러 발생)
    // const connection = await figmaService.connect(accessToken, fileKey)
    // figmaConnected.value = true
    // figmaFileName.value = connection.fileName
    
    // 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1000))
    figmaConnected.value = true
    figmaFileName.value = 'Design System.fig'
    showNotification('Successfully connected to Figma!', 'success')
  } catch (error) {
    showNotification('Failed to connect to Figma', 'error')
  }
}

const syncWithFigma = async () => {
  if (!figmaConnected.value) {
    showNotification('Please connect to Figma first', 'error')
    return
  }

  syncStatus.value = 'syncing'
  
  try {
    // 실제 Figma API 호출
    // const figmaTokens = await figmaService.extractTokens('your-figma-file-key')
    
    // 시뮬레이션: Figma에서 가져온 토큰 데이터
    const figmaTokens: FigmaTokenType[] = [
      // Primary Colors
      { id: '1', name: 'Primary 50', value: '#EFF6FF', type: 'color' },
      { id: '2', name: 'Primary 100', value: '#DBEAFE', type: 'color' },
      { id: '3', name: 'Primary 200', value: '#BFDBFE', type: 'color' },
      { id: '4', name: 'Primary 300', value: '#93C5FD', type: 'color' },
      { id: '5', name: 'Primary 400', value: '#60A5FA', type: 'color' },
      { id: '6', name: 'Primary 500', value: '#3B82F6', type: 'color' },
      { id: '7', name: 'Primary 600', value: '#2563EB', type: 'color' },
      { id: '8', name: 'Primary 700', value: '#1D4ED8', type: 'color' },
      { id: '9', name: 'Primary 800', value: '#1E40AF', type: 'color' },
      { id: '10', name: 'Primary 900', value: '#1E3A8A', type: 'color' },
      { id: '11', name: 'Primary 950', value: '#172554', type: 'color' },
      
      // Secondary Colors
      { id: '12', name: 'Secondary 50', value: '#F5F3FF', type: 'color' },
      { id: '13', name: 'Secondary 100', value: '#EDE9FE', type: 'color' },
      { id: '14', name: 'Secondary 200', value: '#DDD6FE', type: 'color' },
      { id: '15', name: 'Secondary 300', value: '#C4B5FD', type: 'color' },
      { id: '16', name: 'Secondary 400', value: '#A78BFA', type: 'color' },
      { id: '17', name: 'Secondary 500', value: '#8B5CF6', type: 'color' },
      { id: '18', name: 'Secondary 600', value: '#7C3AED', type: 'color' },
      { id: '19', name: 'Secondary 700', value: '#6D28D9', type: 'color' },
      { id: '20', name: 'Secondary 800', value: '#5B21B6', type: 'color' },
      { id: '21', name: 'Secondary 900', value: '#4C1D95', type: 'color' },
      { id: '22', name: 'Secondary 950', value: '#2E1065', type: 'color' },
      
      // Success Colors
      { id: '23', name: 'Success 50', value: '#ECFDF5', type: 'color' },
      { id: '24', name: 'Success 100', value: '#D1FAE5', type: 'color' },
      { id: '25', name: 'Success 200', value: '#A7F3D0', type: 'color' },
      { id: '26', name: 'Success 300', value: '#6EE7B7', type: 'color' },
      { id: '27', name: 'Success 400', value: '#34D399', type: 'color' },
      { id: '28', name: 'Success 500', value: '#10B981', type: 'color' },
      { id: '29', name: 'Success 600', value: '#059669', type: 'color' },
      { id: '30', name: 'Success 700', value: '#047857', type: 'color' },
      { id: '31', name: 'Success 800', value: '#065F46', type: 'color' },
      { id: '32', name: 'Success 900', value: '#064E3B', type: 'color' },
      { id: '33', name: 'Success 950', value: '#022C22', type: 'color' },
      
      // Warning Colors
      { id: '34', name: 'Warning 50', value: '#FFFBEB', type: 'color' },
      { id: '35', name: 'Warning 100', value: '#FEF3C7', type: 'color' },
      { id: '36', name: 'Warning 200', value: '#FDE68A', type: 'color' },
      { id: '37', name: 'Warning 300', value: '#FCD34D', type: 'color' },
      { id: '38', name: 'Warning 400', value: '#FBBF24', type: 'color' },
      { id: '39', name: 'Warning 500', value: '#F59E0B', type: 'color' },
      { id: '40', name: 'Warning 600', value: '#D97706', type: 'color' },
      { id: '41', name: 'Warning 700', value: '#B45309', type: 'color' },
      { id: '42', name: 'Warning 800', value: '#92400E', type: 'color' },
      { id: '43', name: 'Warning 900', value: '#78350F', type: 'color' },
      { id: '44', name: 'Warning 950', value: '#451A03', type: 'color' },
      
      // Error Colors
      { id: '45', name: 'Error 50', value: '#FEF2F2', type: 'color' },
      { id: '46', name: 'Error 100', value: '#FEE2E2', type: 'color' },
      { id: '47', name: 'Error 200', value: '#FECACA', type: 'color' },
      { id: '48', name: 'Error 300', value: '#FCA5A5', type: 'color' },
      { id: '49', name: 'Error 400', value: '#F87171', type: 'color' },
      { id: '50', name: 'Error 500', value: '#EF4444', type: 'color' },
      { id: '51', name: 'Error 600', value: '#DC2626', type: 'color' },
      { id: '52', name: 'Error 700', value: '#B91C1C', type: 'color' },
      { id: '53', name: 'Error 800', value: '#991B1B', type: 'color' },
      { id: '54', name: 'Error 900', value: '#7F1D1D', type: 'color' },
      { id: '55', name: 'Error 950', value: '#450A0A', type: 'color' },
      
      // Neutral Colors
      { id: '56', name: 'Neutral 50', value: '#F9FAFB', type: 'color' },
      { id: '57', name: 'Neutral 100', value: '#F3F4F6', type: 'color' },
      { id: '58', name: 'Neutral 200', value: '#E5E7EB', type: 'color' },
      { id: '59', name: 'Neutral 300', value: '#D1D5DB', type: 'color' },
      { id: '60', name: 'Neutral 400', value: '#9CA3AF', type: 'color' },
      { id: '61', name: 'Neutral 500', value: '#6B7280', type: 'color' },
      { id: '62', name: 'Neutral 600', value: '#4B5563', type: 'color' },
      { id: '63', name: 'Neutral 700', value: '#374151', type: 'color' },
      { id: '64', name: 'Neutral 800', value: '#1F2937', type: 'color' },
      { id: '65', name: 'Neutral 900', value: '#111827', type: 'color' },
      { id: '66', name: 'Neutral 950', value: '#030712', type: 'color' },
      
      // System Colors
      { id: '67', name: 'Background Primary', value: '#FFFFFF', type: 'color' },
      { id: '68', name: 'Background Secondary', value: '#F9FAFB', type: 'color' },
      { id: '69', name: 'Background Tertiary', value: '#F3F4F6', type: 'color' },
      { id: '70', name: 'Background Dark', value: '#111827', type: 'color' },
      { id: '71', name: 'Background Dark Secondary', value: '#1F2937', type: 'color' },
      { id: '72', name: 'Background Dark Tertiary', value: '#374151', type: 'color' },
      
      // Text Colors
      { id: '73', name: 'Text Primary', value: '#111827', type: 'color' },
      { id: '74', name: 'Text Secondary', value: '#6B7280', type: 'color' },
      { id: '75', name: 'Text Tertiary', value: '#9CA3AF', type: 'color' },
      { id: '76', name: 'Text Inverse', value: '#FFFFFF', type: 'color' },
      { id: '77', name: 'Text Inverse Secondary', value: '#D1D5DB', type: 'color' },
      
      // Border Colors
      { id: '78', name: 'Border Primary', value: '#E5E7EB', type: 'color' },
      { id: '79', name: 'Border Secondary', value: '#D1D5DB', type: 'color' },
      { id: '80', name: 'Border Dark', value: '#374151', type: 'color' },
      { id: '81', name: 'Border Dark Secondary', value: '#4B5563', type: 'color' },
      
      // Overlay Colors
      { id: '82', name: 'Overlay Light', value: 'rgba(0, 0, 0, 0.1)', type: 'color' },
      { id: '83', name: 'Overlay Medium', value: 'rgba(0, 0, 0, 0.3)', type: 'color' },
      { id: '84', name: 'Overlay Dark', value: 'rgba(0, 0, 0, 0.5)', type: 'color' },
      { id: '85', name: 'Overlay Darker', value: 'rgba(0, 0, 0, 0.7)', type: 'color' },
      
      // Typography
      { id: '86', name: 'Heading Large', value: '32px', type: 'typography' },
      { id: '87', name: 'Body Medium', value: '16px', type: 'typography' },
      
      // Spacing
      { id: '88', name: 'Spacing MD', value: '16px', type: 'spacing' }
    ]

    // 토큰 업데이트
    figmaTokens.forEach(figmaToken => {
      if (figmaToken.type === 'color') {
        const existingToken = colorTokens.value.find(t => t.name === figmaToken.name)
        if (existingToken) {
          existingToken.value = figmaToken.value
          existingToken.figmaId = figmaToken.id
        }
      } else if (figmaToken.type === 'typography') {
        const existingToken = typographyTokens.value.find(t => t.name === figmaToken.name)
        if (existingToken) {
          existingToken.value = figmaToken.value
          existingToken.figmaId = figmaToken.id
        }
      } else if (figmaToken.type === 'spacing') {
        const existingToken = spacingTokens.value.find(t => t.name === figmaToken.name)
        if (existingToken) {
          existingToken.value = figmaToken.value
          existingToken.figmaId = figmaToken.id
        }
      }
    })

    lastSyncTime.value = new Date().toLocaleString()
    syncStatus.value = 'success'
    showNotification('Successfully synced with Figma!', 'success')
  } catch (error) {
    syncStatus.value = 'error'
    showNotification('Failed to sync with Figma', 'error')
  }
}

const editToken = (token: DesignToken) => {
  editingToken.value = { ...token }
  originalToken.value = { ...token }
}

const saveToken = () => {
  if (!editingToken.value) return

  // Update the token in the appropriate array
  const updateArray = (tokens: DesignToken[]) => {
    const index = tokens.findIndex(t => t.name === originalToken.value?.name)
    if (index !== -1) {
      tokens[index] = { ...editingToken.value! }
    }
  }

  updateArray(colorTokens.value)
  updateArray(typographyTokens.value)
  updateArray(spacingTokens.value)

  editingToken.value = null
  originalToken.value = null
  showNotification('Token updated successfully!', 'success')
}

const cancelEdit = () => {
  editingToken.value = null
  originalToken.value = null
}

const exportTokens = () => {
  const tokens = {
    colors: colorTokens.value,
    typography: typographyTokens.value,
    spacing: spacingTokens.value
  }

  const blob = new Blob([JSON.stringify(tokens, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'design-tokens.json'
  a.click()
  URL.revokeObjectURL(url)
  
  showNotification('Tokens exported successfully!', 'success')
}

const showNotification = (message: string, type: 'success' | 'error' | 'info') => {
  // Simple notification - you can replace with a proper notification system
  console.log(`${type.toUpperCase()}: ${message}`)
}

// Lifecycle
onMounted(() => {
  // Initialize with some default state
  lastSyncTime.value = ''
})
</script> 