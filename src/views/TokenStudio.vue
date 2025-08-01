<template>
  <div class="min-h-screen bg-gray-900 text-white p-4 lg:p-6">
    <div class="max-w-8xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Token Studio</h1>
        <p class="text-gray-400">Design tokens from Figma and local tokens.json</p>
        <div class="mt-2 text-sm text-gray-500">
          Last updated: {{ lastUpdateTime }}
        </div>
      </div>

      <!-- Debug Info -->
      <div class="mb-4 p-4 bg-gray-800 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Debug Info</h3>
        <div class="text-sm space-y-1">
          <div>Total tokens loaded: {{ totalTokens }}</div>
          <div>Color tokens: {{ colorTokenCount }}</div>
          <div>Typography tokens: {{ typographyTokenCount }}</div>
          <div>Spacing tokens: {{ spacingTokenCount }}</div>
          <div>Font Family tokens: {{ fontFamilyTokenCount }}</div>
          <div>Font Weight tokens: {{ fontWeightTokenCount }}</div>
        </div>
        
        <!-- Typography Debug -->
        <div class="mt-4 p-3 bg-gray-700 rounded">
          <h4 class="text-sm font-medium mb-2">Typography Tokens Found:</h4>
          <div class="text-xs space-y-1">
            <div v-for="(set, setName) in typographyTokens" :key="setName">
              <div class="font-medium text-gray-300">{{ setName }}:</div>
              <div class="ml-4 text-gray-400">
                <div v-for="(token, tokenName) in set" :key="tokenName">
                  {{ tokenName }}: {{ token.value.fontFamily }} {{ token.value.fontSize }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Connection Status -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-gray-800 p-4 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Figma Connection</h3>
          <div class="flex items-center space-x-2">
            <div :class="figmaConnected ? 'bg-green-500' : 'bg-red-500'" class="w-3 h-3 rounded-full"></div>
            <span>{{ figmaConnected ? 'Connected' : 'Disconnected' }}</span>
          </div>
        </div>
        
        <div class="bg-gray-800 p-4 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">MCP Connection</h3>
          <div class="flex items-center space-x-2">
            <div :class="mcpConnected ? 'bg-green-500' : 'bg-red-500'" class="w-3 h-3 rounded-full"></div>
            <span>{{ mcpConnected ? 'Connected' : 'Disconnected' }}</span>
          </div>
        </div>
        
        <div class="bg-gray-800 p-4 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Sync Status</h3>
          <div class="flex items-center space-x-2">
            <div :class="syncActive ? 'bg-green-500' : 'bg-yellow-500'" class="w-3 h-3 rounded-full"></div>
            <span>{{ syncActive ? 'Active' : 'Inactive' }}</span>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex flex-wrap gap-4 mb-8">
        <button 
          @click="connectMCP" 
          :disabled="mcpConnected"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded-lg"
        >
          Connect MCP
        </button>
        <button 
          @click="startRealtimeSync" 
          :disabled="!mcpConnected || syncActive"
          class="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded-lg"
        >
          Start Sync
        </button>
        <button 
          @click="stopRealtimeSync" 
          :disabled="!syncActive"
          class="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 rounded-lg"
        >
          Stop Sync
        </button>
        <button 
          @click="disconnectMCP" 
          :disabled="!mcpConnected"
          class="px-4 py-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-500 rounded-lg"
        >
          Disconnect
        </button>
        <button 
          @click="reloadTokensFromFile" 
          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
        >
          Reload Tokens
        </button>
        <button 
          @click="showRawTokens = !showRawTokens" 
          class="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg"
        >
          {{ showRawTokens ? 'Hide' : 'Show' }} Raw Tokens
        </button>
        <button 
          @click="exportTokens" 
          class="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg"
        >
          Export Tokens
        </button>
        <button 
          @click="importTokens" 
          class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg"
        >
          Import Tokens
        </button>
        <button 
          @click="validateTokens" 
          class="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg"
        >
          Validate Tokens
        </button>
        <button 
          @click="generateCSS" 
          class="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg"
        >
          Generate CSS
        </button>
      </div>

      <!-- Raw Tokens Debug -->
      <div v-if="showRawTokens" class="mb-8 bg-gray-800 rounded-lg p-4">
        <h3 class="text-lg font-semibold mb-2">Raw Tokens Data</h3>
        <pre class="text-xs overflow-auto max-h-96 bg-gray-900 p-4 rounded">{{ JSON.stringify(tokens, null, 2) }}</pre>
      </div>

      <!-- Token Categories -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <!-- Colors -->
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <div class="w-4 h-4 bg-gradient-to-r from-red-500 to-blue-500 rounded mr-2"></div>
            Colors ({{ colorTokenCount }})
          </h3>
          <div class="space-y-3 max-h-96 overflow-y-auto">
            <div v-if="Object.keys(colorTokens).length === 0" class="text-gray-400 text-sm">
              No color tokens found
            </div>
            <div v-for="(colorSet, setName) in colorTokens" :key="setName" class="space-y-3">
              <h4 class="text-sm font-medium text-gray-300 border-b border-gray-600 pb-1">{{ setName }}</h4>
              <div class="grid grid-cols-1 gap-3">
                <div 
                  v-for="(color, name) in colorSet" 
                  :key="name"
                  class="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg"
                >
                  <div 
                    class="w-8 h-8 rounded-lg border-2 border-gray-600 flex-shrink-0 shadow-sm"
                    :style="{ backgroundColor: color.value }"
                  ></div>
                  <div class="flex-1 min-w-0">
                    <div class="text-sm font-medium text-gray-200 break-words">{{ name }}</div>
                    <div class="text-xs text-gray-400 break-all">{{ color.value }}</div>
                  </div>
                  <button 
                    @click="editToken('color', setName, name, color.value)"
                    class="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded flex-shrink-0 transition-colors"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Typography -->
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <div class="w-4 h-4 bg-blue-500 rounded mr-2"></div>
            Typography ({{ typographyTokenCount }})
          </h3>
          <div class="space-y-3 max-h-96 overflow-y-auto">
            <div v-if="Object.keys(typographyTokens).length === 0" class="text-gray-400 text-sm">
              No typography tokens found
            </div>
            <div v-for="(typographySet, setName) in typographyTokens" :key="setName" class="space-y-3">
              <h4 class="text-sm font-medium text-gray-300 border-b border-gray-600 pb-1">{{ setName }}</h4>
              <div class="space-y-3">
                <div 
                  v-for="(typography, name) in typographySet" 
                  :key="name"
                  class="p-3 bg-gray-700 rounded-lg"
                >
                  <div class="text-sm font-medium text-gray-200 mb-2 break-words">{{ name }}</div>
                  
                  <!-- Typography Preview -->
                  <div 
                    class="mb-3 p-2 bg-gray-800 rounded border-l-4 border-blue-500 overflow-hidden"
                    :style="getTypographyStyle(typography.value)"
                  >
                    <div class="text-xs text-gray-400 mb-1">Preview:</div>
                    <div class="truncate">{{ name }} - Sample Text</div>
                  </div>
                  
                  <!-- Typography Details -->
                  <div class="text-xs text-gray-400 space-y-1">
                    <div class="flex justify-between">
                      <span>Font:</span>
                      <span class="text-gray-300 break-all">{{ typography.value.fontFamily }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Size:</span>
                      <span class="text-gray-300">{{ typography.value.fontSize }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Weight:</span>
                      <span class="text-gray-300">{{ typography.value.fontWeight }}</span>
                    </div>
                    <div v-if="typography.value.lineHeight" class="flex justify-between">
                      <span>Line Height:</span>
                      <span class="text-gray-300">{{ typography.value.lineHeight }}</span>
                    </div>
                    <div v-if="typography.value.letterSpacing" class="flex justify-between">
                      <span>Letter Spacing:</span>
                      <span class="text-gray-300">{{ typography.value.letterSpacing }}</span>
                    </div>
                  </div>
                  
                  <button 
                    @click="editToken('typography', setName, name, typography.value)"
                    class="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded mt-3 transition-colors"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Spacing -->
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <div class="w-4 h-4 bg-green-500 rounded mr-2"></div>
            Spacing ({{ spacingTokenCount }})
          </h3>
          <div class="space-y-3 max-h-96 overflow-y-auto">
            <div v-if="Object.keys(spacingTokens).length === 0" class="text-gray-400 text-sm">
              No spacing tokens found
            </div>
            <div v-for="(spacingSet, setName) in spacingTokens" :key="setName" class="space-y-3">
              <h4 class="text-sm font-medium text-gray-300 border-b border-gray-600 pb-1">{{ setName }}</h4>
              <div class="space-y-3">
                <div 
                  v-for="(spacing, name) in spacingSet" 
                  :key="name"
                  class="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
                >
                  <div class="flex-1 min-w-0">
                    <div class="text-sm font-medium text-gray-200 break-words">{{ name }}</div>
                    <div class="text-xs text-gray-400">{{ spacing.value }}</div>
                  </div>
                  <div 
                    class="bg-blue-500 rounded"
                    :style="{ width: spacing.value, height: '8px' }"
                  ></div>
                  <button 
                    @click="editToken('spacing', setName, name, spacing.value)"
                    class="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Border Radius -->
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <div class="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
            Border Radius
          </h3>
          <div class="space-y-3 max-h-96 overflow-y-auto">
            <div v-if="Object.keys(borderRadiusTokens).length === 0" class="text-gray-400 text-sm">
              No border radius tokens found
            </div>
            <div v-for="(radiusSet, setName) in borderRadiusTokens" :key="setName" class="space-y-2">
              <h4 class="text-sm font-medium text-gray-300">{{ setName }}</h4>
              <div class="space-y-2">
                <div 
                  v-for="(radius, name) in radiusSet" 
                  :key="name"
                  class="flex items-center justify-between p-2 bg-gray-700 rounded"
                >
                  <div>
                    <div class="text-xs font-medium">{{ name }}</div>
                    <div class="text-xs text-gray-400">{{ radius.value }}</div>
                  </div>
                  <div 
                    class="bg-blue-500"
                    :style="{ 
                      width: '24px', 
                      height: '24px', 
                      borderRadius: radius.value 
                    }"
                  ></div>
                  <button 
                    @click="editToken('borderRadius', setName, name, radius.value)"
                    class="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Borders -->
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <div class="w-4 h-4 bg-purple-500 rounded mr-2"></div>
            Borders
          </h3>
          <div class="space-y-3 max-h-96 overflow-y-auto">
            <div v-if="Object.keys(borderTokens).length === 0" class="text-gray-400 text-sm">
              No border tokens found
            </div>
            <div v-for="(borderSet, setName) in borderTokens" :key="setName" class="space-y-2">
              <h4 class="text-sm font-medium text-gray-300">{{ setName }}</h4>
              <div class="space-y-2">
                <div 
                  v-for="(border, name) in borderSet" 
                  :key="name"
                  class="p-2 bg-gray-700 rounded"
                >
                  <div class="text-xs font-medium mb-1">{{ name }}</div>
                  <div class="text-xs text-gray-400 space-y-1">
                    <div>Color: {{ border.value.color }}</div>
                    <div>Width: {{ border.value.width }}</div>
                    <div>Style: {{ border.value.style }}</div>
                  </div>
                  <button 
                    @click="editToken('border', setName, name, border.value)"
                    class="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded mt-2"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Font Sizes -->
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <div class="w-4 h-4 bg-pink-500 rounded mr-2"></div>
            Font Sizes
          </h3>
          <div class="space-y-3 max-h-96 overflow-y-auto">
            <div v-if="Object.keys(fontSizeTokens).length === 0" class="text-gray-400 text-sm">
              No font size tokens found
            </div>
            <div v-for="(fontSizeSet, setName) in fontSizeTokens" :key="setName" class="space-y-3">
              <h4 class="text-sm font-medium text-gray-300 border-b border-gray-600 pb-1">{{ setName }}</h4>
              <div class="space-y-3">
                <div 
                  v-for="(fontSize, name) in fontSizeSet" 
                  :key="name"
                  class="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
                >
                  <div class="flex-1 min-w-0">
                    <div class="text-sm font-medium text-gray-200 break-words">{{ name }}</div>
                    <div class="text-xs text-gray-400">{{ fontSize.value }}</div>
                  </div>
                  <div 
                    class="text-white mx-3"
                    :style="{ fontSize: fontSize.value }"
                  >
                    Aa
                  </div>
                  <button 
                    @click="editToken('fontSize', setName, name, fontSize.value)"
                    class="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded flex-shrink-0 transition-colors"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Font Families -->
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <div class="w-4 h-4 bg-indigo-500 rounded mr-2"></div>
            Font Families ({{ fontFamilyTokenCount }})
          </h3>
          <div class="space-y-3 max-h-96 overflow-y-auto">
            <div v-if="Object.keys(fontFamilyTokens).length === 0" class="text-gray-400 text-sm">
              No font family tokens found
            </div>
            <div v-for="(fontFamilySet, setName) in fontFamilyTokens" :key="setName" class="space-y-3">
              <h4 class="text-sm font-medium text-gray-300 border-b border-gray-600 pb-1">{{ setName }}</h4>
              <div class="space-y-3">
                <div 
                  v-for="(fontFamily, name) in fontFamilySet" 
                  :key="name"
                  class="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
                >
                  <div class="flex-1 min-w-0">
                    <div class="text-sm font-medium text-gray-200 break-words">{{ name }}</div>
                    <div class="text-xs text-gray-400">{{ fontFamily.value }}</div>
                  </div>
                  <div 
                    class="text-white mx-3 text-lg"
                    :style="{ fontFamily: fontFamily.value }"
                  >
                    Aa
                  </div>
                  <button 
                    @click="editToken('fontFamily', setName, name, fontFamily.value)"
                    class="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded flex-shrink-0 transition-colors"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Font Weights -->
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <div class="w-4 h-4 bg-teal-500 rounded mr-2"></div>
            Font Weights ({{ fontWeightTokenCount }})
          </h3>
          <div class="space-y-3 max-h-96 overflow-y-auto">
            <div v-if="Object.keys(fontWeightTokens).length === 0" class="text-gray-400 text-sm">
              No font weight tokens found
            </div>
            <div v-for="(fontWeightSet, setName) in fontWeightTokens" :key="setName" class="space-y-3">
              <h4 class="text-sm font-medium text-gray-300 border-b border-gray-600 pb-1">{{ setName }}</h4>
              <div class="space-y-3">
                <div 
                  v-for="(fontWeight, name) in fontWeightSet" 
                  :key="name"
                  class="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
                >
                  <div class="flex-1 min-w-0">
                    <div class="text-sm font-medium text-gray-200 break-words">{{ name }}</div>
                    <div class="text-xs text-gray-400">{{ fontWeight.value }}</div>
                  </div>
                  <div 
                    class="text-white mx-3 text-lg"
                    :style="{ fontWeight: fontWeight.value }"
                  >
                    Aa
                  </div>
                  <button 
                    @click="editToken('fontWeight', setName, name, fontWeight.value)"
                    class="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded flex-shrink-0 transition-colors"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Live Preview -->
      <div class="mt-8 bg-gray-800 rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4">Live Preview</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="space-y-4">
            <h4 class="text-lg font-medium">Typography Preview</h4>
            <div class="space-y-2 max-h-64 overflow-y-auto">
              <div 
                v-for="(typography, name) in previewTypography" 
                :key="name"
                class="p-3 bg-gray-700 rounded overflow-hidden"
                :style="getTypographyStyle(typography.value)"
              >
                <div class="text-xs text-gray-400 mb-1">{{ name }}</div>
                <div class="truncate">Sample Text</div>
              </div>
            </div>
          </div>
          
          <div class="space-y-4">
            <h4 class="text-lg font-medium">Color Preview</h4>
            <div class="grid grid-cols-2 gap-2">
              <div 
                v-for="(color, name) in previewColors" 
                :key="name"
                class="p-3 rounded text-center text-sm"
                :style="{ backgroundColor: color.value, color: getContrastColor(color.value) }"
              >
                {{ name }}
              </div>
            </div>
          </div>
          
          <div class="space-y-4">
            <h4 class="text-lg font-medium">Component Preview</h4>
            <div class="space-y-3">
              <button 
                class="px-4 py-2 rounded"
                :style="{ 
                  backgroundColor: previewColors.primary?.value || '#3b82f6',
                  color: 'white'
                }"
              >
                Primary Button
              </button>
              <div 
                class="p-4 rounded border"
                :style="{ 
                  borderColor: previewColors.neutral?.['500']?.value || '#6b7280',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }"
              >
                Card with border
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Modal -->
    <div v-if="showEditModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h3 class="text-xl font-semibold mb-4">Edit Token</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Token Name</label>
            <input 
              v-model="editingToken.name" 
              class="w-full p-2 bg-gray-700 rounded border border-gray-600"
              readonly
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Value</label>
            <input 
              v-model="editingToken.value" 
              class="w-full p-2 bg-gray-700 rounded border border-gray-600"
              :type="editingToken.type === 'color' ? 'color' : 'text'"
            />
          </div>
          <div class="flex space-x-2">
            <button 
              @click="saveToken"
              class="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
            >
              Save
            </button>
            <button 
              @click="showEditModal = false"
              class="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

// State
const figmaConnected = ref(false)
const mcpConnected = ref(false)
const syncActive = ref(false)
const tokens = ref<any>({})
const showEditModal = ref(false)
const editingToken = ref<any>({})
const showRawTokens = ref(false)
const lastUpdateTime = ref('')

// Computed properties for token categories
const colorTokens = computed(() => {
  const colors: any = {}
  
  const findColorTokens = (obj: any, path: string[] = []) => {
    if (!obj || typeof obj !== 'object') return
    
    Object.entries(obj).forEach(([key, value]: [string, any]) => {
      const currentPath = [...path, key]
      
      if (value?.type === 'color') {
        // This is a color token
        const setName = path.length > 0 ? path[0] : 'root'
        const tokenName = currentPath.join('.')
        
        if (!colors[setName]) colors[setName] = {}
        colors[setName][tokenName] = value
      } else if (value && typeof value === 'object') {
        // Recursively search deeper
        findColorTokens(value, currentPath)
      }
    })
  }
  
  findColorTokens(tokens.value)
  return colors
})

const typographyTokens = computed(() => {
  const typography: any = {}
  
  const findTypographyTokens = (obj: any, path: string[] = []) => {
    if (!obj || typeof obj !== 'object') return
    
    Object.entries(obj).forEach(([key, value]: [string, any]) => {
      const currentPath = [...path, key]
      
      if (value?.type === 'typography') {
        // This is a typography token
        const setName = path.length > 0 ? path[0] : 'root'
        const tokenName = currentPath.join('.')
        
        if (!typography[setName]) typography[setName] = {}
        typography[setName][tokenName] = value
      } else if (value && typeof value === 'object') {
        // Recursively search deeper
        findTypographyTokens(value, currentPath)
      }
    })
  }
  
  findTypographyTokens(tokens.value)
  return typography
})

const spacingTokens = computed(() => {
  const spacing: any = {}
  
  const findSpacingTokens = (obj: any, path: string[] = []) => {
    if (!obj || typeof obj !== 'object') return
    
    Object.entries(obj).forEach(([key, value]: [string, any]) => {
      const currentPath = [...path, key]
      
      if (value?.type === 'spacing') {
        // This is a spacing token
        const setName = path.length > 0 ? path[0] : 'root'
        const tokenName = currentPath.join('.')
        
        if (!spacing[setName]) spacing[setName] = {}
        spacing[setName][tokenName] = value
      } else if (value && typeof value === 'object') {
        // Recursively search deeper
        findSpacingTokens(value, currentPath)
      }
    })
  }
  
  findSpacingTokens(tokens.value)
  return spacing
})

const borderRadiusTokens = computed(() => {
  const borderRadius: any = {}
  Object.entries(tokens.value).forEach(([setName, setData]: [string, any]) => {
    if (setData && typeof setData === 'object') {
      Object.entries(setData).forEach(([tokenName, tokenData]: [string, any]) => {
        if (tokenData?.type === 'borderRadius') {
          if (!borderRadius[setName]) borderRadius[setName] = {}
          borderRadius[setName][tokenName] = tokenData
        }
      })
    }
  })
  return borderRadius
})

const borderTokens = computed(() => {
  const borders: any = {}
  Object.entries(tokens.value).forEach(([setName, setData]: [string, any]) => {
    if (setData && typeof setData === 'object') {
      Object.entries(setData).forEach(([tokenName, tokenData]: [string, any]) => {
        if (tokenData?.type === 'border') {
          if (!borders[setName]) borders[setName] = {}
          borders[setName][tokenName] = tokenData
        }
      })
    }
  })
  return borders
})

const fontSizeTokens = computed(() => {
  const fontSizes: any = {}
  
  const findFontSizeTokens = (obj: any, path: string[] = []) => {
    if (!obj || typeof obj !== 'object') return
    
    Object.entries(obj).forEach(([key, value]: [string, any]) => {
      const currentPath = [...path, key]
      
      if (value?.type === 'fontSizes') {
        // This is a font size token
        const setName = path.length > 0 ? path[0] : 'root'
        const tokenName = currentPath.join('.')
        
        if (!fontSizes[setName]) fontSizes[setName] = {}
        fontSizes[setName][tokenName] = value
      } else if (value && typeof value === 'object') {
        // Recursively search deeper
        findFontSizeTokens(value, currentPath)
      }
    })
  }
  
  findFontSizeTokens(tokens.value)
  return fontSizes
})

const fontFamilyTokens = computed(() => {
  const fontFamilies: any = {}
  
  const findFontFamilyTokens = (obj: any, path: string[] = []) => {
    if (!obj || typeof obj !== 'object') return
    
    Object.entries(obj).forEach(([key, value]: [string, any]) => {
      const currentPath = [...path, key]
      
      if (value?.type === 'fontFamilies') {
        // This is a font family token
        const setName = path.length > 0 ? path[0] : 'root'
        const tokenName = currentPath.join('.')
        
        if (!fontFamilies[setName]) fontFamilies[setName] = {}
        fontFamilies[setName][tokenName] = value
      } else if (value && typeof value === 'object') {
        // Recursively search deeper
        findFontFamilyTokens(value, currentPath)
      }
    })
  }
  
  findFontFamilyTokens(tokens.value)
  return fontFamilies
})

const fontWeightTokens = computed(() => {
  const fontWeights: any = {}
  
  const findFontWeightTokens = (obj: any, path: string[] = []) => {
    if (!obj || typeof obj !== 'object') return
    
    Object.entries(obj).forEach(([key, value]: [string, any]) => {
      const currentPath = [...path, key]
      
      if (value?.type === 'fontWeights') {
        // This is a font weight token
        const setName = path.length > 0 ? path[0] : 'root'
        const tokenName = currentPath.join('.')
        
        if (!fontWeights[setName]) fontWeights[setName] = {}
        fontWeights[setName][tokenName] = value
      } else if (value && typeof value === 'object') {
        // Recursively search deeper
        findFontWeightTokens(value, currentPath)
      }
    })
  }
  
  findFontWeightTokens(tokens.value)
  return fontWeights
})

// Token counts
const totalTokens = computed(() => {
  let count = 0
  Object.values(tokens.value).forEach((set: any) => {
    if (set && typeof set === 'object') {
      count += Object.keys(set).length
    }
  })
  return count
})

const colorTokenCount = computed(() => {
  let count = 0
  Object.values(colorTokens.value).forEach((set: any) => {
    count += Object.keys(set).length
  })
  return count
})

const typographyTokenCount = computed(() => {
  let count = 0
  Object.values(typographyTokens.value).forEach((set: any) => {
    count += Object.keys(set).length
  })
  return count
})

const spacingTokenCount = computed(() => {
  let count = 0
  Object.values(spacingTokens.value).forEach((set: any) => {
    count += Object.keys(set).length
  })
  return count
})

const fontFamilyTokenCount = computed(() => {
  let count = 0
  Object.values(fontFamilyTokens.value).forEach((set: any) => {
    count += Object.keys(set).length
  })
  return count
})

const fontWeightTokenCount = computed(() => {
  let count = 0
  Object.values(fontWeightTokens.value).forEach((set: any) => {
    count += Object.keys(set).length
  })
  return count
})

// Preview tokens
const previewTypography = computed(() => {
  const preview: any = {}
  Object.values(typographyTokens.value).forEach((set: any) => {
    Object.entries(set).slice(0, 3).forEach(([name, token]: [string, any]) => {
      preview[name] = token
    })
  })
  return preview
})

const previewColors = computed(() => {
  const preview: any = {}
  Object.values(colorTokens.value).forEach((set: any) => {
    Object.entries(set).slice(0, 6).forEach(([name, token]: [string, any]) => {
      preview[name] = token
    })
  })
  return preview
})

// Methods
const connectMCP = async () => {
  // MCP servers are stdio-based, not HTTP-based
  // For now, we'll simulate connection for UI purposes
  mcpConnected.value = true
  console.log('✅ MCP connection simulated (stdio-based servers are running)')
}

const startRealtimeSync = async () => {
  // Real-time sync is handled through file watching
  syncActive.value = true
  console.log('✅ Real-time sync started (file watching)')
}

const stopRealtimeSync = async () => {
  syncActive.value = false
  console.log('✅ Real-time sync stopped')
}

const disconnectMCP = async () => {
  mcpConnected.value = false
  syncActive.value = false
  console.log('✅ MCP disconnected')
}

const reloadTokensFromFile = async () => {
  try {
    const response = await fetch('/tokens.json')
    if (response.ok) {
      tokens.value = await response.json()
      lastUpdateTime.value = new Date().toLocaleTimeString()
      console.log('✅ Tokens reloaded from file:', tokens.value)
    }
  } catch (error) {
    console.error('❌ Failed to reload tokens:', error)
  }
}

const editToken = (type: string, setName: string, name: string, value: any) => {
  editingToken.value = {
    type,
    setName,
    name,
    value: typeof value === 'object' ? JSON.stringify(value) : value
  }
  showEditModal.value = true
}

const saveToken = () => {
  // Here you would typically save the token back to the file or send to Figma
  console.log('Saving token:', editingToken.value)
  showEditModal.value = false
  
  // Update the local tokens object
  if (tokens.value[editingToken.value.setName]) {
    if (tokens.value[editingToken.value.setName][editingToken.value.name]) {
      tokens.value[editingToken.value.setName][editingToken.value.name].value = editingToken.value.value
    }
  }
}

const getTypographyStyle = (typography: any) => {
  // Limit font size to prevent layout breaking
  let fontSize = typography.fontSize
  if (fontSize) {
    // Convert pt to px and limit to reasonable size
    if (fontSize.includes('pt')) {
      const ptValue = parseFloat(fontSize.replace('pt', ''))
      const pxValue = ptValue * 1.33 // Convert pt to px
      if (pxValue > 48) {
        fontSize = '48px' // Limit to 48px max
      } else {
        fontSize = `${pxValue}px`
      }
    } else if (fontSize.includes('px')) {
      const pxValue = parseFloat(fontSize.replace('px', ''))
      if (pxValue > 48) {
        fontSize = '48px' // Limit to 48px max
      }
    }
  }
  
  return {
    fontFamily: typography.fontFamily,
    fontSize: fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    letterSpacing: typography.letterSpacing,
    textTransform: typography.textCase,
    textDecoration: typography.textDecoration,
    maxHeight: '60px', // Limit height
    overflow: 'hidden'
  }
}

const getContrastColor = (hexColor: string) => {
  // Simple contrast calculation
  const hex = hexColor.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 128 ? '#000000' : '#ffffff'
}

const exportTokens = () => {
  const dataStr = JSON.stringify(tokens.value, null, 2)
  const dataBlob = new Blob([dataStr], { type: 'application/json' })
  const url = URL.createObjectURL(dataBlob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'tokens-export.json'
  link.click()
  URL.revokeObjectURL(url)
  console.log('✅ Tokens exported successfully')
}

const importTokens = () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = '.json'
  input.onchange = (event) => {
    const file = (event.target as HTMLInputElement).files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const importedTokens = JSON.parse(e.target?.result as string)
          tokens.value = importedTokens
          console.log('✅ Tokens imported successfully')
        } catch (error) {
          console.error('❌ Failed to import tokens:', error)
        }
      }
      reader.readAsText(file)
    }
  }
  input.click()
}

const validateTokens = () => {
  const errors: string[] = []
  const warnings: string[] = []
  
  // Validate color tokens
  Object.entries(colorTokens.value).forEach(([setName, colorSet]) => {
    Object.entries(colorSet).forEach(([tokenName, token]) => {
      if (!token.value || typeof token.value !== 'string') {
        errors.push(`Invalid color token: ${setName}.${tokenName}`)
      } else if (!token.value.startsWith('#') && !token.value.startsWith('rgb')) {
        warnings.push(`Color token might be invalid: ${setName}.${tokenName} = ${token.value}`)
      }
    })
  })
  
  // Validate typography tokens
  Object.entries(typographyTokens.value).forEach(([setName, typographySet]) => {
    Object.entries(typographySet).forEach(([tokenName, token]) => {
      if (!token.value || typeof token.value !== 'object') {
        errors.push(`Invalid typography token: ${setName}.${tokenName}`)
      } else if (!token.value.fontFamily || !token.value.fontSize) {
        warnings.push(`Typography token missing required fields: ${setName}.${tokenName}`)
      }
    })
  })
  
  if (errors.length === 0 && warnings.length === 0) {
    alert('✅ All tokens are valid!')
  } else {
    const message = [
      errors.length > 0 ? `Errors: ${errors.length}` : '',
      warnings.length > 0 ? `Warnings: ${warnings.length}` : '',
      ...errors,
      ...warnings
    ].filter(Boolean).join('\n')
    alert(message)
  }
}

const generateCSS = () => {
  let css = ':root {\n'
  
  // Generate CSS variables for colors
  Object.entries(colorTokens.value).forEach(([setName, colorSet]) => {
    Object.entries(colorSet).forEach(([tokenName, token]) => {
      const cssVarName = `--${setName}-${tokenName}`.toLowerCase().replace(/[^a-z0-9-]/g, '-')
      css += `  ${cssVarName}: ${token.value};\n`
    })
  })
  
  // Generate CSS variables for typography
  Object.entries(typographyTokens.value).forEach(([setName, typographySet]) => {
    Object.entries(typographySet).forEach(([tokenName, token]) => {
      const cssVarName = `--${setName}-${tokenName}`.toLowerCase().replace(/[^a-z0-9-]/g, '-')
      css += `  ${cssVarName}-font-family: ${token.value.fontFamily};\n`
      css += `  ${cssVarName}-font-size: ${token.value.fontSize};\n`
      css += `  ${cssVarName}-font-weight: ${token.value.fontWeight};\n`
    })
  })
  
  css += '}\n'
  
  // Create download
  const dataBlob = new Blob([css], { type: 'text/css' })
  const url = URL.createObjectURL(dataBlob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'tokens.css'
  link.click()
  URL.revokeObjectURL(url)
  console.log('✅ CSS generated successfully')
}

// Auto-reload tokens every 2 seconds
let tokenFileWatcher: NodeJS.Timeout | null = null

onMounted(() => {
  reloadTokensFromFile()
  tokenFileWatcher = setInterval(reloadTokensFromFile, 2000)
  
  // Check Figma connection
  figmaConnected.value = true // Simulated for now
})

// Cleanup
onUnmounted(() => {
  if (tokenFileWatcher) {
    clearInterval(tokenFileWatcher)
    tokenFileWatcher = null
  }
})
</script>

<style scoped>
/* Custom scrollbar for token lists */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #374151;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #6b7280;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
</style> 