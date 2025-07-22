import type { Meta, StoryObj } from '@storybook/vue3';
import Card from '../components/Card.vue';

/**
 * # Card 컴포넌트 🃏
 * 
 * **정보를 예쁘게 담아서 보여주는 상자**를 만들어주는 컴포넌트예요!
 * 
 * ## 🎯 이 컴포넌트로 할 수 있는 것들
 * 
 * - ✅ **3가지 모양** (기본, 그림자 있는, 테두리만 있는)
 * - ✅ **3개 구역** (제목, 내용, 하단)
 * - ✅ **모바일 친화적** (화면 크기에 따라 자동 조절)
 * - ✅ **키보드 접근성** (Tab키로 이동 가능)
 * - ✅ **자유로운 내용 구성** (텍스트, 이미지, 버튼 등)
 * - ✅ **깔끔한 디자인** (Tailwind CSS 기반)
 * 
 * ## 💡 언제 사용하나요?
 * 
 * **기본 카드 (Default)**: 일반적인 정보 표시 (예: 상품 정보, 사용자 프로필)
 * **그림자 카드 (Elevated)**: 중요한 정보나 호버 효과가 필요할 때
 * **테두리 카드 (Outlined)**: 구분이 필요한 정보나 미니멀한 디자인
 * 
 * ## 🚀 간단한 사용법
 * 
 * ```vue
 * <template>
 *   <!-- 기본 카드 -->
 *   <Card>
 *     <template #header>
 *       <h3>카드 제목</h3>
 *     </template>
 *     <p>카드 내용입니다. 여기에 원하는 내용을 넣으세요.</p>
 *     <template #footer>
 *       <Button>자세히 보기</Button>
 *     </template>
 *   </Card>
 *   
 *   <!-- 그림자 있는 카드 -->
 *   <Card variant="elevated">
 *     <h3>중요한 정보</h3>
 *     <p>이 카드는 그림자가 있어서 더 눈에 띄어요!</p>
 *   </Card>
 *   
 *   <!-- 테두리만 있는 카드 -->
 *   <Card variant="outlined">
 *     <h3>간단한 정보</h3>
 *     <p>테두리만 있어서 깔끔해 보여요.</p>
 *   </Card>
 * </template>
 * 
 * <script setup>
 * import Card from '@/components/Card.vue'
 * import Button from '@/components/Button.vue'
 * </script>
 * ```
 * 
 * ## 🎨 카드 구성 가이드
 * 
 * ### 카드 데이터 구조
 * ```javascript
 * // 기본 카드
 * <Card>
 *   내용
 * </Card>
 * 
 * // 슬롯을 사용한 카드
 * <Card variant="elevated">
 *   <template #header>제목</template>
 *   <template #default>내용</template>
 *   <template #footer>하단</template>
 * </Card>
 * ```
 * 
 * ### 어떤 모양을 선택할까요?
 * 
 * **📦 기본 (Default)**
 * - 가장 많이 사용하는 기본 카드
 * - 예: 상품 목록, 사용자 정보, 일반적인 콘텐츠
 * - 깔끔하고 심플한 디자인
 * 
 * **🌟 그림자 (Elevated)**
 * - 중요한 정보나 특별한 콘텐츠
 * - 예: 프리미엄 상품, 추천 콘텐츠, 강조하고 싶은 정보
 * - 마우스를 올리면 더 큰 그림자 효과
 * 
 * **📋 테두리 (Outlined)**
 * - 구분이 필요한 정보
 * - 예: 설정 옵션, 구분선이 필요한 콘텐츠
 * - 미니멀하고 깔끔한 느낌
 * 
 * ## 📦 카드의 3개 구역
 * 
 * ### 1️⃣ 헤더 (Header) - 제목 영역
 * ```vue
 * <template #header>
 *   <h3>제목</h3>
 *   <span>부제목</span>
 * </template>
 * ```
 * 
 * ### 2️⃣ 내용 (Content) - 메인 콘텐츠
 * ```vue
 * <p>여기에 메인 내용을 넣으세요.</p>
 * <img src="image.jpg" alt="이미지" />
 * ```
 * 
 * ### 3️⃣ 푸터 (Footer) - 하단 영역
 * ```vue
 * <template #footer>
 *   <Button>확인</Button>
 *   <span>추가 정보</span>
 * </template>
 * ```
 * 
 * ## ⚙️ 설정 옵션 (Props)
 * 
 * | 옵션 | 선택지 | 기본값 | 설명 |
 * |------|--------|--------|------|
 * | `variant` | `'default'`, `'elevated'`, `'outlined'` | `'default'` | 카드의 모양과 스타일 |
 * 
 * ## 💡 실전 팁
 * 
 * 1. **카드 안에는 관련된 정보만** 넣으세요
 * 2. **헤더에는 명확한 제목**을 넣으세요
 * 3. **여러 카드는 같은 높이**로 맞추세요
 * 4. **모바일에서는 카드 간격**을 충분히 두세요
 * 5. **그림자 카드는 중요한 정보**에만 사용하세요
 * 
 * ## 🔧 고급 사용법
 * 
 * ### 여러 카드를 그리드로 배치
 * ```vue
 * <template>
 *   <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
 *     <Card v-for="item in items" :key="item.id">
 *       <template #header>
 *         <h3>{{ item.title }}</h3>
 *       </template>
 *       <p>{{ item.description }}</p>
 *       <template #footer>
 *         <Button>자세히 보기</Button>
 *       </template>
 *     </Card>
 *   </div>
 * </template>
 * ```
 * 
 * ### 호버 효과 추가
 * ```vue
 * <template>
 *   <Card 
 *     variant="elevated" 
 *     class="hover:shadow-xl transition-shadow cursor-pointer"
 *     @click="handleClick"
 *   >
 *     <h3>클릭 가능한 카드</h3>
 *     <p>마우스를 올리면 그림자가 커져요!</p>
 *   </Card>
 * </template>
 * ```
 */
const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Card 컴포넌트 🃏

**정보를 예쁘게 담아서 보여주는 상자**를 만들어주는 컴포넌트예요!

## �� 이 컴포넌트로 할 수 있는 것들

- ✅ **3가지 모양** (기본, 그림자 있는, 테두리만 있는)
- ✅ **3개 구역** (제목, 내용, 하단)
- ✅ **모바일 친화적** (화면 크기에 따라 자동 조절)
- ✅ **키보드 접근성** (Tab키로 이동 가능)
- ✅ **자유로운 내용 구성** (텍스트, 이미지, 버튼 등)
- ✅ **깔끔한 디자인** (Tailwind CSS 기반)

## 💡 언제 사용하나요?

**기본 카드 (Default)**: 일반적인 정보 표시 (예: 상품 정보, 사용자 프로필)
**그림자 카드 (Elevated)**: 중요한 정보나 호버 효과가 필요할 때
**테두리 카드 (Outlined)**: 구분이 필요한 정보나 미니멀한 디자인

## 🚀 간단한 사용법

\`\`\`vue
<template>
  <!-- 기본 카드 -->
  <Card>
    <template #header>
      <h3>카드 제목</h3>
    </template>
    <p>카드 내용입니다. 여기에 원하는 내용을 넣으세요.</p>
    <template #footer>
      <Button>자세히 보기</Button>
    </template>
  </Card>
  
  <!-- 그림자 있는 카드 -->
  <Card variant="elevated">
    <h3>중요한 정보</h3>
    <p>이 카드는 그림자가 있어서 더 눈에 띄어요!</p>
  </Card>
  
  <!-- 테두리만 있는 카드 -->
  <Card variant="outlined">
    <h3>간단한 정보</h3>
    <p>테두리만 있어서 깔끔해 보여요.</p>
  </Card>
</template>
\`\`\`

<script setup>
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'
</script>

## 🎨 카드 스타일 선택 가이드

### 어떤 모양을 선택할까요?

**📦 기본 (Default)**
- 가장 많이 사용하는 기본 카드
- 예: 상품 목록, 사용자 정보, 일반적인 콘텐츠
- 깔끔하고 심플한 디자인

**🌟 그림자 (Elevated)**
- 중요한 정보나 특별한 콘텐츠
- 예: 프리미엄 상품, 추천 콘텐츠, 강조하고 싶은 정보
- 마우스를 올리면 더 큰 그림자 효과

**📋 테두리 (Outlined)**
- 구분이 필요한 정보
- 예: 설정 옵션, 구분선이 필요한 콘텐츠
- 미니멀하고 깔끔한 느낌

## 📦 카드의 3개 구역

### 1️⃣ 헤더 (Header) - 제목 영역
\`\`\`vue
<template #header>
  <h3>제목</h3>
  <span>부제목</span>
\`\`\`

### 2️⃣ 내용 (Content) - 메인 콘텐츠
\`\`\`vue
<p>여기에 메인 내용을 넣으세요.</p>
<img src="image.jpg" alt="이미지" />
\`\`\`

### 3️⃣ 푸터 (Footer) - 하단 영역
\`\`\`vue
<template #footer>
  <Button>확인</Button>
  <span>추가 정보</span>
\`\`\`

## ⚙️ 설정 옵션 (Props)

| 옵션 | 선택지 | 기본값 | 설명 |
|------|--------|--------|------|
| variant | 'default', 'elevated', 'outlined' | 'default' | 카드의 모양과 스타일 |

## 💡 실전 팁

1. **카드 안에는 관련된 정보만** 넣으세요
2. **헤더에는 명확한 제목**을 넣으세요
3. **여러 카드는 같은 높이**로 맞추세요
4. **모바일에서는 카드 간격**을 충분히 두세요
5. **그림자 카드는 중요한 정보**에만 사용하세요

## 🔧 고급 사용법

### 여러 카드를 그리드로 배치
\`\`\`vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card v-for="item in items" :key="item.id">
      <template #header>
        <h3>{{ item.title }}</h3>
      </template>
      <p>{{ item.description }}</p>
      <template #footer>
        <Button>자세히 보기</Button>
      </template>
    </Card>
  </div>
\`\`\`

### 호버 효과 추가
\`\`\`vue
<template>
  <Card 
    variant="elevated" 
    class="hover:shadow-xl transition-shadow cursor-pointer"
    @click="handleClick"
  >
    <h3>클릭 가능한 카드</h3>
    <p>마우스를 올리면 그림자가 커져요!</p>
  </Card>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined'],
      description: '카드의 시각적 스타일을 선택합니다. Default는 기본 스타일, Elevated는 그림자 효과, Outlined는 외곽선 강조입니다.',
      table: {
        type: { summary: "'default' | 'elevated' | 'outlined'" },
        defaultValue: { summary: "'default'" },
        category: '스타일'
      }
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ## 기본 카드 🎯
 * 
 * 헤더, 본문, 푸터가 모두 포함된 완전한 카드 예제입니다.
 * 
 * **특징:**
 * - 🎯 기본 스타일 (테두리와 배경)
 * - 📝 헤더, 본문, 푸터 모두 포함
 * - 🔘 액션 버튼 포함
 * - 📱 반응형 디자인
 * 
 * **사용 시나리오:**
 * - 폼 카드
 * - 설정 패널
 * - 상세 정보 표시
 * - 액션이 필요한 콘텐츠
 */
export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">카드 제목</h3>
        </template>
        <p class="text-gray-600">이것은 카드의 메인 콘텐츠입니다. 텍스트나 다른 컴포넌트를 포함할 수 있습니다.</p>
        <template #footer>
          <div class="flex justify-end space-x-2">
            <button class="px-4 py-2 text-sm text-gray-600 hover:text-gray-800">취소</button>
            <button class="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">저장</button>
          </div>
        </template>
      </Card>
    `,
  }),
};

/**
 * ## 그림자 카드 🌟
 * 
 * 그림자 효과가 있는 카드로 더 강조된 느낌을 줍니다.
 * 
 * **특징:**
 * - 🌟 그림자 효과 (elevated)
 * - 📊 시각적 깊이감
 * - 🎨 현대적인 디자인
 * - 🔍 높은 가시성
 * 
 * **사용 시나리오:**
 * - 중요한 콘텐츠
 * - 호버 효과가 필요한 카드
 * - 시각적 강조가 필요한 경우
 * - 인터랙티브한 요소
 */
export const Elevated: Story = {
  args: {
    variant: 'elevated',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">그림자 카드</h3>
        <p class="text-gray-600">이 카드는 그림자 효과가 있어 더 깊이감 있는 시각적 효과를 제공합니다.</p>
      </Card>
    `,
  }),
};

/**
 * ## 외곽선 카드 🔲
 * 
 * 테두리가 강조된 카드로 명확한 경계를 제공합니다.
 * 
 * **특징:**
 * - 🔲 강조된 테두리
 * - 🎯 명확한 경계
 * - 🎨 미니멀한 디자인
 * - 🔍 배경과 구분
 * 
 * **사용 시나리오:**
 * - 구분이 필요한 카드
 * - 테두리 강조가 필요한 경우
 * - 배경과 명확한 구분
 * - 깔끔한 레이아웃
 */
export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">외곽선 카드</h3>
        <p class="text-gray-600">이 카드는 강조된 테두리를 가지고 있어 더 명확한 경계를 제공합니다.</p>
      </Card>
    `,
  }),
};

/**
 * ## 헤더만 있는 카드 📝
 * 
 * 제목과 내용만 있는 간단한 카드입니다.
 * 
 * **특징:**
 * - 📝 헤더와 본문만 포함
 * - 🚫 푸터 없음
 * - 📖 읽기 전용 콘텐츠
 * - 🎯 정보 표시용
 * 
 * **사용 시나리오:**
 * - 정보 표시 카드
 * - 읽기 전용 콘텐츠
 * - 간단한 설명
 * - 액션이 필요 없는 콘텐츠
 */
export const WithHeader: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">헤더만 있는 카드</h3>
        </template>
        <p class="text-gray-600">이 카드는 헤더와 내용만 있고 푸터는 없습니다. 정보 표시용으로 적합합니다.</p>
      </Card>
    `,
  }),
};

/**
 * ## 푸터만 있는 카드 🔘
 * 
 * 내용과 액션 버튼이 있는 카드입니다.
 * 
 * **특징:**
 * - 🔘 본문과 푸터만 포함
 * - 🚫 헤더 없음
 * - ⚡ 액션 중심
 * - 🎯 사용자 인터랙션
 * 
 * **사용 시나리오:**
 * - 액션 중심 카드
 * - 버튼이 있는 콘텐츠
 * - 간단한 폼
 * - 퀵 액션
 */
export const WithFooter: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <p class="text-gray-600">이 카드는 내용과 푸터만 있고 헤더는 없습니다. 액션 버튼이 있는 콘텐츠에 적합합니다.</p>
        <template #footer>
          <div class="flex justify-end">
            <button class="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">액션</button>
          </div>
        </template>
      </Card>
    `,
  }),
};

/**
 * ## 모든 변형 비교 🎨
 * 
 * 모든 스타일을 한 번에 비교할 수 있는 예제입니다.
 * 
 * **포함된 예제:**
 * - 🎯 Default, Elevated, Outlined 스타일
 * - 📊 시각적 차이점 비교
 * - 🎨 디자인 시스템 이해
 * - 🔍 적절한 선택 가이드
 * 
 * **학습 목적:**
 * - 스타일 간 차이점 이해
 * - 사용 시나리오 파악
 * - 디자인 일관성 유지
 * - 적절한 선택 방법
 */
export const AllVariants: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="default">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">기본 스타일</h3>
          <p class="text-gray-600">기본 스타일의 카드입니다. 테두리와 배경이 있습니다.</p>
        </Card>
        
        <Card variant="elevated">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">그림자 스타일</h3>
          <p class="text-gray-600">그림자가 있는 카드입니다. 더 깊이감 있는 효과를 제공합니다.</p>
        </Card>
        
        <Card variant="outlined">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">외곽선 스타일</h3>
          <p class="text-gray-600">테두리가 강조된 카드입니다. 명확한 경계를 제공합니다.</p>
        </Card>
      </div>
    `,
  }),
};

/**
 * ## 실제 사용 예제 💼
 * 
 * 실제 프로젝트에서 사용할 수 있는 카드 조합 예제입니다.
 * 
 * **포함된 시나리오:**
 * - 📱 사용자 프로필 카드
 * - 📊 통계 정보 카드
 * - 🛒 상품 카드
 * - 📝 블로그 포스트 카드
 * 
 * **학습 포인트:**
 * - 카드 레이아웃 구성법
 * - 적절한 스타일 선택
 * - 콘텐츠 구조화
 * - 사용자 경험 최적화
 */
export const RealWorldExamples: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div class="space-y-8">
        <!-- 사용자 프로필 카드 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">사용자 프로필 카드</h3>
          <Card variant="elevated" class="max-w-sm">
            <template #header>
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  김
                </div>
                <div>
                  <h4 class="font-semibold">김철수</h4>
                  <p class="text-sm text-gray-500">프론트엔드 개발자</p>
                </div>
              </div>
            </template>
            <p class="text-gray-600">Vue.js와 React를 주로 사용하는 프론트엔드 개발자입니다.</p>
            <template #footer>
              <div class="flex justify-end space-x-2">
                <button class="px-3 py-1 text-sm text-gray-600 hover:text-gray-800">메시지</button>
                <button class="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">프로필 보기</button>
              </div>
            </template>
          </Card>
        </div>

        <!-- 통계 카드 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">통계 정보 카드</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card variant="outlined">
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-600">1,234</div>
                <div class="text-sm text-gray-500">총 사용자</div>
              </div>
            </Card>
            <Card variant="outlined">
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">567</div>
                <div class="text-sm text-gray-500">활성 사용자</div>
              </div>
            </Card>
            <Card variant="outlined">
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-600">89%</div>
                <div class="text-sm text-gray-500">만족도</div>
              </div>
            </Card>
          </div>
        </div>

        <!-- 상품 카드 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">상품 카드</h3>
          <Card variant="elevated" class="max-w-sm">
            <div class="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
              <span class="text-gray-500">상품 이미지</span>
            </div>
            <h4 class="font-semibold text-lg mb-2">프리미엄 상품</h4>
            <p class="text-gray-600 mb-4">고품질의 프리미엄 상품입니다. 다양한 기능을 제공합니다.</p>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-blue-600">₩29,900</span>
              <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">구매하기</button>
            </div>
          </Card>
        </div>
      </div>
    `,
  }),
}; 