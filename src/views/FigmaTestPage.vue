<template>
  <div class="figma-test-page">
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6">Figma 디자인 테스트</h1>
      
      <!-- Figma 연결 상태 -->
      <div class="mb-6 p-4 bg-gray-100 rounded-lg">
        <h2 class="text-xl font-semibold mb-2">연결 상태</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">Figma Access Token:</label>
            <input 
              v-model="accessToken" 
              type="text" 
              placeholder="Figma Access Token 입력"
              class="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">File Key:</label>
            <input 
              v-model="fileKey" 
              type="text" 
              placeholder="ZPGmro2WzI9PakODFaybzs"
              class="w-full p-2 border rounded"
            />
          </div>
        </div>
        <button 
          @click="connectToFigma"
          class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Figma 연결
        </button>
        <div class="mt-2 text-sm">
          상태: <span :class="connectionStatus.class">{{ connectionStatus.text }}</span>
        </div>
      </div>



      <!-- SwiperCardList 테스트 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6">SwiperCardList 테스트</h2>
        
        <!-- Figma 디자인 분석 테스트 -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">Figma 디자인 분석 테스트 (node-id: 170-3379)</h3>
          <div class="bg-gray-50 p-6 rounded-lg">
            <button 
              @click="analyzeFigmaDesign"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-4"
            >
              Figma 디자인 분석 실행
            </button>
            
            <div v-if="figmaAnalysis" class="space-y-4">
              <h4 class="font-semibold text-lg">분석 결과:</h4>
              <div class="bg-white p-4 rounded border">
                <pre class="text-sm overflow-auto">{{ JSON.stringify(figmaAnalysis, null, 2) }}</pre>
              </div>
            </div>
          </div>
        </div>
        
        <!-- BEST SELLERS SLOT GAME (실제 Figma 디자인) -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">BEST SELLERS SLOT GAME (실제 Figma 디자인)</h3>
          <div class="bg-[#1A1A1A] p-6 rounded-xl">
            <div class="flex items-center justify-between mb-6">
              <div>
                <p class="text-sm text-[#A0A0A0] mb-1" style="font-size: 14px; font-weight: 400; line-height: 20px;">BEST SELLERS</p>
                <h2 class="text-2xl font-bold text-white" style="font-size: 24px; font-weight: 700; line-height: 32px;">SLOT GAME</h2>
              </div>
              <div class="text-white text-2xl">></div>
            </div>
            
            <SwiperCardList :items="slotGameItems" :show-nav="true">
              <template #default="{ item }">
                <div class="relative">
                  <!-- 슬롯 게임 카드 -->
                  <div class="bg-[#2A2A2A] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 shadow-lg"
                       :class="{ 'ring-2 ring-[#3B82F6] ring-dashed': item.isSelected }">
                    <!-- 게임 이미지 -->
                    <div class="w-full h-[158px] bg-gray-300 flex items-center justify-center rounded-t-lg">
                      <div class="text-center">
                        <div class="text-4xl mb-2">🎰</div>
                        <div class="font-semibold text-sm text-gray-800" style="font-size: 14px; font-weight: 600; line-height: 20px;">{{ item.name }}</div>
                      </div>
                    </div>
                    
                    <!-- 선택된 카드 표시 -->
                    <div v-if="item.isSelected" class="absolute inset-0 bg-[#3B82F6] bg-opacity-20 pointer-events-none"></div>
                  </div>
                  
                  <!-- RTP 정보 -->
                  <div class="mt-3">
                    <div class="flex items-center justify-between text-xs">
                      <div class="flex items-center space-x-2">
                        <span class="text-[#A0A0A0]" style="font-size: 12px; font-weight: 400; line-height: 16px;">RTP</span>
                        <div class="flex items-center space-x-1">
                          <span class="font-bold" 
                                :class="item.rtp > 250 ? 'text-[#10B981]' : item.rtp > 200 ? 'text-[#3B82F6]' : 'text-[#EF4444]'">↗</span>
                          <span class="font-bold" 
                                :class="item.rtp > 250 ? 'text-[#10B981]' : item.rtp > 200 ? 'text-[#3B82F6]' : 'text-[#EF4444]'"
                                style="font-size: 12px; font-weight: 700; line-height: 16px;">
                            {{ item.rtp }}%
                          </span>
                        </div>
                      </div>
                      <div class="flex items-center space-x-1">
                        <span class="text-[#A0A0A0]" style="font-size: 12px; font-weight: 400; line-height: 16px;">👁</span>
                        <span class="text-[#D1D5DB]" style="font-size: 12px; font-weight: 400; line-height: 16px;">{{ item.views }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </SwiperCardList>
          </div>
        </div>
        
        <!-- Guide Test Swiper -->
        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">Guide Test Swiper (기존 디자인)</h3>
          <SwiperCardList :items="swiperItems" :show-nav="true">
            <template #default="{ item }">
              <div class="bg-white rounded-xl p-6 h-48 flex flex-col justify-between shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div class="flex-1">
                  <div class="flex items-start justify-between mb-3">
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-1">{{ item.title }}</h3>
                      <p class="text-sm text-gray-600 mb-2">{{ item.subtitle }}</p>
                    </div>
                    <span class="px-2 py-1 text-xs font-semibold rounded-full" 
                          :class="{
                            'bg-blue-100 text-blue-800': item.badge === 'NEW',
                            'bg-green-100 text-green-800': item.badge === 'POPULAR',
                            'bg-purple-100 text-purple-800': item.badge === 'PRO',
                            'bg-gray-100 text-gray-800': item.badge === 'STABLE',
                            'bg-yellow-100 text-yellow-800': item.badge === 'BETA',
                            'bg-red-100 text-red-800': item.badge === 'ENTERPRISE',
                            'bg-orange-100 text-orange-800': item.badge === 'COMMUNITY'
                          }">
                      {{ item.badge }}
                    </span>
                  </div>
                  <p class="text-sm text-gray-600 mb-3">{{ item.description }}</p>
                  <div class="flex items-center space-x-2">
                    <div class="flex items-center">
                      <span class="text-yellow-400 text-sm">★</span>
                      <span class="text-sm font-medium text-gray-700 ml-1">{{ item.rating }}</span>
                    </div>
                    <span class="text-xs text-gray-500">•</span>
                    <span class="text-xs text-gray-500">{{ item.category }}</span>
                  </div>
                </div>
                <div class="pt-3 border-t border-gray-100">
                  <button class="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </template>
          </SwiperCardList>
        </div>
      </div>

      <!-- 디자인 미리보기 -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-4">디자인 미리보기</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- 실제 Figma 디자인 -->
          <div class="border rounded-lg p-4">
            <h3 class="text-lg font-medium mb-3">실제 Figma 디자인</h3>
            <div v-if="figmaData" class="space-y-4">
              <div class="bg-white border rounded p-4">
                <h4 class="font-semibold mb-2">파일 정보</h4>
                <p><strong>이름:</strong> {{ figmaData.name }}</p>
                <p><strong>마지막 수정:</strong> {{ formatDate(figmaData.lastModified) }}</p>
                <p><strong>버전:</strong> {{ figmaData.version }}</p>
              </div>
              
              <div class="bg-white border rounded p-4">
                <h4 class="font-semibold mb-2">추출된 토큰</h4>
                <div v-if="extractedTokens.length > 0" class="space-y-2">
                  <div v-for="token in extractedTokens.slice(0, 10)" :key="token.id" class="flex items-center space-x-2">
                    <div class="w-4 h-4 rounded border" :style="{ backgroundColor: token.type === 'color' ? token.value : 'transparent' }"></div>
                    <span class="text-sm">{{ token.name }}: {{ token.value }}</span>
                  </div>
                  <p v-if="extractedTokens.length > 10" class="text-sm text-gray-500">
                    ... 그리고 {{ extractedTokens.length - 10 }}개 더
                  </p>
                </div>
                <p v-else class="text-gray-500">추출된 토큰이 없습니다.</p>
              </div>
            </div>
            <div v-else class="text-gray-500">
              Figma에 연결하여 디자인을 불러오세요.
            </div>
          </div>

          <!-- 테스트 디자인 -->
          <div class="border rounded-lg p-4">
            <h3 class="text-lg font-medium mb-3">테스트 디자인</h3>
            <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white">
              <h4 class="text-xl font-bold mb-4">Guide Test Component</h4>
              <p class="mb-4">이것은 테스트용 디자인 컴포넌트입니다.</p>
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="bg-white/20 rounded p-3">
                  <h5 class="font-semibold">Feature 1</h5>
                  <p class="text-sm">설명 텍스트</p>
                </div>
                <div class="bg-white/20 rounded p-3">
                  <h5 class="font-semibold">Feature 2</h5>
                  <p class="text-sm">설명 텍스트</p>
                </div>
              </div>
              <button class="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100">
                시작하기
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 디버그 정보 -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-4">디버그 정보</h2>
        <div class="bg-gray-100 rounded-lg p-4">
          <pre class="text-sm overflow-auto max-h-64">{{ debugInfo }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { figmaService } from '../services/figmaService'
import SwiperCardList from '../components/SwiperCardList.vue'

const accessToken = ref('')
const fileKey = ref('ZPGmro2WzI9PakODFaybzs')
const figmaData = ref<any>(null)
const extractedTokens = ref<any[]>([])
const isConnected = ref(false)
const debugInfo = ref('')
const figmaAnalysis = ref(null)



// SwiperCardList용 데이터
const swiperItems = ref([
  { 
    title: 'Guide Test Card 1', 
    subtitle: 'Premium Feature',
    description: 'Advanced functionality with enhanced user experience',
    badge: 'NEW',
    rating: 4.8,
    category: 'Premium'
  },
  { 
    title: 'Guide Test Card 2', 
    subtitle: 'Basic Feature',
    description: 'Essential functionality for everyday use',
    badge: 'POPULAR',
    rating: 4.6,
    category: 'Basic'
  },
  { 
    title: 'Guide Test Card 3', 
    subtitle: 'Pro Feature',
    description: 'Professional tools for power users',
    badge: 'PRO',
    rating: 4.9,
    category: 'Professional'
  },
  { 
    title: 'Guide Test Card 4', 
    subtitle: 'Standard Feature',
    description: 'Reliable and consistent performance',
    badge: 'STABLE',
    rating: 4.7,
    category: 'Standard'
  },
  { 
    title: 'Guide Test Card 5', 
    subtitle: 'Advanced Feature',
    description: 'Cutting-edge technology and innovation',
    badge: 'BETA',
    rating: 4.5,
    category: 'Advanced'
  },
  { 
    title: 'Guide Test Card 6', 
    subtitle: 'Enterprise Feature',
    description: 'Scalable solutions for large organizations',
    badge: 'ENTERPRISE',
    rating: 4.9,
    category: 'Enterprise'
  },
  { 
    title: 'Guide Test Card 7', 
    subtitle: 'Community Feature',
    description: 'Built by and for the community',
    badge: 'COMMUNITY',
    rating: 4.4,
    category: 'Community'
  }
])

const slotGameItems = ref([
  {
    id: 1,
    name: 'Mega Fortune',
    rtp: 286.3,
    views: 322,
    isSelected: false,
    image: '/api/placeholder/200/150'
  },
  {
    id: 2,
    name: 'Starburst',
    rtp: 231.9,
    views: 310,
    isSelected: false,
    image: '/api/placeholder/200/150'
  },
  {
    id: 3,
    name: 'Gonzo\'s Quest',
    rtp: 193.2,
    views: 298,
    isSelected: false,
    image: '/api/placeholder/200/150'
  },
  {
    id: 4,
    name: 'Book of Dead',
    rtp: 245.7,
    views: 456,
    isSelected: false,
    image: '/api/placeholder/200/150'
  },
  {
    id: 5,
    name: 'Immortal Romance',
    rtp: 267.8,
    views: 389,
    isSelected: false,
    image: '/api/placeholder/200/150'
  },
  {
    id: 6,
    name: 'Thunderstruck II',
    rtp: 223.4,
    views: 345,
    isSelected: false,
    image: '/api/placeholder/200/150'
  },
  {
    id: 7,
    name: 'Dead or Alive',
    rtp: 289.1,
    views: 412,
    isSelected: false,
    image: '/api/placeholder/200/150'
  }
])

const analyzeFigmaDesign = async () => {
  try {
    const figmaUrl = 'https://www.figma.com/design/ZPGmro2WzI9PakODFaybzs/GuideTest?node-id=214-35729&m=dev'
    const analysis = await figmaService.analyzeDesignDetails(figmaUrl)
    figmaAnalysis.value = analysis
    console.log('✅ Figma 디자인 분석 완료:', analysis)
  } catch (error) {
    console.error('❌ Figma 디자인 분석 실패:', error)
  }
}

const connectionStatus = computed(() => {
  if (isConnected.value) {
    return { text: '연결됨', class: 'text-green-600' }
  }
  return { text: '연결되지 않음', class: 'text-red-600' }
})

const connectToFigma = async () => {
  try {
    debugInfo.value = 'Figma 연결 시도 중...\n'
    
    const success = await figmaService.connect(accessToken.value, fileKey.value)
    isConnected.value = success
    
    if (success) {
      debugInfo.value += '✅ Figma 연결 성공\n'
      
      // Figma 데이터 가져오기
      const tokens = await figmaService.syncTokensFromFigma()
      extractedTokens.value = tokens
      
      debugInfo.value += `📊 ${tokens.length}개의 토큰 추출됨\n`
      
      // 파일 정보 가져오기
      const fileInfo = figmaService.getFileInfo()
      if (fileInfo) {
        figmaData.value = {
          name: fileInfo.name,
          lastModified: fileInfo.lastModified,
          version: '1.0'
        }
        debugInfo.value += `📄 파일 정보: ${fileInfo.name}\n`
      }
    } else {
      debugInfo.value += '❌ Figma 연결 실패\n'
    }
  } catch (error) {
    debugInfo.value += `❌ 오류: ${error}\n`
    console.error('Figma 연결 오류:', error)
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString()
}

onMounted(() => {
  debugInfo.value = '페이지 로드됨\n'
})
</script>

<style scoped>
.figma-test-page {
  min-height: 100vh;
  background-color: #f8fafc;
}
</style> 