import type { Meta, StoryObj } from '@storybook/vue3';
import ColorPalette from '../components/ColorPalette.vue';

/**
 * ColorPalette 컴포넌트는 디자인 시스템의 컬러 팔레트를 시각적으로 보여줍니다.
 * 
 * ## 사용법
 * 
 * ```vue
 * <ColorPalette />
 * ```
 * 
 * ## 특징
 * 
 * - **Primary Colors**: 브랜드의 주요 컬러들
 * - **Neutral Colors**: 텍스트, 배경, 경계선 등에 사용되는 그레이 스케일
 * - **Semantic Colors**: 성공, 오류, 경고, 정보를 나타내는 의미론적 컬러들
 * - **Usage Examples**: 실제 사용 예시를 보여주는 섹션
 * 
 * ## 컬러 시스템
 * 
 * 이 컴포넌트는 Tailwind CSS의 컬러 시스템을 기반으로 하며,
 * 일관된 디자인을 위해 다음과 같은 컬러들을 제공합니다:
 * 
 * ### Primary Colors
 * - Primary Blue (#2563EB): 주요 액션, 링크, 강조
 * - Primary Dark (#1D4ED8): 호버 상태, 활성 상태
 * - Primary Light (#3B82F6): 보조 액션, 경계선
 * - Primary Background (#EFF6FF): 배경, 강조 영역
 * 
 * ### Neutral Colors
 * - Gray 900-50: 텍스트, 배경, 경계선의 다양한 명도
 * - White: 기본 배경색
 * 
 * ### Semantic Colors
 * - Success (Green): 성공 상태, 완료 표시
 * - Error (Red): 오류 상태, 삭제 액션
 * - Warning (Yellow): 경고 상태, 주의 사항
 * - Info (Blue): 정보 표시, 도움말
 */
const meta = {
  title: 'Design System/ColorPalette',
  component: ColorPalette,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '디자인 시스템의 컬러 팔레트를 시각적으로 보여주는 컴포넌트입니다. Primary, Neutral, Semantic 컬러들을 포함하며 실제 사용 예시도 제공합니다.'
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 컬러 팔레트입니다.
 * 모든 컬러 카테고리를 포함한 완전한 팔레트를 보여줍니다.
 */
export const Default: Story = {
  render: () => ({
    components: { ColorPalette },
    template: `
      <div class="p-8 bg-gray-100 min-h-screen">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Design System - Color Palette</h1>
          <ColorPalette />
        </div>
      </div>
    `,
  }),
};

/**
 * 컴팩트한 레이아웃의 컬러 팔레트입니다.
 * 더 작은 공간에서도 잘 보이도록 최적화되었습니다.
 */
export const Compact: Story = {
  render: () => ({
    components: { ColorPalette },
    template: `
      <div class="p-4 bg-white">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Color Palette</h2>
          <ColorPalette />
        </div>
      </div>
    `,
  }),
};

/**
 * 다크 테마에서의 컬러 팔레트입니다.
 * 다크 모드에서의 컬러 사용을 보여줍니다.
 */
export const DarkTheme: Story = {
  render: () => ({
    components: { ColorPalette },
    template: `
      <div class="p-8 bg-gray-900 min-h-screen">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-3xl font-bold text-white mb-8">Design System - Color Palette (Dark)</h1>
          <div class="bg-gray-800 rounded-lg p-6">
            <ColorPalette />
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * 컬러 팔레트와 함께 사용되는 다른 컴포넌트들을 보여주는 예제입니다.
 */
export const WithComponents: Story = {
  render: () => ({
    components: { ColorPalette },
    template: `
      <div class="p-8 bg-gray-100 min-h-screen">
        <div class="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 class="text-3xl font-bold text-gray-900 mb-4">Design System</h1>
            <p class="text-gray-600">컬러 팔레트와 함께 사용되는 컴포넌트들</p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Color Palette</h2>
              <ColorPalette />
            </div>
            
            <div>
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Component Examples</h2>
              <div class="space-y-4">
                <div class="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 class="text-lg font-medium text-gray-900 mb-2">Buttons</h3>
                  <div class="space-x-2">
                    <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Primary</button>
                    <button class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Secondary</button>
                    <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">Outline</button>
                  </div>
                </div>
                
                <div class="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 class="text-lg font-medium text-gray-900 mb-2">Status Indicators</h3>
                  <div class="space-x-4">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Success
                    </span>
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Error
                    </span>
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Warning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}; 