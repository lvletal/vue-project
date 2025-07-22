import type { Meta, StoryObj } from '@storybook/vue3';
import Accordion from '../components/Accordion.vue';

/**
 * # Accordion 컴포넌트 📋
 * 
 * **내용을 접었다 펼 수 있는** 컴포넌트예요!
 * 
 * ## 🎯 이 컴포넌트로 할 수 있는 것들
 * 
 * - ✅ **여러 항목 만들기** (배열로 쉽게 생성)
 * - ✅ **단일/다중 열기** (하나만 열기 vs 여러 개 동시에 열기)
 * - ✅ **기본 열림 상태** (처음에 열어둘 항목 설정)
 * - ✅ **자유로운 내용 구성** (텍스트, 이미지, 폼 등)
 * - ✅ **키보드 접근성** (Tab키와 화살표키로 이동)
 * - ✅ **부드러운 애니메이션** (접고 펼 때 자연스러운 효과)
 * 
 * ## 💡 언제 사용하나요?
 * 
 * **FAQ 페이지** 만들 때 (예: 자주 묻는 질문과 답변)
 * **설정 페이지** 만들 때 (예: 카테고리별 설정 옵션)
 * **긴 내용을 정리**하고 싶을 때 (예: 도움말, 가이드)
 * **공간을 절약**하고 싶을 때 (예: 모바일 메뉴, 사이드바)
 * 
 * ## 🚀 간단한 사용법
 * 
 * ```vue
 * <template>
 *   <!-- 기본 아코디언 -->
 *   <Accordion :items="accordionData" />
 *   
 *   <!-- 여러 개 동시에 열기 허용 -->
 *   <Accordion :items="accordionData" :allow-multiple="true" />
 *   
 *   <!-- 첫 번째 항목이 기본으로 열려있음 -->
 *   <Accordion :items="accordionData" :default-open="[0]" />
 * </template>
 * 
 * <script setup>
 * import Accordion from '@/components/Accordion.vue'
 * 
 * const accordionData = [
 *   { title: '배송은 언제 되나요?', content: '주문 후 1-2일 내 배송됩니다.' },
 *   { title: '교환/반품은 어떻게 하나요?', content: '7일 이내 무료 교환/반품 가능합니다.' },
 *   { title: '결제 방법은 어떤 것이 있나요?', content: '카드, 계좌이체, 간편결제를 지원합니다.' }
 * ]
 * </script>
 * ```
 * 
 * ## 🎨 아코디언 구성 가이드
 * 
 * ### 아코디언 데이터 구조
 * ```javascript
 * const items = [
 *   {
 *     title: '제목',     // 아코디언에 표시될 제목
 *     content: '내용'    // 펼쳤을 때 보여줄 내용
 *   }
 * ]
 * ```
 * 
 * ### 어떤 내용을 넣을까요?
 * 
 * **📋 FAQ (자주 묻는 질문)**
 * - 사용자가 궁금해하는 내용들을 정리
 * - 예: "배송은 언제 되나요?", "교환/반품은 어떻게 하나요?"
 * 
 * **⚙️ 설정 옵션**
 * - 카테고리별로 설정을 나누어 표시
 * - 예: "프로필 정보", "보안 설정", "알림 설정"
 * 
 * **📖 도움말/가이드**
 * - 긴 설명을 간단하게 정리
 * - 예: "사용법 가이드", "문제 해결", "연락처"
 * 
 * ### 단일 vs 다중 열기
 * 
 * **🔒 단일 열기 (기본값)**
 * - 한 번에 하나의 항목만 열림
 * - FAQ나 설정 페이지에 적합
 * 
 * **🔓 다중 열기**
 * - 여러 항목을 동시에 열 수 있음
 * - 관련된 내용들을 함께 보여줄 때 유용
 * 
 * ## ⚙️ 설정 옵션 (Props)
 * 
 * | 옵션 | 선택지 | 기본값 | 설명 |
 * |------|--------|--------|------|
 * | `items` | `Array` | `[]` | 아코디언 항목 배열 (필수) |
 * | `allowMultiple` | `true`, `false` | `false` | 여러 항목 동시에 열기 허용 |
 * | `defaultOpen` | `Array` | `[]` | 처음에 열어둘 항목 번호 배열 |
 * 
 * ## 💡 실전 팁
 * 
 * 1. **제목은 질문 형태**로 작성하세요 (예: "배송은 언제 되나요?")
 * 2. **내용은 간결하고 명확하게** 작성하세요
 * 3. **관련된 항목끼리** 그룹화하세요
 * 4. **모바일에서는 터치 영역**을 충분히 크게 만드세요
 * 5. **중요한 정보는 첫 번째 항목**에 넣으세요
 * 
 * ## 🚀 간단한 사용법
 * 
 * ```vue
 * <template>
 *   <!-- 기본 아코디언 -->
 *   <Accordion :items="accordionData" />
 * </template>
 * 
 * <script setup>
 * import Accordion from '@/components/Accordion.vue'
 * 
 * const accordionData = [
 *   { title: '배송은 언제 되나요?', content: '주문 후 1-2일 내 배송됩니다.' },
 *   { title: '교환/반품은 어떻게 하나요?', content: '7일 이내 무료 교환/반품 가능합니다.' },
 *   { title: '결제 방법은 어떤 것이 있나요?', content: '카드, 계좌이체, 간편결제를 지원합니다.' }
 * ]
 * </script>
 * ```
 * 
 * ## 🎨 아코디언 구성 가이드
 * 
 * ### 아코디언 데이터 구조
 * ```javascript
 * const items = [
 *   {
 *     title: '제목',     // 아코디언에 표시될 제목
 *     content: '내용'    // 펼쳤을 때 보여줄 내용
 *   }
 * ]
 * ```
 * 
 * ### 제목 예시
 * - **FAQ**: "배송은 언제 되나요?", "교환/반품은 어떻게 하나요?"
 * - **설정**: "알림 설정", "개인정보 설정", "보안 설정"
 * - **도움말**: "사용법 가이드", "문제 해결", "연락처"
 * 
 * ## ⚙️ 설정 옵션 (Props)
 * 
 * | 옵션 | 타입 | 기본값 | 설명 |
 * |------|------|--------|------|
 * | `items` | `Array` | `[]` | 아코디언 항목 배열 (필수) |
 * | `allowMultiple` | `Boolean` | `false` | 여러 항목 동시에 열기 허용 |
 * | `defaultOpen` | `Array` | `[]` | 처음에 열어둘 항목 번호 배열 |
 * 
 * ## 💡 실전 팁
 * 
 * 1. **제목은 질문 형태**로 작성하세요 (예: "배송은 언제 되나요?")
 * 2. **내용은 간결하고 명확하게** 작성하세요
 * 3. **관련된 항목끼리** 그룹화하세요
 * 4. **모바일에서는 터치 영역**을 충분히 크게 만드세요
 * 5. **중요한 정보는 첫 번째 항목**에 넣으세요
 * 
 * ## 🔧 고급 사용법
 * 
 * ### 여러 항목 동시에 열기
 * ```vue
 * <template>
 *   <Accordion 
 *     :items="accordionData" 
 *     :allow-multiple="true"
 *     :default-open="[0, 2]"
 *   />
 * </template>
 * 
 * <script setup>
 * const accordionData = [
 *   { title: '기본 정보', content: '사용자 기본 정보입니다.' },
 *   { title: '주문 내역', content: '주문한 상품 목록입니다.' },
 *   { title: '설정', content: '계정 설정 옵션입니다.' }
 * ]
 * </script>
 * ```
 * 
 * ## 🎯 실전 예제
 * 
 * ### FAQ 페이지 만들기
 * ```vue
 * <template>
 *   <div class="max-w-4xl mx-auto p-6">
 *     <h1 class="text-3xl font-bold mb-8">자주 묻는 질문</h1>
 *     <Accordion :items="faqItems" :allow-multiple="true" />
 *   </div>
 * </template>
 * 
 * <script setup>
 * const faqItems = [
 *   {
 *     title: '배송은 언제 되나요?',
 *     content: '주문 후 1-2일 내 배송됩니다. 주말 및 공휴일은 제외됩니다.'
 *   },
 *   {
 *     title: '교환/반품은 어떻게 하나요?',
 *     content: '7일 이내 무료 교환/반품 가능합니다. 마이페이지에서 신청하세요.'
 *   },
 *   {
 *     title: '결제 방법은 어떤 것이 있나요?',
 *     content: '카드, 계좌이체, 간편결제(카카오페이, 네이버페이)를 지원합니다.'
 *   }
 * ]
 * </script>
 * ```
 * 
 * ### 설정 페이지 만들기
 * ```vue
 * <template>
 *   <div class="max-w-2xl mx-auto p-6">
 *     <h1 class="text-2xl font-bold mb-6">계정 설정</h1>
 *     <Accordion :items="settingItems" :default-open="[0]" />
 *   </div>
 * </template>
 * 
 * <script setup>
 * const settingItems = [
 *   {
 *     title: '프로필 정보',
 *     content: '이름, 이메일, 전화번호 등 기본 정보를 관리합니다.'
 *   },
 *   {
 *     title: '보안 설정',
 *     content: '비밀번호 변경, 2단계 인증 등 보안 옵션을 설정합니다.'
 *   },
 *   {
 *     title: '알림 설정',
 *     content: '이메일, SMS, 푸시 알림 등을 관리합니다.'
 *   }
 * ]
 * </script>
 * ```
 * 
 * ### 복잡한 내용을 슬롯으로 만들기
 * ```vue
 * <template>
 *   <Accordion :items="accordionData">
 *     <template #item-0>
 *       <div class="space-y-4">
 *         <h3>프로젝트 정보</h3>
 *         <div class="grid grid-cols-2 gap-4">
 *           <div>
 *             <strong>프로젝트명:</strong> 웹사이트 리뉴얼
 *           </div>
 *           <div>
 *             <strong>진행률:</strong> 75%
 *           </div>
 *         </div>
 *         <div class="w-full bg-gray-200 rounded-full h-2">
 *           <div class="bg-blue-600 h-2 rounded-full" style="width: 75%"></div>
 *         </div>
 *       </div>
 *     </template>
 *   </Accordion>
 * </template>
 * ```
 * 
 * ### 동적으로 아코디언 만들기
 * ```vue
 * <template>
 *   <Accordion :items="dynamicItems" />
 *   <button @click="addItem">항목 추가</button>
 * </template>
 * 
 * <script setup>
 * import { ref } from 'vue'
 * 
 * const dynamicItems = ref([
 *   { title: '항목 1', content: '내용 1' },
 *   { title: '항목 2', content: '내용 2' }
 * ])
 * 
 * const addItem = () => {
 *   dynamicItems.value.push({
 *     title: `새 항목 ${dynamicItems.value.length + 1}`,
 *     content: '새로운 내용입니다.'
 *   })
 * }
 * </script>
 * ```
 * 
 * ## 🎨 스타일링 가이드
 * 
 * ### CSS 클래스 커스터마이징
 * ```vue
 * <template>
 *   <Accordion :items="items" class="custom-accordion" />
 * </template>
 * 
 * <style scoped>
 * .custom-accordion {
 *   border-radius: 12px;
 *   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 * }
 * 
 * .custom-accordion :deep(.accordion-item) {
 *   border: 1px solid #e5e7eb;
 *   margin-bottom: 8px;
 *   border-radius: 8px;
 * }
 * 
 * .custom-accordion :deep(.accordion-header) {
 *   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
 *   color: white;
 *   padding: 16px 20px;
 *   border-radius: 8px 8px 0 0;
 * }
 * 
 * .custom-accordion :deep(.accordion-content) {
 *   padding: 20px;
 *   background-color: #f9fafb;
 *   border-radius: 0 0 8px 8px;
 * }
 * </style>
 * ```
 * 
 * ## 🔧 고급 기능
 * 
 * ### 아코디언 상태 관리
 * ```vue
 * <template>
 *   <div>
 *     <Accordion 
 *       :items="items" 
 *       :default-open="openItems"
 *       @item-toggle="handleToggle"
 *     />
 *     <div class="mt-4">
 *       <p>열린 항목: {{ openItems.join(', ') }}</p>
 *       <button @click="openAll">모두 열기</button>
 *       <button @click="closeAll">모두 닫기</button>
 *     </div>
 *   </div>
 * </template>
 * 
 * <script setup>
 * import { ref } from 'vue'
 * 
 * const openItems = ref([0])
 * 
 * const handleToggle = (index, isOpen) => {
 *   if (isOpen) {
 *     openItems.value.push(index)
 *   } else {
 *     openItems.value = openItems.value.filter(i => i !== index)
 *   }
 * }
 * 
 * const openAll = () => {
 *   openItems.value = items.map((_, index) => index)
 * }
 * 
 * const closeAll = () => {
 *   openItems.value = []
 * }
 * </script>
 * ```
 * 
 * ### 조건부 렌더링
 * ```vue
 * <template>
 *   <Accordion :items="filteredItems" />
 *   <div class="mt-4">
 *     <input 
 *       v-model="searchTerm" 
 *       placeholder="검색어를 입력하세요"
 *       class="w-full p-2 border rounded"
 *     />
 *   </div>
 * </template>
 * 
 * <script setup>
 * import { ref, computed } from 'vue'
 * 
 * const searchTerm = ref('')
 * 
 * const allItems = [
 *   { title: 'JavaScript 기초', content: 'JavaScript 기본 문법을 배워봅니다.' },
 *   { title: 'Vue.js 시작하기', content: 'Vue.js 프레임워크를 소개합니다.' },
 *   { title: 'React 기초', content: 'React 라이브러리 기초를 다룹니다.' },
 *   { title: 'TypeScript 활용', content: 'TypeScript를 활용한 개발 방법을 설명합니다.' }
 * ]
 * 
 * const filteredItems = computed(() => {
 *   if (!searchTerm.value) return allItems
 *   return allItems.filter(item => 
 *     item.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
 *     item.content.toLowerCase().includes(searchTerm.value.toLowerCase())
 *   )
 * })
 * </script>
 * ```
 * 
 * ## 🚀 성능 최적화
 * 
 * ### 대량 데이터 처리
 * ```vue
 * <template>
 *   <div>
 *     <Accordion :items="visibleItems" />
 *     <div class="mt-4 text-center">
 *       <button 
 *         v-if="hasMore" 
 *         @click="loadMore"
 *         class="px-4 py-2 bg-blue-500 text-white rounded"
 *       >
 *         더 보기 ({{ loadedCount }}/{{ totalCount }})
 *       </button>
 *     </div>
 *   </div>
 * </template>
 * 
 * <script setup>
 * import { ref, computed } from 'vue'
 * 
 * const loadedCount = ref(10)
 * const totalCount = 100
 * 
 * const allItems = Array.from({ length: totalCount }, (_, i) => ({
 *   title: `항목 ${i + 1}`,
 *   content: `항목 ${i + 1}의 상세 내용입니다.`
 * }))
 * 
 * const visibleItems = computed(() => 
 *   allItems.slice(0, loadedCount.value)
 * )
 * 
 * const hasMore = computed(() => 
 *   loadedCount.value < totalCount
 * )
 * 
 * const loadMore = () => {
 *   loadedCount.value = Math.min(loadedCount.value + 10, totalCount)
 * }
 * </script>
 * ```
 * 
 * ## 🎯 접근성 (Accessibility)
 * 
 * ### 키보드 네비게이션
 * ```vue
 * <template>
 *   <Accordion 
 *     :items="items" 
 *     :allow-multiple="true"
 *     @keydown="handleKeydown"
 *   />
 * </template>
 * 
 * <script setup>
 * const handleKeydown = (event) => {
 *   switch(event.key) {
 *     case 'ArrowDown':
 *       // 다음 항목으로 이동
 *       break
 *     case 'ArrowUp':
 *       // 이전 항목으로 이동
 *       break
 *     case 'Home':
 *       // 첫 번째 항목으로 이동
 *       break
 *     case 'End':
 *       // 마지막 항목으로 이동
 *       break
 *   }
 * }
 * </script>
 * ```
 * 
 * ### 스크린 리더 지원
 * ```vue
 * <template>
 *   <Accordion 
 *     :items="items"
 *     aria-label="자주 묻는 질문"
 *     role="region"
 *   />
 * </template>
 * 
 * <script setup>
 * const items = [
 *   { 
 *     title: '배송 관련 질문',
 *     content: '배송에 대한 자세한 안내입니다.',
 *     'aria-describedby': 'shipping-info'
 *   }
 * ]
 * </script>
 * ```
 * 
 * ## 🎨 아코디언 선택 가이드
 * 
 * ### 어떤 모드를 선택할까요?
 * 
 * **🔒 단일 열기 (allowMultiple: false)**
 * - 한 번에 하나의 항목만 열립니다
 * - FAQ나 설정 페이지에 적합합니다
 * - 사용자가 한 번에 하나의 정보에 집중할 수 있습니다
 * - 예: "자주 묻는 질문", "계정 설정", "도움말"
 * 
 * **🔓 다중 열기 (allowMultiple: true)**
 * - 여러 항목을 동시에 열 수 있습니다
 * - 관련된 정보들을 함께 보여줄 때 유용합니다
 * - 사용자가 여러 정보를 비교하거나 참조할 때 좋습니다
 * - 예: "프로젝트 정보", "팀 멤버", "진행 상황"
 * 
 * ### 어떤 내용을 넣을까요?
 * 
 * **📋 FAQ (자주 묻는 질문)**
 * - 사용자가 궁금해하는 내용들을 정리
 * - 질문 형태의 제목으로 작성하세요
 * - 예: "배송은 언제 되나요?", "교환/반품은 어떻게 하나요?"
 * 
 * **⚙️ 설정 옵션**
 * - 카테고리별로 설정을 나누어 표시
 * - 명확한 카테고리명으로 제목을 작성하세요
 * - 예: "프로필 정보", "보안 설정", "알림 설정"
 * 
 * **📖 도움말/가이드**
 * - 긴 설명을 간단하게 정리
 * - 단계별로 구성하면 좋습니다
 * - 예: "사용법 가이드", "문제 해결", "연락처"
 * 
 * ### 기본 열림 상태는 어떻게 설정할까요?
 * 
 * **📌 첫 번째 항목 열기 (defaultOpen: [0])**
 * - 가장 중요한 정보를 첫 번째에 배치하고 기본으로 열어둡니다
 * - 사용자가 페이지에 들어오자마자 중요한 정보를 볼 수 있습니다
 * - 예: "주요 안내사항", "시작하기", "빠른 가이드"
 * 
 * **📌 모든 항목 닫기 (defaultOpen: [])**
 * - 사용자가 원하는 항목을 직접 선택하도록 합니다
 * - 공간을 절약하고 깔끔한 화면을 제공합니다
 * - 예: "상세 설정", "고급 옵션", "추가 정보"
 * 
 * **📌 여러 항목 열기 (defaultOpen: [0, 2])**
 * - 관련된 정보들을 함께 보여줍니다
 * - 사용자가 여러 정보를 동시에 참조할 수 있습니다
 * - 예: "기본 정보 + 설정", "개요 + 상세내용"
 * 
 * ## ⚙️ 설정 옵션 (Props)
 * 
 * | 옵션 | 선택지 | 기본값 | 설명 |
 * |------|--------|--------|------|
 * | `items` | `Array` | `[]` | 아코디언 항목 배열 (필수) |
 * | `allowMultiple` | `true`, `false` | `false` | 여러 항목 동시에 열기 허용 |
 * | `defaultOpen` | `Array` | `[]` | 처음에 열어둘 항목 번호 배열 |
 * 
 * ## 💡 실전 팁
 * 
 * 1. **제목은 질문 형태**로 작성하세요 (예: "배송은 언제 되나요?")
 * 2. **내용은 간결하고 명확하게** 작성하세요
 * 3. **관련된 항목끼리** 그룹화하세요
 * 4. **모바일에서는 터치 영역**을 충분히 크게 만드세요
 * 5. **중요한 정보는 첫 번째 항목**에 넣으세요
 * 6. **항목 개수는 3-7개**가 적당합니다 (너무 많으면 복잡해 보여요)
 * 7. **일관된 스타일**로 제목과 내용을 작성하세요
 */

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Accordion 컴포넌트 📋

**내용을 접었다 펼 수 있는** 컴포넌트예요!

## 🎯 이 컴포넌트로 할 수 있는 것들

- ✅ **여러 항목 만들기** (배열로 쉽게 생성)
- ✅ **단일/다중 열기** (하나만 열기 vs 여러 개 동시에 열기)
- ✅ **기본 열림 상태** (처음에 열어둘 항목 설정)
- ✅ **자유로운 내용 구성** (텍스트, 이미지, 폼 등)
- ✅ **키보드 접근성** (Tab키와 화살표키로 이동)
- ✅ **부드러운 애니메이션** (접고 펼 때 자연스러운 효과)

## 💡 언제 사용하나요?

**FAQ 페이지** 만들 때 (예: 자주 묻는 질문과 답변)
**설정 페이지** 만들 때 (예: 카테고리별 설정 옵션)
**긴 내용을 정리**하고 싶을 때 (예: 도움말, 가이드)
**공간을 절약**하고 싶을 때 (예: 모바일 메뉴, 사이드바)

## 🚀 간단한 사용법

\`\`\`vue
<template>
  <!-- 기본 아코디언 -->
  <Accordion :items="accordionData" />
  
  <!-- 여러 개 동시에 열기 허용 -->
  <Accordion :items="accordionData" :allow-multiple="true" />
  
  <!-- 첫 번째 항목이 기본으로 열려있음 -->
  <Accordion :items="accordionData" :default-open="[0]" />
</template>

<script setup>
import Accordion from '@/components/Accordion.vue'

const accordionData = [
  { title: '배송은 언제 되나요?', content: '주문 후 1-2일 내 배송됩니다.' },
  { title: '교환/반품은 어떻게 하나요?', content: '7일 이내 무료 교환/반품 가능합니다.' },
  { title: '결제 방법은 어떤 것이 있나요?', content: '카드, 계좌이체, 간편결제를 지원합니다.' }
]
</script>
\`\`\`

## 🎨 아코디언 선택 가이드

### 어떤 모드를 선택할까요?

**🔒 단일 열기 (allowMultiple: false)**
- 한 번에 하나의 항목만 열립니다
- FAQ나 설정 페이지에 적합합니다
- 사용자가 한 번에 하나의 정보에 집중할 수 있습니다
- 예: "자주 묻는 질문", "계정 설정", "도움말"

**🔓 다중 열기 (allowMultiple: true)**
- 여러 항목을 동시에 열 수 있습니다
- 관련된 정보들을 함께 보여줄 때 유용합니다
- 사용자가 여러 정보를 비교하거나 참조할 때 좋습니다
- 예: "프로젝트 정보", "팀 멤버", "진행 상황"

### 어떤 내용을 넣을까요?

**📋 FAQ (자주 묻는 질문)**
- 사용자가 궁금해하는 내용들을 정리
- 질문 형태의 제목으로 작성하세요
- 예: "배송은 언제 되나요?", "교환/반품은 어떻게 하나요?"

**⚙️ 설정 옵션**
- 카테고리별로 설정을 나누어 표시
- 명확한 카테고리명으로 제목을 작성하세요
- 예: "프로필 정보", "보안 설정", "알림 설정"

**📖 도움말/가이드**
- 긴 설명을 간단하게 정리
- 단계별로 구성하면 좋습니다
- 예: "사용법 가이드", "문제 해결", "연락처"

### 기본 열림 상태는 어떻게 설정할까요?

**📌 첫 번째 항목 열기 (defaultOpen: [0])**
- 가장 중요한 정보를 첫 번째에 배치하고 기본으로 열어둡니다
- 사용자가 페이지에 들어오자마자 중요한 정보를 볼 수 있습니다
- 예: "주요 안내사항", "시작하기", "빠른 가이드"

**📌 모든 항목 닫기 (defaultOpen: [])**
- 사용자가 원하는 항목을 직접 선택하도록 합니다
- 공간을 절약하고 깔끔한 화면을 제공합니다
- 예: "상세 설정", "고급 옵션", "추가 정보"

**📌 여러 항목 열기 (defaultOpen: [0, 2])**
- 관련된 정보들을 함께 보여줍니다
- 사용자가 여러 정보를 동시에 참조할 수 있습니다
- 예: "기본 정보 + 설정", "개요 + 상세내용"

## ⚙️ 설정 옵션 (Props)

| 옵션 | 선택지 | 기본값 | 설명 |
|------|--------|--------|------|
| \`items\` | \`Array\` | \`[]\` | 아코디언 항목 배열 (필수) |
| \`allowMultiple\` | \`true\`, \`false\` | \`false\` | 여러 항목 동시에 열기 허용 |
| \`defaultOpen\` | \`Array\` | \`[]\` | 처음에 열어둘 항목 번호 배열 |

## 💡 실전 팁

1. **제목은 질문 형태**로 작성하세요 (예: "배송은 언제 되나요?")
2. **내용은 간결하고 명확하게** 작성하세요
3. **관련된 항목끼리** 그룹화하세요
4. **모바일에서는 터치 영역**을 충분히 크게 만드세요
5. **중요한 정보는 첫 번째 항목**에 넣으세요
6. **항목 개수는 3-7개**가 적당합니다 (너무 많으면 복잡해 보여요)
7. **일관된 스타일**로 제목과 내용을 작성하세요
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: '아코디언에 표시할 항목들의 배열입니다. 각 항목은 제목(title)과 내용(content)을 포함합니다. FAQ, 설정 옵션, 도움말 등을 구성할 때 사용합니다.',
      table: {
        type: { summary: 'AccordionItem[]' },
        defaultValue: { summary: '[]' }
      }
    },
    allowMultiple: {
      control: { type: 'boolean' },
      description: '여러 항목을 동시에 열 수 있는지 설정합니다. true일 때 여러 섹션을 동시에 펼칠 수 있고, false일 때는 한 번에 하나의 항목만 열립니다. FAQ 페이지에는 true, 설정 페이지에는 false가 적합합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    defaultOpen: {
      control: { type: 'object' },
      description: '페이지 로드 시 기본적으로 열려있을 항목들의 인덱스 배열입니다. 0부터 시작하며, 빈 배열일 경우 모든 항목이 닫힌 상태로 시작됩니다. 중요한 정보가 있는 항목을 기본으로 열어두고 싶을 때 사용합니다.',
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[]' }
      }
    },

  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { title: '자주 묻는 질문 1', content: '첫 번째 질문에 대한 답변입니다.' },
      { title: '자주 묻는 질문 2', content: '두 번째 질문에 대한 답변입니다.' },
      { title: '자주 묻는 질문 3', content: '세 번째 질문에 대한 답변입니다.' }
    ],
    allowMultiple: false,
    defaultOpen: []
  }
};

/**
 * 여러 아이템을 동시에 열 수 있는 아코디언입니다.
 * allowMultiple prop이 true로 설정되어 있어 여러 섹션을 동시에 펼칠 수 있습니다.
 */
export const AllowMultiple: Story = {
  args: {
    items: [
      { title: '섹션 1', content: '첫 번째 섹션의 내용입니다.' },
      { title: '섹션 2', content: '두 번째 섹션의 내용입니다.' },
      { title: '섹션 3', content: '세 번째 섹션의 내용입니다.' }
    ],
    allowMultiple: true,
    defaultOpen: [0]
  }
};

/**
 * 슬롯을 사용하여 복잡한 콘텐츠를 표시하는 아코디언입니다.
 * 프로젝트 정보, 팀 멤버, 진행 상황 등 다양한 형태의 콘텐츠를 포함합니다.
 */
export const WithCustomContent: Story = {
  args: {
    items: [
      { title: '프로젝트 정보' },
      { title: '팀 멤버' },
      { title: '진행 상황' }
    ],
    allowMultiple: true,
    defaultOpen: [0]
  },
  render: (args) => ({
    components: { Accordion },
    setup() {
      return { args };
    },
    template: `
      <Accordion v-bind="args">
        <template #accordion-0>
          <div class="space-y-3">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-gray-900">프로젝트명</h4>
                <p class="text-gray-600">Vue.js 웹 애플리케이션</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">시작일</h4>
                <p class="text-gray-600">2024-01-01</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">마감일</h4>
                <p class="text-gray-600">2024-06-30</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">상태</h4>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  진행중
                </span>
              </div>
            </div>
          </div>
        </template>
        <template #accordion-1>
          <div class="space-y-3">
            <div class="space-y-2">
              <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div>
                  <h4 class="font-medium">김개발</h4>
                  <p class="text-sm text-gray-600">프론트엔드 개발자</p>
                </div>
                <span class="text-sm text-gray-500">담당자</span>
              </div>
              <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div>
                  <h4 class="font-medium">이디자인</h4>
                  <p class="text-sm text-gray-600">UI/UX 디자이너</p>
                </div>
                <span class="text-sm text-gray-500">참여자</span>
              </div>
              <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div>
                  <h4 class="font-medium">박백엔드</h4>
                  <p class="text-sm text-gray-600">백엔드 개발자</p>
                </div>
                <span class="text-sm text-gray-500">참여자</span>
              </div>
            </div>
          </div>
        </template>
        <template #accordion-2>
          <div class="space-y-3">
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium">기획</span>
                <span class="text-sm text-gray-600">100%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-600 h-2 rounded-full" style="width: 100%"></div>
              </div>
              
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium">디자인</span>
                <span class="text-sm text-gray-600">80%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" style="width: 80%"></div>
              </div>
              
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium">개발</span>
                <span class="text-sm text-gray-600">60%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-yellow-600 h-2 rounded-full" style="width: 60%"></div>
              </div>
              
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium">테스트</span>
                <span class="text-sm text-gray-600">30%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-red-600 h-2 rounded-full" style="width: 30%"></div>
              </div>
            </div>
          </div>
        </template>
      </Accordion>
    `
  })
};

/**
 * 기본적으로 첫 번째 항목이 열려있는 아코디언입니다.
 * defaultOpen prop을 사용하여 초기 열림 상태를 설정할 수 있습니다.
 */
export const WithDefaultOpen: Story = {
  args: {
    items: [
      { title: '첫 번째 항목', content: '기본적으로 열려있는 첫 번째 항목입니다.' },
      { title: '두 번째 항목', content: '두 번째 항목의 내용입니다.' },
      { title: '세 번째 항목', content: '세 번째 항목의 내용입니다.' }
    ],
    allowMultiple: false,
    defaultOpen: [0]
  }
}; 