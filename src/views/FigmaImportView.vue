<template>
  <div class="min-h-screen bg-gray-900 text-white p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">Figma Import</h1>
      
      <!-- Figma URL Input -->
      <div class="bg-gray-800 p-6 rounded-lg mb-8">
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

      <!-- Import Results -->
      <div v-if="importResult" class="bg-gray-800 p-6 rounded-lg">
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
    
  } catch (error) {
    console.error('Import failed:', error)
    alert('Import failed. Please check your URL and token.')
  } finally {
    isLoading.value = false
  }
}
</script> 