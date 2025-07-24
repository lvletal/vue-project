<template>
  <div class="min-h-screen bg-gray-900 text-white p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">MCP Status</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- MCP Connection Status -->
        <div class="bg-gray-800 p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">Connection Status</h2>
          
          <div class="space-y-4">
            <div v-for="service in mcpServices" :key="service.name" class="flex items-center justify-between p-3 bg-gray-700 rounded">
              <div class="flex items-center space-x-3">
                <div :class="service.status === 'connected' ? 'bg-green-500' : service.status === 'connecting' ? 'bg-yellow-500' : 'bg-red-500'" class="w-3 h-3 rounded-full"></div>
                <div>
                  <h3 class="font-medium">{{ service.name }}</h3>
                  <p class="text-sm text-gray-400">{{ service.description }}</p>
                </div>
              </div>
              <span :class="getStatusClass(service.status)" class="px-2 py-1 rounded text-xs">
                {{ service.status }}
              </span>
            </div>
          </div>
          
          <div class="mt-6">
            <button 
              @click="connectAll"
              :disabled="isConnecting"
              class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {{ isConnecting ? 'Connecting...' : 'Connect All Services' }}
            </button>
          </div>
        </div>

        <!-- Configuration -->
        <div class="bg-gray-800 p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">Configuration</h2>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2">MCP Server URL</label>
              <input 
                v-model="mcpConfig.serverUrl" 
                type="text" 
                placeholder="ws://localhost:3005"
                class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2">Figma Access Token</label>
              <input 
                v-model="mcpConfig.figmaToken" 
                type="password" 
                placeholder="Enter Figma access token"
                class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2">Environment</label>
              <select 
                v-model="mcpConfig.environment"
                class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="development">Development</option>
                <option value="staging">Staging</option>
                <option value="production">Production</option>
              </select>
            </div>
            
            <button 
              @click="saveConfig"
              class="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Save Configuration
            </button>
          </div>
        </div>
      </div>

      <!-- Logs -->
      <div class="mt-8 bg-gray-800 p-6 rounded-lg">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Connection Logs</h2>
          <button @click="clearLogs" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm">
            Clear Logs
          </button>
        </div>
        
        <div class="bg-gray-900 p-4 rounded max-h-64 overflow-y-auto">
          <div v-for="log in logs" :key="log.id" class="text-sm font-mono">
            <span class="text-gray-500">[{{ formatTime(log.timestamp) }}]</span>
            <span :class="getLogLevelClass(log.level)" class="ml-2">{{ log.level.toUpperCase() }}</span>
            <span class="ml-2 text-gray-300">{{ log.message }}</span>
          </div>
        </div>
      </div>

      <!-- Statistics -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Total Connections</h3>
          <p class="text-3xl font-bold text-blue-500">{{ stats.totalConnections }}</p>
        </div>
        
        <div class="bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Active Connections</h3>
          <p class="text-3xl font-bold text-green-500">{{ stats.activeConnections }}</p>
        </div>
        
        <div class="bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Failed Connections</h3>
          <p class="text-3xl font-bold text-red-500">{{ stats.failedConnections }}</p>
        </div>
        
        <div class="bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Uptime</h3>
          <p class="text-3xl font-bold text-purple-500">{{ stats.uptime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isConnecting = ref(false)
const logs = ref([])
const stats = ref({
  totalConnections: 0,
  activeConnections: 0,
  failedConnections: 0,
  uptime: '0h 0m'
})

const mcpConfig = ref({
  serverUrl: 'ws://localhost:3005',
  figmaToken: '',
  environment: 'development'
})

const mcpServices = ref([
  {
    name: 'Figma MCP Server',
    description: 'Figma API integration and file management',
    status: 'disconnected'
  },
  {
    name: 'Design System MCP',
    description: 'Design tokens and component library',
    status: 'disconnected'
  },
  {
    name: 'Code Generation MCP',
    description: 'Vue component generation',
    status: 'disconnected'
  },
  {
    name: 'Figma to Vue MCP',
    description: 'Figma to Vue conversion service',
    status: 'disconnected'
  },
  {
    name: 'Responsive Figma MCP',
    description: 'Responsive design conversion',
    status: 'disconnected'
  }
])

const connectAll = async () => {
  isConnecting.value = true
  addLog('info', 'Starting connection to all MCP services...')
  
  for (const service of mcpServices.value) {
    service.status = 'connecting'
    addLog('info', `Connecting to ${service.name}...`)
    
    try {
      // Simulate connection
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      service.status = 'connected'
      addLog('success', `${service.name} connected successfully`)
      stats.value.activeConnections++
      stats.value.totalConnections++
      
    } catch (error) {
      service.status = 'disconnected'
      addLog('error', `Failed to connect to ${service.name}: ${error.message}`)
      stats.value.failedConnections++
    }
  }
  
  isConnecting.value = false
  addLog('info', 'Connection process completed')
}

const saveConfig = () => {
  addLog('info', 'Configuration saved successfully')
  // Here you would typically save to localStorage or send to backend
}

const clearLogs = () => {
  logs.value = []
}

const addLog = (level, message) => {
  logs.value.push({
    id: Date.now(),
    timestamp: new Date(),
    level,
    message
  })
}

const getStatusClass = (status) => {
  switch (status) {
    case 'connected':
      return 'bg-green-600 text-white'
    case 'connecting':
      return 'bg-yellow-600 text-white'
    case 'disconnected':
      return 'bg-red-600 text-white'
    default:
      return 'bg-gray-600 text-white'
  }
}

const getLogLevelClass = (level) => {
  switch (level) {
    case 'success':
      return 'text-green-400'
    case 'error':
      return 'text-red-400'
    case 'warning':
      return 'text-yellow-400'
    default:
      return 'text-blue-400'
  }
}

const formatTime = (timestamp) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(timestamp)
}

onMounted(() => {
  addLog('info', 'MCP Status page loaded')
  
  // Simulate some initial stats
  stats.value.totalConnections = 15
  stats.value.activeConnections = 3
  stats.value.failedConnections = 2
  stats.value.uptime = '2h 30m'
})
</script> 