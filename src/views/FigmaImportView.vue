<template>
  <div class="min-h-screen bg-gray-900 text-white p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">Figma Import</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Figma URL Input -->
        <div class="bg-gray-800 p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">Import from Figma</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2">Figma URL</label>
              <input 
                v-model="figmaUrl" 
                type="text" 
                placeholder="https://www.figma.com/file/..."
                class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Access Token</label>
              <input 
                v-model="accessToken" 
                type="password" 
                placeholder="Enter your Figma access token"
                class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button 
              @click="importFromFigma"
              :disabled="isLoading"
              class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {{ isLoading ? 'Importing...' : 'Import Design' }}
            </button>
          </div>
        </div>

        <!-- Import History -->
        <div class="bg-gray-800 p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">Import History</h2>
          <div class="space-y-3">
            <div v-for="item in importHistory" :key="item.id" class="bg-gray-700 p-3 rounded">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-medium">{{ item.name }}</h3>
                  <p class="text-sm text-gray-400">{{ item.url }}</p>
                  <p class="text-xs text-gray-500">{{ formatDate(item.date) }}</p>
                </div>
                <span :class="getStatusClass(item.status)" class="px-2 py-1 rounded text-xs">
                  {{ item.status }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Import Results -->
      <div v-if="importResult" class="mt-8 bg-gray-800 p-6 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">Import Results</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="component in importResult.components" :key="component.id" class="bg-gray-700 p-4 rounded">
            <h3 class="font-medium mb-2">{{ component.name }}</h3>
            <p class="text-sm text-gray-400 mb-3">{{ component.description }}</p>
            <div class="flex space-x-2">
              <button class="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm">
                Generate Vue
              </button>
              <button class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm">
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const figmaUrl = ref('')
const accessToken = ref('')
const isLoading = ref(false)
const importResult = ref(null)

const importHistory = ref([
  {
    id: 1,
    name: 'VIP Club Design',
    url: 'https://www.figma.com/design/pNIwua4x9MJaxyZ8KEaMY5/PLUSUSDT',
    date: new Date('2024-01-15'),
    status: 'completed'
  },
  {
    id: 2,
    name: 'Landing Page',
    url: 'https://www.figma.com/file/abc123/landing-page',
    date: new Date('2024-01-10'),
    status: 'failed'
  }
])

const importFromFigma = async () => {
  if (!figmaUrl.value || !accessToken.value) {
    alert('Please enter both Figma URL and access token')
    return
  }

  isLoading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    importResult.value = {
      components: [
        {
          id: 1,
          name: 'VIP Card',
          description: 'VIP membership card component'
        },
        {
          id: 2,
          name: 'Accordion',
          description: 'Collapsible content sections'
        },
        {
          id: 3,
          name: 'Button',
          description: 'Primary action button'
        }
      ]
    }
    
    // Add to history
    importHistory.value.unshift({
      id: Date.now(),
      name: 'New Import',
      url: figmaUrl.value,
      date: new Date(),
      status: 'completed'
    })
    
  } catch (error) {
    console.error('Import failed:', error)
    alert('Import failed. Please check your URL and token.')
  } finally {
    isLoading.value = false
  }
}

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date)
}

const getStatusClass = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-600 text-white'
    case 'failed':
      return 'bg-red-600 text-white'
    default:
      return 'bg-gray-600 text-white'
  }
}
</script> 