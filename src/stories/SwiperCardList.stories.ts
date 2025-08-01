import type { Meta, StoryObj } from '@storybook/vue3'
import SwiperCardList from '../components/SwiperCardList.vue'

const meta: Meta<typeof SwiperCardList> = {
  title: 'Components/SwiperCardList',
  component: SwiperCardList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A responsive card swiper component that shows 2.5 cards on mobile and 7 cards on desktop with smooth scrolling and navigation buttons.'
      }
    }
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of card items to display'
    },
    showNav: {
      control: 'boolean',
      description: 'Show navigation buttons'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

// Sample data for stories
const sampleItems = [
  { title: 'Card 1', description: 'First card description' },
  { title: 'Card 2', description: 'Second card description' },
  { title: 'Card 3', description: 'Third card description' },
  { title: 'Card 4', description: 'Fourth card description' },
  { title: 'Card 5', description: 'Fifth card description' },
  { title: 'Card 6', description: 'Sixth card description' },
  { title: 'Card 7', description: 'Seventh card description' },
  { title: 'Card 8', description: 'Eighth card description' },
  { title: 'Card 9', description: 'Ninth card description' },
  { title: 'Card 10', description: 'Tenth card description' }
]

const gameItems = [
  { title: 'Slot Game 1', type: 'Slot', provider: 'NetEnt' },
  { title: 'Slot Game 2', type: 'Slot', provider: 'Microgaming' },
  { title: 'Blackjack', type: 'Table', provider: 'Evolution' },
  { title: 'Roulette', type: 'Table', provider: 'Pragmatic' },
  { title: 'Poker', type: 'Table', provider: 'Playtech' },
  { title: 'Baccarat', type: 'Table', provider: 'Betsoft' },
  { title: 'Slot Game 3', type: 'Slot', provider: 'Yggdrasil' },
  { title: 'Slot Game 4', type: 'Slot', provider: 'Quickspin' }
]

// Figma GuideTest Design Items
const guideTestItems = [
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
]

// BEST SELLERS SLOT GAME Items (실제 Figma 디자인)
const bestSellersSlotItems = [
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
]

// Default Story
export const Default: Story = {
  args: {
    items: sampleItems,
    showNav: true
  }
}

// Without Navigation
export const WithoutNavigation: Story = {
  args: {
    items: sampleItems,
    showNav: false
  }
}

// Game Cards
export const GameCards: Story = {
  args: {
    items: gameItems,
    showNav: true
  }
}

// BEST SELLERS SLOT GAME (실제 Figma 디자인)
export const BestSellersSlotGame: Story = {
  args: {
    items: bestSellersSlotItems,
    showNav: true
  },
  render: (args) => ({
    components: { SwiperCardList },
    setup() {
      return { args }
    },
    template: `
      <div class="bg-[#1A1A1A] p-6 rounded-xl">
        <div class="flex items-center justify-between mb-6">
          <div>
            <p class="text-sm text-[#A0A0A0] mb-1" style="font-size: 14px; font-weight: 400; line-height: 20px;">BEST SELLERS</p>
            <h2 class="text-2xl font-bold text-white" style="font-size: 24px; font-weight: 700; line-height: 32px;">SLOT GAME</h2>
          </div>
          <div class="text-white text-2xl">></div>
        </div>
        
        <SwiperCardList v-bind="args">
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
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '실제 Figma 디자인을 반영한 BEST SELLERS SLOT GAME 섹션입니다. 슬롯 게임 카드들이 가로로 배치되며, 각 카드에는 RTP 퍼센트와 조회수가 표시됩니다. 첫 번째 카드는 파란색 점선 테두리로 선택된 상태를 나타냅니다. 모바일에서는 2.5개 카드가 보이고, 이미지 크기는 130x158px입니다.'
      }
    }
  }
}

// Figma GuideTest Design
export const FigmaGuideTest: Story = {
  args: {
    items: guideTestItems,
    showNav: true
  },
  render: (args) => ({
    components: { SwiperCardList },
    setup() {
      return { args }
    },
    template: `
      <div class="bg-gray-50 p-6 rounded-lg">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Guide Test Swiper</h2>
        <SwiperCardList v-bind="args">
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
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story showcases the Figma GuideTest design with modern card layout, badges, ratings, and interactive elements. The design follows the responsive pattern with 2.5 cards on mobile and 7 cards on desktop.'
      }
    }
  }
}

// Custom Card Content
export const CustomCards: Story = {
  args: {
    items: [
      { name: 'Premium Slot', rating: 4.8, players: 1250 },
      { name: 'Classic Blackjack', rating: 4.6, players: 890 },
      { name: 'European Roulette', rating: 4.7, players: 1100 },
      { name: 'Texas Hold\'em', rating: 4.9, players: 750 },
      { name: 'Baccarat Pro', rating: 4.5, players: 620 },
      { name: 'Mega Slots', rating: 4.8, players: 2100 },
      { name: 'Live Casino', rating: 4.9, players: 1800 }
    ],
    showNav: true
  },
  render: (args) => ({
    components: { SwiperCardList },
    setup() {
      return { args }
    },
    template: `
      <SwiperCardList v-bind="args">
        <template #default="{ item }">
          <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 h-40 flex flex-col justify-between text-white shadow-lg">
            <div>
              <h3 class="text-lg font-bold mb-2">{{ item.name }}</h3>
              <div class="flex items-center space-x-2">
                <span class="text-yellow-300">★</span>
                <span class="text-sm">{{ item.rating }}</span>
              </div>
            </div>
            <div class="text-sm opacity-90">
              {{ item.players }} players online
            </div>
          </div>
        </template>
      </SwiperCardList>
    `
  })
}

// Minimal Cards
export const MinimalCards: Story = {
  args: {
    items: [
      { id: 1, label: 'A' },
      { id: 2, label: 'B' },
      { id: 3, label: 'C' },
      { id: 4, label: 'D' },
      { id: 5, label: 'E' }
    ],
    showNav: true
  },
  render: (args) => ({
    components: { SwiperCardList },
    setup() {
      return { args }
    },
    template: `
      <SwiperCardList v-bind="args">
        <template #default="{ item }">
          <div class="bg-gray-100 border-2 border-gray-300 rounded-lg h-32 flex items-center justify-center">
            <span class="text-2xl font-bold text-gray-700">{{ item.label }}</span>
          </div>
        </template>
      </SwiperCardList>
    `
  })
}

// Many Cards
export const ManyCards: Story = {
  args: {
    items: Array.from({ length: 20 }, (_, i) => ({
      title: `Card ${i + 1}`,
      description: `Description for card ${i + 1}`
    })),
    showNav: true
  }
}

// Responsive Demo
export const ResponsiveDemo: Story = {
  args: {
    items: sampleItems,
    showNav: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the responsive behavior. Try resizing your browser window to see how the number of visible cards changes: 2.5 cards on mobile, 7 cards on desktop.'
      }
    }
  }
} 