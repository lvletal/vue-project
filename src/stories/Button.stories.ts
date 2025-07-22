import type { Meta, StoryObj } from '@storybook/vue3';
import Button from '../components/Button.vue';

/**
 * # Button 컴포넌트 🔘
 * 
 * **웹사이트에서 클릭할 수 있는 버튼**을 만들어주는 컴포넌트예요!
 * 
 * ## 🎯 이 컴포넌트로 할 수 있는 것들
 * 
 * - ✅ **3가지 모양** (파란색, 회색, 테두리만 있는 버튼)
 * - ✅ **3가지 크기** (작게, 보통, 크게)
 * - ✅ **비활성화** (클릭할 수 없게 만들기)
 * - ✅ **키보드 접근성** (Tab키로 이동 가능)
 * - ✅ **모바일 친화적** (터치하기 좋은 크기)
 * - ✅ **호버 효과** (마우스를 올리면 색상 변화)
 * 
 * ## 💡 언제 사용하나요?
 * 
 * **파란색 버튼 (Primary)**: 가장 중요한 행동 (예: 로그인, 저장, 확인)
 * **회색 버튼 (Secondary)**: 보조적인 행동 (예: 편집, 수정)
 * **테두리 버튼 (Outline)**: 취소나 뒤로가기 같은 행동
 * 
 * ## 🚀 간단한 사용법
 * 
 * ```vue
 * <template>
 *   <!-- 기본 버튼 (파란색, 보통 크기) -->
 *   <Button @click="handleClick">
 *     클릭하세요
 *   </Button>
 *   
 *   <!-- 회색 버튼, 작은 크기 -->
 *   <Button variant="secondary" size="sm">
 *     편집하기
 *   </Button>
 *   
 *   <!-- 테두리만 있는 버튼, 큰 크기 -->
 *   <Button variant="outline" size="lg">
 *     취소
 *   </Button>
 * </template>
 * 
 * <script setup>
 * import Button from '@/components/Button.vue'
 * 
 * const handleClick = () => {
 *   alert('버튼이 클릭되었습니다!')
 * }
 * </script>
 * ```
 * 
 * ## 🎨 버튼 구성 가이드
 * 
 * ### 버튼 데이터 구조
 * ```javascript
 * // 기본 버튼
 * <Button>텍스트</Button>
 * 
 * // 옵션이 있는 버튼
 * <Button variant="primary" size="md" disabled={false}>
 *   텍스트
 * </Button>
 * ```
 * 
 * ### 버튼 스타일 선택 가이드
 * 
 * **🔵 파란색 (Primary)**
 * - 사용자가 가장 먼저 해야 할 행동
 * - 예: "로그인", "가입하기", "저장하기"
 * 
 * **⚪ 회색 (Secondary)**
 * - 파란색 버튼과 함께 사용하는 보조 버튼
 * - 예: "편집", "수정", "미리보기"
 * 
 * **⚫ 테두리만 (Outline)**
 * - 취소나 뒤로가기 같은 안전한 행동
 * - 예: "취소", "뒤로", "닫기"
 * 
 * ### 어떤 크기를 선택할까요?
 * 
 * **🔸 작게 (Small)**
 * - 테이블이나 카드 안에 들어가는 버튼
 * - 공간이 부족할 때
 * 
 * **🔸 보통 (Medium)**
 * - 대부분의 경우에 사용 (기본값)
 * - 폼이나 일반적인 페이지에서 사용
 * 
 * **🔸 크게 (Large)**
 * - 중요한 행동이나 큰 버튼이 필요할 때
 * - 모바일에서 터치하기 좋은 크기
 * 
 * ## ⚙️ 설정 옵션 (Props)
 * 
 * | 옵션 | 선택지 | 기본값 | 설명 |
 * |------|--------|--------|------|
 * | `variant` | `'primary'`, `'secondary'`, `'outline'` | `'primary'` | 버튼의 색상과 스타일 |
 * | `size` | `'sm'`, `'md'`, `'lg'` | `'md'` | 버튼의 크기 |
 * | `disabled` | `true`, `false` | `false` | 클릭할 수 없게 만들기 |
 * 
 * ## 💡 실전 팁
 * 
 * 1. **한 페이지에 파란색 버튼은 하나만** 사용하세요
 * 2. **버튼 텍스트는 명확하게** 작성하세요 (예: "저장" vs "확인")
 * 3. **비활성화 상태**를 활용해서 사용자에게 피드백을 주세요
 * 4. **모바일에서는 큰 버튼**을 사용하세요 (터치하기 쉽게)
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Button 컴포넌트 🔘

**웹사이트에서 클릭할 수 있는 버튼**을 만들어주는 컴포넌트예요!

## �� 이 컴포넌트로 할 수 있는 것들

- ✅ **3가지 모양** (파란색, 회색, 테두리만 있는 버튼)
- ✅ **3가지 크기** (작게, 보통, 크게)
- ✅ **비활성화** (클릭할 수 없게 만들기)
- ✅ **키보드 접근성** (Tab키로 이동 가능)
- ✅ **모바일 친화적** (터치하기 좋은 크기)
- ✅ **호버 효과** (마우스를 올리면 색상 변화)

## 💡 언제 사용하나요?

**파란색 버튼 (Primary)**: 가장 중요한 행동 (예: 로그인, 저장, 확인)
**회색 버튼 (Secondary)**: 보조적인 행동 (예: 편집, 수정)
**테두리 버튼 (Outline)**: 취소나 뒤로가기 같은 행동

## 🚀 간단한 사용법

\`\`\`vue
<template>
  <!-- 기본 버튼 (파란색, 보통 크기) -->
  <Button @click="handleClick">
    클릭하세요
  </Button>
  
  <!-- 회색 버튼, 작은 크기 -->
  <Button variant="secondary" size="sm">
    편집하기
  </Button>
  
  <!-- 테두리만 있는 버튼, 큰 크기 -->
  <Button variant="outline" size="lg">
    취소
  </Button>
</template>

<script setup>
import Button from '@/components/Button.vue'

const handleClick = () => {
  alert('버튼이 클릭되었습니다!')
}
</script>
\`\`\`

## 🎨 버튼 스타일 선택 가이드

### 어떤 색상을 선택할까요?

**🔵 파란색 (Primary)**
- 사용자가 가장 먼저 해야 할 행동
- 예: "로그인", "가입하기", "저장하기"

**⚪ 회색 (Secondary)**
- 파란색 버튼과 함께 사용하는 보조 버튼
- 예: "편집", "수정", "미리보기"

**⚫ 테두리만 (Outline)**
- 취소나 뒤로가기 같은 안전한 행동
- 예: "취소", "뒤로", "닫기"

### 어떤 크기를 선택할까요?

**🔸 작게 (Small)**
- 테이블이나 카드 안에 들어가는 버튼
- 공간이 부족할 때

**🔸 보통 (Medium)**
- 대부분의 경우에 사용 (기본값)
- 폼이나 일반적인 페이지에서 사용

**🔸 크게 (Large)**
- 중요한 행동이나 큰 버튼이 필요할 때
- 모바일에서 터치하기 좋은 크기

## ⚙️ 설정 옵션 (Props)

| 옵션 | 선택지 | 기본값 | 설명 |
|------|--------|--------|------|
| \`variant\` | \`'primary'\`, \`'secondary'\`, \`'outline'\` | \`'primary'\` | 버튼의 색상과 스타일 |
| \`size\` | \`'sm'\`, \`'md'\`, \`'lg'\` | \`'md'\` | 버튼의 크기 |
| \`disabled\` | \`true\`, \`false\` | \`false\` | 클릭할 수 없게 만들기 |

## 💡 실전 팁

1. **한 페이지에 파란색 버튼은 하나만** 사용하세요
2. **버튼 텍스트는 명확하게** 작성하세요 (예: "저장" vs "확인")
3. **비활성화 상태**를 활용해서 사용자에게 피드백을 주세요
4. **모바일에서는 큰 버튼**을 사용하세요 (터치하기 쉽게)
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
      description: '버튼의 시각적 스타일을 선택합니다. Primary는 주요 액션, Secondary는 보조 액션, Outline은 외곽선 스타일입니다.',
      table: {
        type: { summary: "'primary' | 'secondary' | 'outline'" },
        defaultValue: { summary: "'primary'" },
        category: '스타일'
      }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '버튼의 크기를 선택합니다. Small은 공간이 제한적인 곳, Large는 모바일 터치에 적합합니다.',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "'md'" },
        category: '크기'
      }
    },
    disabled: {
      control: { type: 'boolean' },
      description: '버튼을 비활성화합니다. true일 때 클릭이 불가능하고 시각적으로 구분됩니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: '상태'
      }
    },
    onClick: {
      action: 'clicked',
      description: '버튼이 클릭되었을 때 호출되는 함수입니다. MouseEvent 객체를 매개변수로 받습니다.'
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ## Primary 버튼 🎯
 * 
 * 가장 기본적이고 중요한 액션을 위한 버튼입니다.
 * 
 * **특징:**
 * - 🎯 파란색 배경 (기본 브랜드 컬러)
 * - ✅ 흰색 텍스트
 * - 🔥 높은 시각적 강조
 * - 📱 호버/포커스 효과
 * 
 * **사용 시나리오:**
 * - 폼 제출
 * - 주요 CTA (Call-to-Action)
 * - 확인/저장 버튼
 * - 페이지의 핵심 액션
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Primary Button</Button>',
  }),
};

/**
 * ## Secondary 버튼 🔘
 * 
 * 보조적인 액션을 위한 버튼입니다.
 * 
 * **특징:**
 * - 🔘 회색 배경
 * - ⚪ 흰색 텍스트
 * - 📊 덜 강조되는 디자인
 * - 🔄 Primary 버튼과 조화
 * 
 * **사용 시나리오:**
 * - 편집/수정 액션
 * - 보조 기능
 * - Primary 버튼과 함께 사용
 * - 덜 중요한 행동
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Secondary Button</Button>',
  }),
};

/**
 * ## Outline 버튼 🔲
 * 
 * 외곽선만 있는 스타일의 버튼입니다.
 * 
 * **특징:**
 * - 🔲 투명 배경
 * - 🔵 파란색 외곽선과 텍스트
 * - 🎨 깔끔한 디자인
 * - 🔍 배경과 구분되는 스타일
 * 
 * **사용 시나리오:**
 * - 취소 버튼
 * - 뒤로가기
 * - 보조 액션
 * - 배경이 있는 버튼과 구분이 필요한 경우
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Outline Button</Button>',
  }),
};

/**
 * ## Small 크기 버튼 📏
 * 
 * 공간이 제한적인 곳에서 사용하는 작은 버튼입니다.
 * 
 * **특징:**
 * - 📏 작은 크기 (높이: 32px)
 * - 🔤 작은 폰트 크기
 * - 📱 컴팩트한 디자인
 * - 🎯 공간 효율성
 * 
 * **사용 시나리오:**
 * - 테이블 내 액션 버튼
 * - 카드 내 버튼
 * - 사이드바 버튼
 * - 공간이 제한적인 UI
 */
export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Small Button</Button>',
  }),
};

/**
 * ## Large 크기 버튼 📏
 * 
 * 모바일에서 터치하기 쉽고 중요한 액션을 위한 큰 버튼입니다.
 * 
 * **특징:**
 * - 📏 큰 크기 (높이: 48px)
 * - 🔤 큰 폰트 크기
 * - 📱 터치 친화적
 * - 🎯 높은 가시성
 * 
 * **사용 시나리오:**
 * - 모바일 주요 CTA
 * - 헤더/푸터 버튼
 * - 중요한 액션
 * - 터치 인터페이스
 */
export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Large Button</Button>',
  }),
};

/**
 * ## 비활성화된 버튼 🚫
 * 
 * 사용할 수 없는 상태를 나타내는 버튼입니다.
 * 
 * **특징:**
 * - 🚫 클릭 불가능
 * - ⚫ 회색 스타일
 * - 🔒 시각적 비활성화 표시
 * - ⚠️ 명확한 상태 표시
 * 
 * **사용 시나리오:**
 * - 폼 유효성 검사 실패
 * - 로딩 중 상태
 * - 권한이 없는 기능
 * - 조건부 활성화
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Disabled Button</Button>',
  }),
};

/**
 * ## 모든 변형 비교 🎨
 * 
 * 모든 스타일과 크기를 한 번에 비교할 수 있는 예제입니다.
 * 
 * **포함된 예제:**
 * - 🎯 Primary, Secondary, Outline 스타일
 * - 📏 Small, Medium, Large 크기
 * - 🚫 비활성화 상태
 * - 🔄 다양한 조합
 * 
 * **학습 목적:**
 * - 스타일 간 차이점 이해
 * - 크기별 사용법 파악
 * - 디자인 시스템 이해
 * - 적절한 선택 가이드
 */
export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">스타일 변형</h3>
          <div class="space-x-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">크기 변형</h3>
          <div class="space-x-2">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">상태</h3>
          <div class="space-x-2">
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="secondary" disabled>Disabled</Button>
            <Button variant="outline" disabled>Disabled</Button>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * ## 실제 사용 예제 💼
 * 
 * 실제 프로젝트에서 사용할 수 있는 버튼 조합 예제입니다.
 * 
 * **포함된 시나리오:**
 * - 📝 폼 제출/취소
 * - 🔧 설정/삭제
 * - 📱 모바일 친화적
 * - 🎯 사용자 경험 최적화
 * 
 * **학습 포인트:**
 * - 버튼 그룹 구성법
 * - 적절한 스타일 선택
 * - 사용자 플로우 설계
 * - 접근성 고려사항
 */
export const RealWorldExamples: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-3">폼 액션</h3>
          <div class="space-x-2">
            <Button variant="primary" size="lg">저장하기</Button>
            <Button variant="outline" size="lg">취소</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">설정 액션</h3>
          <div class="space-x-2">
            <Button variant="secondary" size="sm">편집</Button>
            <Button variant="outline" size="sm">삭제</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">모바일 CTA</h3>
          <div class="space-y-2">
            <Button variant="primary" size="lg" class="w-full">주문하기</Button>
            <Button variant="outline" size="lg" class="w-full">장바구니에 추가</Button>
          </div>
        </div>
      </div>
    `,
  }),
};
