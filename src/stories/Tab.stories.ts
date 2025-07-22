import type { Meta, StoryObj } from '@storybook/vue3';
import Tab from '../components/Tab.vue';

/**
 * # Tab 컴포넌트 📑
 * 
 * **여러 내용을 탭으로 나누어서 보여주는** 컴포넌트예요!
 * 
 * ## 🎯 이 컴포넌트로 할 수 있는 것들
 * 
 * - ✅ **여러 탭 만들기** (배열로 쉽게 생성)
 * - ✅ **기본 탭 설정** (처음에 보여줄 탭 선택)
 * - ✅ **자유로운 내용 구성** (텍스트, 이미지, 폼 등)
 * - ✅ **키보드 접근성** (Tab키와 화살표키로 이동)
 * - ✅ **모바일 친화적** (터치하기 좋은 크기)
 * - ✅ **부드러운 전환 효과**
 * 
 * ## 💡 언제 사용하나요?
 * 
 * **여러 정보를 한 페이지에** 보여주고 싶을 때 (예: 상품 상세정보, 사용자 프로필)
 * **공간을 절약**하고 싶을 때 (예: 설정 페이지, 관리자 대시보드)
 * **관련된 정보를 그룹화**하고 싶을 때 (예: FAQ, 도움말)
 * 
 * ## 🚀 간단한 사용법
 * 
 * ```vue
 * <template>
 *   <!-- 기본 탭 -->
 *   <Tab :tabs="tabData" />
 *   
 *   <!-- 두 번째 탭이 기본으로 선택됨 -->
 *   <Tab :tabs="tabData" :default-tab="1" />
 *   
 *   <!-- 복잡한 내용을 슬롯으로 만들기 -->
 *   <Tab :tabs="tabData">
 *     <template #tab-0>
 *       <div>첫 번째 탭의 복잡한 내용</div>
 *     </template>
 *   </Tab>
 * </template>
 * 
 * <script setup>
 * import Tab from '@/components/Tab.vue'
 * 
 * const tabData = [
 *   { title: '상품 정보', content: '상품의 기본 정보입니다.' },
 *   { title: '리뷰', content: '고객 리뷰를 확인하세요.' },
 *   { title: '배송 정보', content: '배송 관련 정보입니다.' }
 * ]
 * </script>
 * ```
 * 
 * ## 🎨 탭 구성 가이드
 * 
 * ### 탭 데이터 구조
 * ```javascript
 * const tabs = [
 *   {
 *     title: '탭 제목',     // 탭에 표시될 이름
 *     content: '탭 내용'    // 탭을 클릭했을 때 보여줄 내용
 *   }
 * ]
 * ```
 * 
 * ### 어떤 내용을 넣을까요?
 * 
 * **📦 상품 관련**
 * - 상품의 다양한 정보를 분류해서 표시
 * - 예: "상품정보", "리뷰", "배송정보", "교환/반품"
 * 
 * **👤 사용자 관련**
 * - 사용자 계정의 다양한 기능
 * - 예: "기본정보", "주문내역", "찜목록", "설정"
 * 
 * **⚙️ 관리자 관련**
 * - 관리자 페이지의 다양한 기능
 * - 예: "대시보드", "사용자관리", "상품관리", "통계"
 * 
 * ### 탭 개수와 순서
 * 
 * **📊 탭 개수**
 * - 2~5개가 적당해요 (너무 많으면 복잡해 보여요)
 * - 모바일에서는 3개 이하가 좋아요
 * 
 * **📋 탭 순서**
 * - 가장 중요한 정보를 첫 번째 탭에 넣으세요
 * - 관련된 정보끼리 그룹화하세요
 * 
 * ## ⚙️ 설정 옵션 (Props)
 * 
 * | 옵션 | 선택지 | 기본값 | 설명 |
 * |------|--------|--------|------|
 * | `tabs` | `Array` | `[]` | 탭 데이터 배열 (필수) |
 * | `defaultTab` | `Number` | `0` | 처음에 보여줄 탭 번호 (0부터 시작) |
 * 
 * ## 💡 실전 팁
 * 
 * 1. **탭 제목은 짧고 명확하게** 작성하세요 (예: "정보" vs "상품 기본 정보")
 * 2. **탭은 2~5개 정도**가 적당해요 (너무 많으면 복잡해 보여요)
 * 3. **첫 번째 탭에는 가장 중요한 정보**를 넣으세요
 * 4. **모바일에서는 탭 크기**를 충분히 크게 만드세요
 * 5. **탭 내용은 관련된 정보끼리** 그룹화하세요
 * 
 * ## 🚀 간단한 사용법
 * 
 * ```vue
 * <template>
 *   <!-- 기본 탭 -->
 *   <Tab :tabs="tabData" />
 * </template>
 * 
 * <script setup>
 * import Tab from '@/components/Tab.vue'
 * 
 * const tabData = [
 *   { title: '상품 정보', content: '상품의 기본 정보입니다.' },
 *   { title: '리뷰', content: '고객 리뷰를 확인하세요.' },
 *   { title: '배송 정보', content: '배송 관련 정보입니다.' }
 * ]
 * </script>
 * ```
 * 
 * ## 🎨 탭 구성 가이드
 * 
 * ### 탭 데이터 구조
 * ```javascript
 * const tabs = [
 *   {
 *     title: '탭 제목',     // 탭에 표시될 이름
 *     content: '탭 내용'    // 탭을 클릭했을 때 보여줄 내용
 *   }
 * ]
 * ```
 * 
 * ### 탭 제목 예시
 * - **상품 관련**: "상품정보", "리뷰", "배송정보", "교환/반품"
 * - **사용자 관련**: "기본정보", "주문내역", "찜목록", "설정"
 * - **관리자 관련**: "대시보드", "사용자관리", "상품관리", "통계"
 * 
 * ## ⚙️ 설정 옵션 (Props)
 * 
 * | 옵션 | 타입 | 기본값 | 설명 |
 * |------|------|--------|------|
 * | `tabs` | `Array` | `[]` | 탭 데이터 배열 (필수) |
 * | `defaultTab` | `Number` | `0` | 처음에 보여줄 탭 번호 (0부터 시작) |
 * 
 * ## 💡 실전 팁
 * 
 * 1. **탭 제목은 짧고 명확하게** 작성하세요 (예: "정보" vs "상품 기본 정보")
 * 2. **탭은 2~5개 정도**가 적당해요 (너무 많으면 복잡해 보여요)
 * 3. **첫 번째 탭에는 가장 중요한 정보**를 넣으세요
 * 4. **모바일에서는 탭 크기**를 충분히 크게 만드세요
 * 5. **탭 내용은 관련된 정보끼리** 그룹화하세요
 * 
 * ## 🔧 고급 사용법
 * 
 * ### 복잡한 내용을 슬롯으로 만들기
 * ```vue
 * <template>
 *   <Tab :tabs="tabData">
 *     <template #tab-0>
 *       <div class="space-y-4">
 *         <h3>사용자 정보</h3>
 *         <form>
 *           <input type="text" placeholder="이름" />
 *           <input type="email" placeholder="이메일" />
 *         </form>
 *       </div>
 *     </template>
 *     
 *     <template #tab-1>
 *       <div class="space-y-4">
 *         <h3>설정 옵션</h3>
 *         <label><input type="checkbox" /> 알림 받기</label>
 *         <label><input type="checkbox" /> 다크모드</label>
 *       </div>
 *     </template>
 *   </Tab>
 * </template>
 * ```
 * 
 * ### 동적으로 탭 만들기
 * ```vue
 * <template>
 *   <Tab :tabs="dynamicTabs" />
 * </template>
 * 
 * <script setup>
 * import { ref } from 'vue'
 * 
 * const dynamicTabs = ref([
 *   { title: '탭 1', content: '내용 1' },
 *   { title: '탭 2', content: '내용 2' }
 * ])
 * 
 * // 탭 추가하기
 * const addTab = () => {
 *   dynamicTabs.value.push({
 *     title: `새 탭 ${dynamicTabs.value.length + 1}`,
 *     content: '새로운 내용입니다.'
 *   })
 * }
 * </script>
 * 
 * ## 🎯 실전 예제
 * 
 * ### 상품 상세 페이지
 * ```vue
 * <template>
 *   <div class="max-w-4xl mx-auto p-6">
 *     <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
 *       <!-- 상품 이미지 -->
 *       <div>
 *         <img :src="product.image" :alt="product.name" class="w-full rounded-lg" />
 *       </div>
 *       
 *       <!-- 상품 정보 탭 -->
 *       <div>
 *         <h1 class="text-2xl font-bold mb-4">{{ product.name }}</h1>
 *         <p class="text-3xl font-bold text-red-600 mb-6">{{ product.price }}원</p>
 *         
 *         <Tab :tabs="productTabs" :default-tab="0" />
 *       </div>
 *     </div>
 *   </div>
 * </template>
 * 
 * <script setup>
 * const product = {
 *   name: '프리미엄 노트북',
 *   price: '1,200,000',
 *   image: '/products/laptop.jpg'
 * }
 * 
 * const productTabs = [
 *   { title: '상품정보', content: '프로세서: Intel i7, 메모리: 16GB, 저장공간: 512GB SSD' },
 *   { title: '리뷰', content: '고객 리뷰를 확인하세요. (리뷰 컴포넌트가 들어갈 자리)' },
 *   { title: '배송정보', content: '무료배송, 1-2일 내 배송, 교환/반품 7일 이내' },
 *   { title: 'Q&A', content: '상품 관련 질문과 답변을 확인하세요.' }
 * ]
 * </script>
 * ```
 * 
 * ### 관리자 대시보드
 * ```vue
 * <template>
 *   <div class="min-h-screen bg-gray-50">
 *     <div class="max-w-7xl mx-auto p-6">
 *       <h1 class="text-3xl font-bold mb-8">관리자 대시보드</h1>
 *       
 *       <Tab :tabs="dashboardTabs" :default-tab="0">
 *         <template #tab-0>
 *           <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
 *             <div class="bg-white p-6 rounded-lg shadow">
 *               <h3 class="text-lg font-semibold mb-2">총 주문</h3>
 *               <p class="text-3xl font-bold text-blue-600">1,234</p>
 *             </div>
 *             <div class="bg-white p-6 rounded-lg shadow">
 *               <h3 class="text-lg font-semibold mb-2">총 매출</h3>
 *               <p class="text-3xl font-bold text-green-600">₩45,678,900</p>
 *             </div>
 *             <div class="bg-white p-6 rounded-lg shadow">
 *               <h3 class="text-lg font-semibold mb-2">신규 회원</h3>
 *               <p class="text-3xl font-bold text-purple-600">567</p>
 *             </div>
 *           </div>
 *         </template>
 *         
 *         <template #tab-1>
 *           <div class="bg-white p-6 rounded-lg shadow">
 *             <h3 class="text-lg font-semibold mb-4">최근 주문</h3>
 *             <div class="space-y-3">
 *               <div class="flex justify-between items-center p-3 bg-gray-50 rounded">
 *                 <span>#12345 - 홍길동</span>
 *                 <span class="text-green-600">배송완료</span>
 *               </div>
 *               <div class="flex justify-between items-center p-3 bg-gray-50 rounded">
 *                 <span>#12344 - 김철수</span>
 *                 <span class="text-blue-600">배송중</span>
 *               </div>
 *             </div>
 *           </div>
 *         </template>
 *         
 *         <template #tab-2>
 *           <div class="bg-white p-6 rounded-lg shadow">
 *             <h3 class="text-lg font-semibold mb-4">시스템 설정</h3>
 *             <div class="space-y-4">
 *               <div>
 *                 <label class="block text-sm font-medium mb-2">사이트 이름</label>
 *                 <input type="text" value="내 쇼핑몰" class="w-full p-2 border rounded" />
 *               </div>
 *               <div>
 *                 <label class="text-sm font-medium mb-2">관리자 이메일</label>
 *                 <input type="email" value="admin@example.com" class="w-full p-2 border rounded" />
 *               </div>
 *             </div>
 *           </div>
 *         </template>
 *       </Tab>
 *     </div>
 *   </div>
 * </template>
 * 
 * <script setup>
 * const dashboardTabs = [
 *   { title: '대시보드' },
 *   { title: '주문관리' },
 *   { title: '설정' }
 * ]
 * </script>
 * ```
 * 
 * ## 🎨 스타일링 가이드
 * 
 * ### 커스텀 탭 디자인
 * ```vue
 * <template>
 *   <Tab :tabs="tabs" class="custom-tabs" />
 * </template>
 * 
 * <style scoped>
 * .custom-tabs {
 *   border-radius: 12px;
 *   overflow: hidden;
 *   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 * }
 * 
 * .custom-tabs :deep(.tab-header) {
 *   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
 *   padding: 0;
 * }
 * 
 * .custom-tabs :deep(.tab-button) {
 *   color: rgba(255, 255, 255, 0.8);
 *   padding: 16px 24px;
 *   border: none;
 *   background: transparent;
 *   transition: all 0.3s ease;
 * }
 * 
 * .custom-tabs :deep(.tab-button.active) {
 *   color: white;
 *   background: rgba(255, 255, 255, 0.2);
 *   border-bottom: 3px solid white;
 * }
 * 
 * .custom-tabs :deep(.tab-button:hover) {
 *   background: rgba(255, 255, 255, 0.1);
 * }
 * 
 * .custom-tabs :deep(.tab-content) {
 *   padding: 24px;
 *   background: white;
 * }
 * </style>
 * ```
 * 
 * ## 🔧 고급 기능
 * 
 * ### 탭 상태 관리
 * ```vue
 * <template>
 *   <div>
 *     <Tab 
 *       :tabs="tabs" 
 *       :default-tab="activeTab"
 *       @tab-change="handleTabChange"
 *     />
 *     <div class="mt-4">
 *       <p>현재 탭: {{ tabs[activeTab]?.title }}</p>
 *       <div class="space-x-2">
 *         <button @click="goToTab(0)">첫 번째 탭</button>
 *         <button @click="goToTab(1)">두 번째 탭</button>
 *         <button @click="goToTab(2)">세 번째 탭</button>
 *       </div>
 *     </div>
 *   </div>
 * </template>
 * 
 * <script setup>
 * import { ref } from 'vue'
 * 
 * const activeTab = ref(0)
 * 
 * const handleTabChange = (index) => {
 *   activeTab.value = index
 *   console.log(`탭 변경: ${index}`)
 * }
 * 
 * const goToTab = (index) => {
 *   activeTab.value = index
 * }
 * </script>
 * ```
 * 
 * ### 동적 탭 생성
 * ```vue
 * <template>
 *   <div>
 *     <Tab :tabs="dynamicTabs" />
 *     <div class="mt-4 space-x-2">
 *       <button @click="addTab">탭 추가</button>
 *       <button @click="removeTab">탭 제거</button>
 *     </div>
 *   </div>
 * </template>
 * 
 * <script setup>
 * import { ref } from 'vue'
 * 
 * const dynamicTabs = ref([
 *   { title: '탭 1', content: '첫 번째 탭 내용' },
 *   { title: '탭 2', content: '두 번째 탭 내용' }
 * ])
 * 
 * const addTab = () => {
 *   const newIndex = dynamicTabs.value.length + 1
 *   dynamicTabs.value.push({
 *     title: `새 탭 ${newIndex}`,
 *     content: `새 탭 ${newIndex}의 내용입니다.`
 *   })
 * }
 * 
 * const removeTab = () => {
 *   if (dynamicTabs.value.length > 1) {
 *     dynamicTabs.value.pop()
 *   }
 * }
 * </script>
 * ```
 * 
 * ### 조건부 탭 표시
 * ```vue
 * <template>
 *   <Tab :tabs="visibleTabs" />
 *   <div class="mt-4">
 *     <label>
 *       <input type="checkbox" v-model="showAdminTab" />
 *       관리자 탭 표시
 *     </label>
 *   </div>
 * </template>
 * 
 * <script setup>
 * import { ref, computed } from 'vue'
 * 
 * const showAdminTab = ref(false)
 * 
 * const allTabs = [
 *   { title: '홈', content: '홈 페이지 내용' },
 *   { title: '프로필', content: '프로필 페이지 내용' },
 *   { title: '관리자', content: '관리자 페이지 내용', admin: true }
 * ]
 * 
 * const visibleTabs = computed(() => {
 *   return allTabs.filter(tab => !tab.admin || showAdminTab.value)
 * })
 * </script>
 * ```
 * 
 * ## 🚀 성능 최적화
 * 
 * ### 지연 로딩 (Lazy Loading)
 * ```vue
 * <template>
 *   <Tab :tabs="tabs">
 *     <template #tab-0>
 *       <div v-if="!loaded.tab0" class="text-center py-8">
 *         <p>로딩 중...</p>
 *       </div>
 *       <div v-else>
 *         <HeavyComponent />
 *       </div>
 *     </template>
 *   </Tab>
 * </template>
 * 
 * <script setup>
 * import { ref, onMounted } from 'vue'
 * 
 * const loaded = ref({
 *   tab0: false,
 *   tab1: false,
 *   tab2: false
 * })
 * 
 * onMounted(() => {
 *   // 첫 번째 탭만 즉시 로드
 *   loaded.value.tab0 = true
 * })
 * 
 * const handleTabChange = (index) => {
 *   // 탭이 처음 클릭될 때만 로드
 *   if (!loaded.value[`tab${index}`]) {
 *     loaded.value[`tab${index}`] = true
 *   }
 * }
 * </script>
 * ```
 * 
 * ### 가상 스크롤링
 * ```vue
 * <template>
 *   <Tab :tabs="tabs">
 *     <template #tab-0>
 *       <div class="h-96 overflow-auto">
 *         <div 
 *           v-for="item in visibleItems" 
 *           :key="item.id"
 *           class="p-4 border-b"
 *         >
 *           {{ item.name }}
 *         </div>
 *       </div>
 *     </template>
 *   </Tab>
 * </template>
 * 
 * <script setup>
 * import { ref, computed } from 'vue'
 * 
 * const scrollTop = ref(0)
 * const itemHeight = 60
 * const visibleCount = 10
 * 
 * const allItems = Array.from({ length: 1000 }, (_, i) => ({
 *   id: i,
 *   name: `아이템 ${i + 1}`
 * }))
 * 
 * const visibleItems = computed(() => {
 *   const startIndex = Math.floor(scrollTop.value / itemHeight)
 *   return allItems.slice(startIndex, startIndex + visibleCount)
 * })
 * </script>
 * ```
 * 
 * ## 🎯 접근성 (Accessibility)
 * 
 * ### 키보드 네비게이션
 * ```vue
 * <template>
 *   <Tab 
 *     :tabs="tabs"
 *     @keydown="handleKeydown"
 *     role="tablist"
 *     aria-label="메인 네비게이션"
 *   />
 * </template>
 * 
 * <script setup>
 * const handleKeydown = (event) => {
 *   switch(event.key) {
 *     case 'ArrowLeft':
 *       // 이전 탭으로 이동
 *       break
 *     case 'ArrowRight':
 *       // 다음 탭으로 이동
 *       break
 *     case 'Home':
 *       // 첫 번째 탭으로 이동
 *       break
 *     case 'End':
 *       // 마지막 탭으로 이동
 *       break
 *   }
 * }
 * </script>
 * ```
 * 
 * ### 스크린 리더 지원
 * ```vue
 * <template>
 *   <Tab 
 *     :tabs="tabs"
 *     role="tablist"
 *     aria-label="사용자 정보 탭"
 *   />
 * </template>
 * 
 * <script setup>
 * const tabs = [
 *   { 
 *     title: '기본 정보',
 *     content: '사용자 기본 정보',
 *     'aria-describedby': 'basic-info',
 *     'aria-selected': 'true'
 *   },
 *   { 
 *     title: '보안 설정',
 *     content: '보안 관련 설정',
 *     'aria-describedby': 'security-settings',
 *     'aria-selected': 'false'
 *   }
 * ]
 * </script>
 * ```
 * 
 * ## 🔄 상태 관리 통합
 * 
 * ### Pinia와 함께 사용
 * ```vue
 * <template>
 *   <Tab :tabs="tabs" :default-tab="store.activeTab" />
 * </template>
 * 
 * <script setup>
 * import { useTabStore } from '@/stores/tab'
 * 
 * const store = useTabStore()
 * 
 * const tabs = [
 *   { title: '대시보드', content: '대시보드 내용' },
 *   { title: '설정', content: '설정 내용' }
 * ]
 * </script>
 * ```
 * 
 * ### Vue Router와 함께 사용
 * ```vue
 * <template>
 *   <Tab :tabs="tabs" :default-tab="currentTabIndex" />
 * </template>
 * 
 * <script setup>
 * import { computed } from 'vue'
 * import { useRoute, useRouter } from 'vue-router'
 * 
 * const route = useRoute()
 * const router = useRouter()
 * 
 * const tabs = [
 *   { title: '홈', route: '/home' },
 *   { title: '프로필', route: '/profile' },
 *   { title: '설정', route: '/settings' }
 * ]
 * 
 * const currentTabIndex = computed(() => {
 *   return tabs.findIndex(tab => tab.route === route.path)
 * })
 * 
 * const handleTabChange = (index) => {
 *   router.push(tabs[index].route)
 * }
 * </script>
 * ```
 * 
 * ## 🎨 탭 선택 가이드
 * 
 * ### 어떤 탭 개수를 선택할까요?
 * 
 * **📱 2-3개 탭 (모바일 친화적)**
 * - 모바일에서도 터치하기 좋은 크기입니다
 * - 핵심 정보만 선별해서 표시합니다
 * - 사용자가 쉽게 선택할 수 있습니다
 * - 예: "정보", "리뷰", "문의"
 * 
 * **💻 4-5개 탭 (데스크톱 최적화)**
 * - 데스크톱에서 충분한 공간을 활용합니다
 * - 세분화된 정보를 체계적으로 정리합니다
 * - 관련된 정보끼리 그룹화합니다
 * - 예: "상품정보", "리뷰", "배송정보", "교환/반품", "Q&A"
 * 
 * **⚠️ 6개 이상 (주의 필요)**
 * - 너무 많으면 복잡해 보일 수 있습니다
 * - 모바일에서는 스크롤이 필요할 수 있습니다
 * - 사용자가 원하는 탭을 찾기 어려울 수 있습니다
 * - 꼭 필요한 경우에만 사용하세요
 * 
 * ### 어떤 내용을 넣을까요?
 * 
 * **📦 상품 관련 탭**
 * - 상품의 다양한 정보를 분류해서 표시
 * - 사용자가 구매 결정에 필요한 정보를 제공
 * - 예: "상품정보", "리뷰", "배송정보", "교환/반품"
 * 
 * **👤 사용자 관련 탭**
 * - 사용자 계정의 다양한 기능
 * - 개인화된 정보와 설정을 제공
 * - 예: "기본정보", "주문내역", "찜목록", "설정"
 * 
 * **⚙️ 관리자 관련 탭**
 * - 관리자 페이지의 다양한 기능
 * - 시스템 관리와 모니터링을 위한 정보
 * - 예: "대시보드", "사용자관리", "상품관리", "통계"
 * 
 * ### 탭 순서는 어떻게 정할까요?
 * 
 * **🥇 첫 번째 탭 (가장 중요한 정보)**
 * - 사용자가 가장 먼저 봐야 할 정보를 배치합니다
 * - 페이지의 목적을 명확히 전달합니다
 * - 예: "상품정보", "대시보드", "기본정보"
 * 
 * **🥈 중간 탭들 (상세 정보)**
 * - 첫 번째 탭을 보완하는 상세 정보를 배치합니다
 * - 관련된 정보끼리 그룹화합니다
 * - 예: "리뷰", "주문내역", "사용자관리"
 * 
 * **🥉 마지막 탭 (부가 정보)**
 * - 추가적인 정보나 설정을 배치합니다
 * - 자주 사용하지 않는 기능을 배치합니다
 * - 예: "설정", "Q&A", "통계"
 * 
 * ### 기본 탭은 어떻게 설정할까요?
 * 
 * **📌 첫 번째 탭 (defaultTab: 0)**
 * - 가장 중요한 정보를 기본으로 보여줍니다
 * - 사용자가 페이지에 들어오자마자 핵심 정보를 볼 수 있습니다
 * - 대부분의 경우에 권장되는 설정입니다
 * 
 * **📌 특정 탭 (defaultTab: 1, 2)**
 * - 사용자의 이전 행동이나 선호도를 반영합니다
 * - 특정 상황에 맞는 정보를 우선적으로 보여줍니다
 * - 예: 로그인 후 "주문내역" 탭을 기본으로 설정
 * 
 * ## ⚙️ 설정 옵션 (Props)
 * 
 * | 옵션 | 선택지 | 기본값 | 설명 |
 * |------|--------|--------|------|
 * | `tabs` | `Array` | `[]` | 탭 데이터 배열 (필수) |
 * | `defaultTab` | `Number` | `0` | 처음에 보여줄 탭 번호 (0부터 시작) |
 * 
 * ## 💡 실전 팁
 * 
 * 1. **탭 제목은 짧고 명확하게** 작성하세요 (예: "정보" vs "상품 기본 정보")
 * 2. **탭은 2-5개 정도**가 적당해요 (너무 많으면 복잡해 보여요)
 * 3. **첫 번째 탭에는 가장 중요한 정보**를 넣으세요
 * 4. **모바일에서는 탭 크기**를 충분히 크게 만드세요
 * 5. **탭 내용은 관련된 정보끼리** 그룹화하세요
 * 6. **탭 제목은 일관된 스타일**로 작성하세요
 * 7. **탭 변경 시 로딩 상태**를 표시하세요
 */

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Tab 컴포넌트 📑

**콘텐츠를 여러 섹션으로 나누어** 표시하는 컴포넌트예요!

## 🎯 이 컴포넌트로 할 수 있는 것들

- ✅ **여러 탭 만들기** (배열로 쉽게 생성)
- ✅ **기본 선택 탭** (처음에 보여줄 탭 설정)
- ✅ **자유로운 내용 구성** (텍스트, 이미지, 폼, 컴포넌트 등)
- ✅ **키보드 접근성** (Tab키와 화살표키로 이동)
- ✅ **반응형 디자인** (모바일에서도 잘 작동)
- ✅ **부드러운 전환 효과** (탭 변경 시 자연스러운 애니메이션)

## 💡 언제 사용하나요?

**상품 상세 페이지** 만들 때 (예: 상품정보, 리뷰, Q&A)
**사용자 프로필** 만들 때 (예: 기본정보, 활동내역, 설정)
**관리자 대시보드** 만들 때 (예: 통계, 사용자관리, 설정)
**긴 내용을 정리**하고 싶을 때 (예: 도움말, 가이드, 매뉴얼)

## 🚀 간단한 사용법

\`\`\`vue
<template>
  <!-- 기본 탭 -->
  <Tab :tabs="tabData" />
  
  <!-- 두 번째 탭이 기본으로 선택됨 -->
  <Tab :tabs="tabData" :default-tab="1" />
</template>

<script setup>
import Tab from '@/components/Tab.vue'

const tabData = [
  { title: '상품정보', content: '상품의 상세한 정보를 확인하세요.' },
  { title: '리뷰', content: '다른 고객들의 리뷰를 확인하세요.' },
  { title: 'Q&A', content: '자주 묻는 질문과 답변을 확인하세요.' }
]
</script>
\`\`\`

## 🎨 탭 선택 가이드

### 몇 개의 탭을 만들까요?

**📱 모바일에서는 2-3개**
- 화면이 작아서 너무 많은 탭은 불편합니다
- 가장 중요한 정보만 탭으로 나누세요
- 예: "상품정보", "리뷰", "Q&A"

**💻 데스크톱에서는 3-5개**
- 화면이 넓어서 더 많은 탭을 사용할 수 있습니다
- 세부적인 분류가 가능합니다
- 예: "기본정보", "상세스펙", "리뷰", "Q&A", "배송정보"

### 어떤 내용을 넣을까요?

**📋 정보 분류**
- 관련된 정보끼리 그룹화하세요
- 사용자가 찾기 쉬운 순서로 배치하세요
- 예: "개요", "상세정보", "사용법", "주의사항"

**🎯 사용자 플로우**
- 사용자가 순서대로 확인할 수 있도록 구성하세요
- 중요한 정보를 앞쪽 탭에 배치하세요
- 예: "기본정보", "추가설정", "고급옵션"

**📊 데이터 타입별**
- 텍스트, 이미지, 표 등 데이터 타입별로 분류하세요
- 각 탭의 내용이 일관성을 가지도록 하세요
- 예: "텍스트 정보", "이미지 갤러리", "데이터 표"

### 탭 순서는 어떻게 정할까요?

**📌 중요도 순서**
- 가장 중요한 정보를 첫 번째 탭에 배치하세요
- 사용자가 가장 먼저 확인해야 할 내용을 우선순위로 정하세요
- 예: "주요 정보", "상세 정보", "추가 정보"

**📌 사용 빈도 순서**
- 자주 사용되는 기능을 앞쪽 탭에 배치하세요
- 사용자 행동 패턴을 분석해서 순서를 결정하세요
- 예: "자주 보는 정보", "가끔 확인하는 정보", "참고 정보"

**📌 논리적 순서**
- 정보의 논리적 흐름에 따라 순서를 정하세요
- 단계별로 정보를 제공하세요
- 예: "개요", "상세", "예시", "주의사항"

### 기본 선택 탭은 어떻게 설정할까요?

**🎯 첫 번째 탭 (defaultTab: 0)**
- 가장 중요한 정보가 있는 탭을 기본으로 선택합니다
- 사용자가 페이지에 들어오자마자 핵심 정보를 볼 수 있습니다
- 예: "주요 정보", "상품 개요", "기본 설정"

**📊 사용 통계 기반**
- 사용자가 가장 많이 클릭하는 탭을 기본으로 설정합니다
- 분석 도구로 사용자 행동을 파악해서 결정하세요
- 예: "리뷰" 탭이 가장 많이 조회된다면 기본으로 설정

**🔄 컨텍스트 기반**
- 페이지의 목적에 따라 적절한 탭을 기본으로 설정합니다
- 예: 설정 페이지라면 "기본 설정" 탭을, 상품 페이지라면 "상품정보" 탭을

## ⚙️ 설정 옵션 (Props)

| 옵션 | 선택지 | 기본값 | 설명 |
|------|--------|--------|------|
| \`tabs\` | \`Array\` | \`[]\` | 탭 데이터 배열 (필수) |
| \`defaultTab\` | \`Number\` | \`0\` | 처음에 선택될 탭 번호 |

## 💡 실전 팁

1. **탭 제목은 간결하고 명확하게** 작성하세요 (예: "상품정보", "리뷰")
2. **탭 개수는 2-5개**가 적당합니다 (너무 많으면 복잡해 보여요)
3. **모바일에서는 탭 크기**를 충분히 크게 만드세요 (터치하기 쉽게)
4. **탭 내용은 일관된 구조**로 작성하세요
5. **중요한 정보는 첫 번째 탭**에 넣으세요
6. **탭 간 전환이 자연스럽게** 되도록 내용을 구성하세요
7. **탭 제목은 사용자가 이해하기 쉽게** 작성하세요
8. **탭 내용이 너무 길지 않도록** 적절히 분할하세요
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: { type: 'object' },
      description: '탭에 표시할 데이터들의 배열입니다. 각 탭은 제목(title)과 내용(content)을 포함합니다. 상품 정보, 사용자 프로필, 관리자 대시보드 등을 구성할 때 사용합니다.',
      table: {
        type: { summary: 'TabItem[]' },
        defaultValue: { summary: '[]' }
      }
    },
    defaultTab: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
      description: '페이지 로드 시 기본적으로 선택될 탭의 인덱스입니다. 0부터 시작하며, 가장 중요한 정보가 있는 탭을 기본으로 설정하는 것이 좋습니다. 사용자 경험을 위해 첫 번째 탭(0)을 기본값으로 권장합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },

  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { title: '첫 번째 탭', content: '첫 번째 탭의 내용입니다.' },
      { title: '두 번째 탭', content: '두 번째 탭의 내용입니다.' },
      { title: '세 번째 탭', content: '세 번째 탭의 내용입니다.' }
    ],
    defaultTab: 0
  }
};

/**
 * 슬롯을 사용하여 복잡한 콘텐츠를 표시하는 탭입니다.
 * 사용자 정보, 설정, 통계 등 다양한 형태의 콘텐츠를 포함합니다.
 */
export const WithCustomContent: Story = {
  args: {
    tabs: [
      { title: '정보' },
      { title: '설정' },
      { title: '통계' }
    ],
    defaultTab: 0
  },
  render: (args) => ({
    components: { Tab },
    setup() {
      return { args };
    },
    template: `
      <Tab v-bind="args">
        <template #tab-0>
          <div class="space-y-3">
            <h3 class="text-lg font-semibold">사용자 정보</h3>
            <p>사용자의 기본 정보를 확인할 수 있습니다.</p>
            <div class="bg-gray-100 p-3 rounded">
              <p><strong>이름:</strong> 홍길동</p>
              <p><strong>이메일:</strong> hong@example.com</p>
              <p><strong>가입일:</strong> 2024-01-15</p>
            </div>
          </div>
        </template>
        <template #tab-1>
          <div class="space-y-3">
            <h3 class="text-lg font-semibold">설정</h3>
            <p>계정 설정을 변경할 수 있습니다.</p>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="checkbox" class="mr-2"> 이메일 알림 받기
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-2"> 푸시 알림 받기
              </label>
            </div>
          </div>
        </template>
        <template #tab-2>
          <div class="space-y-3">
            <h3 class="text-lg font-semibold">통계</h3>
            <p>사용 활동 통계를 확인할 수 있습니다.</p>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div class="bg-blue-100 p-3 rounded">
                <div class="text-2xl font-bold text-blue-600">150</div>
                <div class="text-sm text-gray-600">총 방문</div>
              </div>
              <div class="bg-green-100 p-3 rounded">
                <div class="text-2xl font-bold text-green-600">45</div>
                <div class="text-sm text-gray-600">이번 주</div>
              </div>
              <div class="bg-purple-100 p-3 rounded">
                <div class="text-2xl font-bold text-purple-600">12</div>
                <div class="text-sm text-gray-600">오늘</div>
              </div>
            </div>
          </div>
        </template>
      </Tab>
    `
  })
};

/**
 * 두 번째 탭이 기본으로 선택된 탭입니다.
 * defaultTab prop을 사용하여 초기 선택 탭을 설정할 수 있습니다.
 */
export const WithSecondTabDefault: Story = {
  args: {
    tabs: [
      { title: '홈', content: '홈 페이지 내용' },
      { title: '프로필', content: '프로필 페이지 내용' },
      { title: '설정', content: '설정 페이지 내용' }
    ],
    defaultTab: 1
  }
}; 