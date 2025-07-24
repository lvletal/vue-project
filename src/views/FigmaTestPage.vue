<template>
  <div class="min-h-screen bg-gray-900 text-white p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">Figma Test Page</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Test Controls -->
        <div class="lg:col-span-1">
          <div class="bg-gray-800 p-6 rounded-lg sticky top-8">
            <h2 class="text-xl font-semibold mb-4">Test Controls</h2>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-2">Figma File ID</label>
                <input 
                  v-model="figmaFileId" 
                  type="text" 
                  placeholder="pNIwua4x9MJaxyZ8KEaMY5"
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-2">Node ID</label>
                <input 
                  v-model="nodeId" 
                  type="text" 
                  placeholder="2768-76199"
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-2">Access Token</label>
                <input 
                  v-model="accessToken" 
                  type="password" 
                  placeholder="Enter Figma access token"
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <button 
                @click="testFigmaConnection"
                :disabled="isLoading"
                class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                {{ isLoading ? 'Testing...' : 'Test Connection' }}
              </button>
              
              <button 
                @click="generateComponent"
                :disabled="!testResult || isGenerating"
                class="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                {{ isGenerating ? 'Generating...' : 'Generate Component' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Test Results -->
        <div class="lg:col-span-2">
          <div class="space-y-6">
            <!-- Connection Test -->
            <div class="bg-gray-800 p-6 rounded-lg">
              <h2 class="text-xl font-semibold mb-4">Connection Test</h2>
              <div v-if="testResult" class="space-y-4">
                <div class="flex items-center space-x-2">
                  <div :class="testResult.success ? 'bg-green-500' : 'bg-red-500'" class="w-3 h-3 rounded-full"></div>
                  <span class="font-medium">{{ testResult.success ? 'Connection Successful' : 'Connection Failed' }}</span>
                </div>
                
                <div v-if="testResult.data" class="bg-gray-700 p-4 rounded">
                  <h3 class="font-medium mb-2">Node Data:</h3>
                  <pre class="text-sm text-gray-300 overflow-auto">{{ JSON.stringify(testResult.data, null, 2) }}</pre>
                </div>
                
                <div v-if="testResult.error" class="bg-red-900 p-4 rounded">
                  <h3 class="font-medium mb-2 text-red-300">Error:</h3>
                  <p class="text-red-300">{{ testResult.error }}</p>
                </div>
              </div>
              
              <div v-else class="text-gray-400">
                Click "Test Connection" to check Figma API connectivity
              </div>
            </div>

            <!-- Generated Component -->
            <div v-if="generatedComponent" class="bg-gray-800 p-6 rounded-lg">
              <h2 class="text-xl font-semibold mb-4">Generated Component</h2>
              <div class="space-y-4">
                <div class="flex space-x-2">
                  <button @click="copyCode" class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
                    Copy Code
                  </button>
                  <button @click="downloadComponent" class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm">
                    Download
                  </button>
                </div>
                
                <div class="bg-gray-700 p-4 rounded">
                  <h3 class="font-medium mb-2">Vue Component Code:</h3>
                  <pre class="text-sm text-gray-300 overflow-auto max-h-96">{{ generatedComponent }}</pre>
                </div>
              </div>
            </div>

            <!-- Test History -->
            <div class="bg-gray-800 p-6 rounded-lg">
              <h2 class="text-xl font-semibold mb-4">Test History</h2>
              <div class="space-y-3">
                <div v-for="test in testHistory" :key="test.id" class="bg-gray-700 p-3 rounded">
                  <div class="flex justify-between items-start">
                    <div>
                      <h3 class="font-medium">{{ test.name }}</h3>
                      <p class="text-sm text-gray-400">{{ test.fileId }} - {{ test.nodeId }}</p>
                      <p class="text-xs text-gray-500">{{ formatDate(test.date) }}</p>
                    </div>
                    <span :class="test.success ? 'bg-green-600' : 'bg-red-600'" class="px-2 py-1 rounded text-xs">
                      {{ test.success ? 'Success' : 'Failed' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const figmaFileId = ref('pNIwua4x9MJaxyZ8KEaMY5')
const nodeId = ref('2768-76199')
const accessToken = ref('')
const isLoading = ref(false)
const isGenerating = ref(false)
const testResult = ref(null)
const generatedComponent = ref(null)

const testHistory = ref([
  {
    id: 1,
    name: 'VIP Club Test',
    fileId: 'pNIwua4x9MJaxyZ8KEaMY5',
    nodeId: '2768-76199',
    date: new Date('2024-01-15'),
    success: true
  },
  {
    id: 2,
    name: 'Landing Page Test',
    fileId: 'abc123',
    nodeId: '456-789',
    date: new Date('2024-01-10'),
    success: false
  }
])

const testFigmaConnection = async () => {
  if (!figmaFileId.value || !nodeId.value || !accessToken.value) {
    alert('Please fill in all fields')
    return
  }

  isLoading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    testResult.value = {
      success: true,
      data: {
        id: nodeId.value,
        name: 'VIP Club Section',
        type: 'FRAME',
        children: [
          {
            id: '1',
            name: 'Header',
            type: 'TEXT'
          },
          {
            id: '2',
            name: 'Accordion',
            type: 'COMPONENT'
          }
        ]
      }
    }
    
    // Add to history
    testHistory.value.unshift({
      id: Date.now(),
      name: 'Test Connection',
      fileId: figmaFileId.value,
      nodeId: nodeId.value,
      date: new Date(),
      success: true
    })
    
  } catch (error) {
    console.error('Test failed:', error)
    testResult.value = {
      success: false,
      error: 'Failed to connect to Figma API. Please check your token and file ID.'
    }
  } finally {
    isLoading.value = false
  }
}

const generateComponent = async () => {
  if (!testResult.value?.success) {
    alert('Please test connection first')
    return
  }

  isGenerating.value = true
  
  try {
    // Simulate generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    generatedComponent.value = `<template>
  <div class="vip-club-section">
    <h1 class="text-2xl font-bold mb-4">VIP CLUB</h1>
    <div class="space-y-4">
      <div class="accordion-item">
        <h3 class="text-lg font-semibold">Play Comp</h3>
        <p class="text-gray-600">Level up system</p>
      </div>
      <div class="accordion-item">
        <h3 class="text-lg font-semibold">Level Up Bonus</h3>
        <p class="text-gray-600">Get bonus when you level up</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
.vip-club-section {
  padding: 1rem;
  background: #212329;
  border-radius: 1rem;
}

.accordion-item {
  padding: 1rem;
  background: #2e3037;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>`
    
  } catch (error) {
    console.error('Generation failed:', error)
    alert('Failed to generate component')
  } finally {
    isGenerating.value = false
  }
}

const copyCode = () => {
  if (generatedComponent.value) {
    navigator.clipboard.writeText(generatedComponent.value)
    alert('Code copied to clipboard!')
  }
}

const downloadComponent = () => {
  if (generatedComponent.value) {
    const blob = new Blob([generatedComponent.value], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'generated-component.vue'
    a.click()
    URL.revokeObjectURL(url)
  }
}

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}
</script> 