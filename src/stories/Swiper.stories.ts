import type { Meta, StoryObj } from '@storybook/vue3';
import Swiper from '../components/Swiper.vue';

/**
 * # Swiper 컴포넌트 🎠
 * 
 * **이미지나 내용을 슬라이드로 보여주는** 컴포넌트예요!
 * 
 * ## 🎯 이 컴포넌트로 할 수 있는 것들
 * 
 * - ✅ **이미지 슬라이더** 만들기 (여러 이미지를 순서대로 보여주기)
 * - ✅ **자동 재생** (일정 시간마다 자동으로 다음 슬라이드로 이동)
 * - ✅ **수동 조작** (화살표 버튼이나 점으로 원하는 슬라이드로 이동)
 * - ✅ **무한 루프** (마지막 슬라이드에서 다시 처음으로 돌아가기)
 * - ✅ **터치/드래그** 지원 (모바일에서 손가락으로 슬라이드)
 * - ✅ **반응형 디자인** (화면 크기에 따라 자동 조절)
 * 
 * ## 💡 언제 사용하나요?
 * 
 * **메인 배너** 만들 때 (예: 홈페이지 상단 광고, 이벤트 안내)
 * **상품 이미지** 보여줄 때 (예: 상품 상세페이지의 여러 각도 사진)
 * **포트폴리오** 만들 때 (예: 작업물 갤러리, 프로젝트 소개)
 * **테스트imonials** 보여줄 때 (예: 고객 후기, 추천사)
 * 
 * ## 🚀 간단한 사용법
 * 
 * ```vue
 * <template>
 *   <!-- 기본 슬라이더 -->
 *   <Swiper :slides="slides" />
 *   
 *   <!-- 자동 재생 슬라이더 -->
 *   <Swiper :slides="slides" :autoplay="true" :autoplay-speed="4000" />
 *   
 *   <!-- 무한 루프 슬라이더 -->
 *   <Swiper :slides="slides" :loop="true" />
 * </template>
 * 
 * <script setup>
 * import Swiper from '@/components/Swiper.vue'
 * 
 * const slides = [
 *   { 
 *     image: '/images/banner1.jpg', 
 *     title: '첫 번째 슬라이드',
 *     description: '멋진 배너 이미지입니다.' 
 *   },
 *   { 
 *     image: '/images/banner2.jpg', 
 *     title: '두 번째 슬라이드',
 *     description: '또 다른 배너 이미지입니다.' 
 *   }
 * ]
 * </script>
 * ```
 * 
 * ## 🎨 슬라이더 구성 가이드
 * 
 * ### 슬라이드 데이터 구조
 * ```javascript
 * const slides = [
 *   {
 *     image: '이미지 경로',     // 슬라이드에 표시될 이미지
 *     title: '제목',           // 슬라이드 제목 (선택사항)
 *     description: '설명'      // 슬라이드 설명 (선택사항)
 *   }
 * ]
 * ```
 * 
 * ### 어떤 내용을 넣을까요?
 * 
 * **🖼️ 메인 배너**
 * - 홈페이지 상단의 주요 광고나 이벤트
 * - 예: 신상품 출시, 특가 할인, 무료 배송 안내
 * 
 * **📸 상품 이미지**
 * - 상품의 여러 각도나 상세 사진
 * - 예: 메인 이미지, 상세 이미지, 사용 예시
 * 
 * **🎨 포트폴리오**
 * - 작업물이나 프로젝트 소개
 * - 예: 디자인 작업, 개발 프로젝트, 사진 작품
 * 
 * **💬 고객 후기**
 * - 사용자들의 리뷰나 추천사
 * - 예: 제품 후기, 서비스 만족도, 추천사
 * 
 * ### 자동 재생 vs 수동 조작
 * 
 * **🔄 자동 재생**
 * - 일정 시간마다 자동으로 다음 슬라이드로 이동
 * - 배너나 광고에 적합 (3-5초 간격 권장)
 * 
 * **👆 수동 조작**
 * - 사용자가 직접 화살표나 점을 클릭해서 이동
 * - 상품 이미지나 포트폴리오에 적합
 * 
 * ## ⚙️ 설정 옵션 (Props)
 * 
 * | 옵션 | 선택지 | 기본값 | 설명 |
 * |------|--------|--------|------|
 * | `slides` | `Array` | `[]` | 슬라이드 데이터 배열 (필수) |
 * | `autoplay` | `true`, `false` | `false` | 자동 재생 여부 |
 * | `autoplaySpeed` | `Number` | `3000` | 자동 재생 간격 (밀리초) |
 * | `showNavigation` | `true`, `false` | `true` | 화살표 버튼 표시 여부 |
 * | `showPagination` | `true`, `false` | `true` | 하단 점 표시 여부 |
 * | `loop` | `true`, `false` | `false` | 무한 루프 여부 |
 * | `height` | `String` | `'400px'` | 슬라이더 높이 |
 * 
 * ## 💡 실전 팁
 * 
 * 1. **슬라이드는 3-5개 정도**가 적당해요 (너무 많으면 지루해 보여요)
 * 2. **자동 재생은 3-5초 간격**이 좋아요 (너무 빠르면 읽기 어려워요)
 * 3. **모바일에서는 터치**로 조작할 수 있어요
 * 4. **이미지는 같은 비율**로 준비하세요
 * 5. **중요한 정보는 첫 번째 슬라이드**에 넣으세요
 * 
 * ## 🚀 간단한 사용법
 * 
 * ```vue
 * <template>
 *   <!-- 기본 슬라이더 -->
 *   <Swiper :slides="slides" />
 * </template>
 * 
 * <script setup>
 * import Swiper from '@/components/Swiper.vue'
 * 
 * const slides = [
 *   { 
 *     image: '/images/banner1.jpg', 
 *     title: '첫 번째 슬라이드',
 *     description: '멋진 배너 이미지입니다.' 
 *   },
 *   { 
 *     image: '/images/banner2.jpg', 
 *     title: '두 번째 슬라이드',
 *     description: '또 다른 배너 이미지입니다.' 
 *   }
 * ]
 * </script>
 * ```
 * 
 * ## 🎨 슬라이드 구성 가이드
 * 
 * ### 슬라이드 데이터 구조
 * ```javascript
 * const slides = [
 *   {
 *     image: '이미지 경로',     // 슬라이드에 표시될 이미지
 *     title: '제목',           // 슬라이드 제목 (선택사항)
 *     description: '설명'      // 슬라이드 설명 (선택사항)
 *   }
 * ]
 * ```
 * 
 * ### 이미지 준비 팁
 * - **같은 크기**로 준비하세요 (예: 1200x400px)
 * - **최적화된 파일**을 사용하세요 (JPG, WebP 등)
 * - **모바일 고려**해서 너무 크지 않게 하세요
 * 
 * ## ⚙️ 설정 옵션 (Props)
 * 
 * | 옵션 | 타입 | 기본값 | 설명 |
 * |------|------|--------|------|
 * | `slides` | `Array` | `[]` | 슬라이드 데이터 배열 (필수) |
 * | `autoplay` | `Boolean` | `false` | 자동 재생 여부 |
 * | `autoplaySpeed` | `Number` | `3000` | 자동 재생 간격 (밀리초) |
 * | `showNavigation` | `Boolean` | `true` | 화살표 버튼 표시 여부 |
 * | `showPagination` | `Boolean` | `true` | 하단 점 표시 여부 |
 * | `loop` | `Boolean` | `false` | 무한 루프 여부 |
 * | `height` | `String` | `'400px'` | 슬라이더 높이 |
 * 
 * ## 💡 실전 팁
 * 
 * 1. **슬라이드는 3-5개 정도**가 적당해요 (너무 많으면 지루해 보여요)
 * 2. **자동 재생은 3-5초 간격**이 좋아요 (너무 빠르면 읽기 어려워요)
 * 3. **모바일에서는 터치**로 조작할 수 있어요
 * 4. **이미지는 같은 비율**로 준비하세요
 * 5. **중요한 정보는 첫 번째 슬라이드**에 넣으세요
 * 
 * ## 🔧 고급 사용법
 * 
 * ### 자동 재생 슬라이더
 * ```vue
 * <template>
 *   <Swiper 
 *     :slides="slides" 
 *     :autoplay="true"
 *     :autoplay-speed="4000"
 *     :loop="true"
 *   />
 * </template>
 * 
 * ## 🎯 실전 예제
 * 
 * ### 메인 배너 슬라이더
 * ```vue
 * <template>
 *   <div class="relative">
 *     <Swiper 
 *       :slides="bannerSlides" 
 *       :autoplay="true"
 *       :autoplay-speed="5000"
 *       :loop="true"
 *       :show-navigation="true"
 *       :show-pagination="true"
 *       height="500px"
 *       @slide-change="handleBannerChange"
 *     />
 *   </div>
 * </template>
 * 
 * <script setup>
 * const bannerSlides = [
 *   {
 *     image: '/images/banner1.jpg',
 *     title: '신상품 출시',
 *     description: '새로운 컬렉션을 만나보세요'
 *   },
 *   {
 *     image: '/images/banner2.jpg',
 *     title: '특가 할인',
 *     description: '최대 50% 할인 행사'
 *   },
 *   {
 *     image: '/images/banner3.jpg',
 *     title: '무료 배송',
 *     description: '5만원 이상 구매 시 무료 배송'
 *   }
 * ]
 * 
 * const handleBannerChange = (index) => {
 *   console.log('배너 변경:', index)
 * }
 * </script>
 * ```
 * 
 * ### 상품 이미지 갤러리
 * ```vue
 * <template>
 *   <div class="max-w-2xl mx-auto">
 *     <Swiper 
 *       :slides="productImages" 
 *       :autoplay="false"
 *       :show-navigation="true"
 *       :show-pagination="true"
 *       height="400px"
 *       @slide-change="handleImageChange"
 *     />
 *     <div class="mt-4 text-center">
 *       <p class="text-sm text-gray-600">
 *         {{ currentImage + 1 }} / {{ productImages.length }}
 *       </p>
 *     </div>
 *   </div>
 * </template>
 * 
 * <script setup>
 * import { ref } from 'vue'
 * 
 * const currentImage = ref(0)
 * 
 * const productImages = [
 *   {
 *     image: '/products/product1-main.jpg',
 *     title: '상품 메인 이미지'
 *   },
 *   {
 *     image: '/products/product1-detail1.jpg',
 *     title: '상품 상세 이미지 1'
 *   },
 *   {
 *     image: '/products/product1-detail2.jpg',
 *     title: '상품 상세 이미지 2'
 *   }
 * ]
 * 
 * const handleImageChange = (index) => {
 *   currentImage.value = index
 * }
 * </script>
 * ```
 * 
 * <script setup>
 * const slides = [
 *   { image: '/banner1.jpg', title: '특별 할인!' },
 *   { image: '/banner2.jpg', title: '신상품 출시' },
 *   { image: '/banner3.jpg', title: '무료 배송' }
 * ]
 * </script>
 * ```
 * 
 * ### 커스텀 슬라이드 내용
 * ```vue
 * <template>
 *   <Swiper :slides="slides">
 *     <template #default="{ slide, index }">
 *       <div class="custom-slide">
 *         <img :src="slide.image" :alt="slide.title" />
 *         <div class="slide-content">
 *           <h2>{{ slide.title }}</h2>
 *           <p>{{ slide.description }}</p>
 *           <button @click="handleClick(slide)">자세히 보기</button>
 *         </div>
 *       </div>
 *     </template>
 *   </Swiper>
 * </template>
 * ```
 * 
 * ### 슬라이드 변경 이벤트 처리
 * ```vue
 * <template>
 *   <Swiper 
 *     :slides="slides" 
 *     @slide-change="handleSlideChange"
 *   />
 *   <p>현재 슬라이드: {{ currentSlide + 1 }} / {{ slides.length }}</p>
 * </template>
 * 
 * <script setup>
 * import { ref } from 'vue'
 * 
 * const currentSlide = ref(0)
 * 
 * const handleSlideChange = (index) => {
 *   currentSlide.value = index
 *   console.log(`슬라이드 ${index + 1}로 변경되었습니다.`)
 * }
 * </script>
 * ```
 * 
 * ## 🎨 스타일링 가이드
 * 
 * ### 커스텀 스와이퍼 디자인
 * ```vue
 * <template>
 *   <Swiper :slides="slides" class="custom-swiper" />
 * </template>
 * 
 * <style scoped>
 * .custom-swiper {
 *   border-radius: 16px;
 *   overflow: hidden;
 *   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
 * }
 * 
 * .custom-swiper :deep(.swiper-container) {
 *   position: relative;
 * }
 * 
 * .custom-swiper :deep(.swiper-slide) {
 *   position: relative;
 *   overflow: hidden;
 * }
 * 
 * .custom-swiper :deep(.swiper-slide img) {
 *   width: 100%;
 *   height: 100%;
 *   object-fit: cover;
 *   transition: transform 0.3s ease;
 * }
 * 
 * .custom-swiper :deep(.swiper-slide:hover img) {
 *   transform: scale(1.05);
 * }
 * 
 * .custom-swiper :deep(.swiper-button) {
 *   background: rgba(255, 255, 255, 0.9);
 *   border-radius: 50%;
 *   width: 48px;
 *   height: 48px;
 *   display: flex;
 *   align-items: center;
 *   justify-content: center;
 *   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
 *   transition: all 0.3s ease;
 * }
 * 
 * .custom-swiper :deep(.swiper-button:hover) {
 *   background: white;
 *   transform: scale(1.1);
 * }
 * 
 * .custom-swiper :deep(.swiper-pagination) {
 *   bottom: 20px;
 * }
 * 
 * .custom-swiper :deep(.swiper-pagination-dot) {
 *   background: rgba(255, 255, 255, 0.5);
 *   border-radius: 50%;
 *   width: 12px;
 *   height: 12px;
 *   margin: 0 4px;
 *   transition: all 0.3s ease;
 * }
 * 
 * .custom-swiper :deep(.swiper-pagination-dot.active) {
 *   background: white;
 *   transform: scale(1.2);
 * }
 * </style>
 * ```
 * 
 * ## 🔧 고급 기능
 * 
 * ### 스와이퍼 상태 관리
 * ```vue
 * <template>
 *   <div>
 *     <Swiper 
 *       :slides="slides" 
 *       :autoplay="autoplayEnabled"
 *       @slide-change="handleSlideChange"
 *     />
 *     <div class="mt-4 space-x-2">
 *       <button @click="toggleAutoplay">
 *         {{ autoplayEnabled ? '자동재생 중지' : '자동재생 시작' }}
 *       </button>
 *       <button @click="goToSlide(0)">첫 번째</button>
 *       <button @click="goToSlide(2)">세 번째</button>
 *     </div>
 *     <p>현재 슬라이드: {{ currentSlide + 1 }} / {{ slides.length }}</p>
 *   </div>
 * </template>
 * 
 * <script setup>
 * import { ref } from 'vue'
 * 
 * const currentSlide = ref(0)
 * const autoplayEnabled = ref(true)
 * 
 * const handleSlideChange = (index) => {
 *   currentSlide.value = index
 * }
 * 
 * const toggleAutoplay = () => {
 *   autoplayEnabled.value = !autoplayEnabled.value
 * }
 * 
 * const goToSlide = (index) => {
 *   // 스와이퍼의 goToSlide 메서드 호출
 *   currentSlide.value = index
 * }
 * </script>
 * ```
 * 
 * ### 동적 슬라이드 생성
 * ```vue
 * <template>
 *   <div>
 *     <Swiper :slides="dynamicSlides" />
 *     <div class="mt-4 space-x-2">
 *       <button @click="addSlide">슬라이드 추가</button>
 *       <button @click="removeSlide">슬라이드 제거</button>
 *     </div>
 *   </div>
 * </template>
 * 
 * <script setup>
 * import { ref } from 'vue'
 * 
 * const dynamicSlides = ref([
 *   { id: 1, image: '/slide1.jpg', title: '슬라이드 1' },
 *   { id: 2, image: '/slide2.jpg', title: '슬라이드 2' }
 * ])
 * 
 * const addSlide = () => {
 *   const newId = Math.max(...dynamicSlides.value.map(s => s.id)) + 1
 *   dynamicSlides.value.push({
 *     id: newId,
 *     image: `https://picsum.photos/800/400?random=${newId}`,
 *     title: `슬라이드 ${newId}`
 *   })
 * }
 * 
 * const removeSlide = () => {
 *   if (dynamicSlides.value.length > 1) {
 *     dynamicSlides.value.pop()
 *   }
 * }
 * </script>
 * ```
 * 
 * ### 조건부 슬라이드 표시
 * ```vue
 * <template>
 *   <Swiper :slides="visibleSlides" />
 *   <div class="mt-4">
 *     <label>
 *       <input type="checkbox" v-model="showPremiumSlides" />
 *       프리미엄 슬라이드 표시
 *     </label>
 *   </div>
 * </template>
 * 
 * <script setup>
 * import { ref, computed } from 'vue'
 * 
 * const showPremiumSlides = ref(false)
 * 
 * const allSlides = [
 *   { id: 1, image: '/basic1.jpg', title: '기본 슬라이드 1' },
 *   { id: 2, image: '/basic2.jpg', title: '기본 슬라이드 2' },
 *   { id: 3, image: '/premium1.jpg', title: '프리미엄 슬라이드 1', premium: true },
 *   { id: 4, image: '/premium2.jpg', title: '프리미엄 슬라이드 2', premium: true }
 * ]
 * 
 * const visibleSlides = computed(() => {
 *   return allSlides.filter(slide => !slide.premium || showPremiumSlides.value)
 * })
 * </script>
 * ```
 * 
 * ## 🚀 성능 최적화
 * 
 * ### 이미지 지연 로딩
 * ```vue
 * <template>
 *   <Swiper :slides="slides">
 *     <template #default="{ slide, index }">
 *       <div class="slide-container">
 *         <img 
 *           v-if="loadedSlides[index]"
 *           :src="slide.image" 
 *           :alt="slide.title"
 *           class="slide-image"
 *         />
 *         <div v-else class="loading-placeholder">
 *           <div class="loading-spinner"></div>
 *         </div>
 *       </div>
 *     </template>
 *   </Swiper>
 * </template>
 * 
 * <script setup>
 * import { ref, onMounted } from 'vue'
 * 
 * const loadedSlides = ref({})
 * 
 * const preloadImage = (src, index) => {
 *   const img = new Image()
 *   img.onload = () => {
 *     loadedSlides.value[index] = true
 *   }
 *   img.src = src
 * }
 * 
 * onMounted(() => {
 *   // 첫 번째 슬라이드만 즉시 로드
 *   preloadImage(slides[0].image, 0)
 * })
 * 
 * const handleSlideChange = (index) => {
 *   // 현재 슬라이드와 다음 슬라이드 미리 로드
 *   if (!loadedSlides.value[index]) {
 *     preloadImage(slides[index].image, index)
 *   }
 *   if (index + 1 < slides.length && !loadedSlides.value[index + 1]) {
 *     preloadImage(slides[index + 1].image, index + 1)
 *   }
 * }
 * </script>
 * 
 * <style scoped>
 * .loading-placeholder {
 *   display: flex;
 *   align-items: center;
 *   justify-content: center;
 *   height: 100%;
 *   background: #f3f4f6;
 * }
 * 
 * .loading-spinner {
 *   width: 40px;
 *   height: 40px;
 *   border: 4px solid #e5e7eb;
 *   border-top: 4px solid #3b82f6;
 *   border-radius: 50%;
 *   animation: spin 1s linear infinite;
 * }
 * 
 * @keyframes spin {
 *   0% { transform: rotate(0deg); }
 *   100% { transform: rotate(360deg); }
 * }
 * </style>
 * ```
 * 
 * ### 가상화된 슬라이드
 * ```vue
 * <template>
 *   <Swiper :slides="virtualSlides" />
 * </template>
 * 
 * <script setup>
 * import { ref, computed } from 'vue'
 * 
 * const currentIndex = ref(0)
 * const bufferSize = 2 // 앞뒤로 2개씩 버퍼
 * 
 * const allSlides = Array.from({ length: 1000 }, (_, i) => ({
 *   id: i,
 *   image: `https://picsum.photos/800/400?random=${i}`,
 *   title: `슬라이드 ${i + 1}`
 * }))
 * 
 * const virtualSlides = computed(() => {
 *   const start = Math.max(0, currentIndex.value - bufferSize)
 *   const end = Math.min(allSlides.length, currentIndex.value + bufferSize + 1)
 *   return allSlides.slice(start, end)
 * })
 * 
 * const handleSlideChange = (index) => {
 *   currentIndex.value = index
 * }
 * </script>
 * ```
 * 
 * ## 🎯 접근성 (Accessibility)
 * 
 * ### 키보드 네비게이션
 * ```vue
 * <template>
 *   <Swiper 
 *     :slides="slides"
 *     @keydown="handleKeydown"
 *     role="region"
 *     aria-label="이미지 슬라이더"
 *   />
 * </template>
 * 
 * <script setup>
 * const handleKeydown = (event) => {
 *   switch(event.key) {
 *     case 'ArrowLeft':
 *       // 이전 슬라이드로 이동
 *       break
 *     case 'ArrowRight':
 *       // 다음 슬라이드로 이동
 *       break
 *     case 'Home':
 *       // 첫 번째 슬라이드로 이동
 *       break
 *     case 'End':
 *       // 마지막 슬라이드로 이동
 *       break
 *     case ' ':
 *       // 자동재생 토글
 *       event.preventDefault()
 *       break
 *   }
 * }
 * </script>
 * ```
 * 
 * ### 스크린 리더 지원
 * ```vue
 * <template>
 *   <Swiper 
 *     :slides="slides"
 *     role="region"
 *     aria-label="상품 이미지 갤러리"
 *     aria-live="polite"
 *   />
 * </template>
 * 
 * <script setup>
 * const slides = [
 *   { 
 *     image: '/product1.jpg',
 *     title: '상품 메인 이미지',
 *     'aria-describedby': 'product-main-desc'
 *   },
 *   { 
 *     image: '/product1-detail.jpg',
 *     title: '상품 상세 이미지',
 *     'aria-describedby': 'product-detail-desc'
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
 *   <Swiper :slides="store.bannerSlides" />
 * </template>
 * 
 * <script setup>
 * import { useBannerStore } from '@/stores/banner'
 * 
 * const store = useBannerStore()
 * 
 * // 스토어에서 배너 데이터 가져오기
 * store.fetchBanners()
 * </script>
 * ```
 * 
 * ### Vue Router와 함께 사용
 * ```vue
 * <template>
 *   <Swiper :slides="slides" @slide-click="handleSlideClick" />
 * </template>
 * 
 * <script setup>
 * import { useRouter } from 'vue-router'
 * 
 * const router = useRouter()
 * 
 * const slides = [
 *   { 
 *     image: '/banner1.jpg',
 *     title: '홈페이지로 이동',
 *     route: '/home'
 *   },
 *   { 
 *     image: '/banner2.jpg',
 *     title: '상품 페이지로 이동',
 *     route: '/products'
 *   }
 * ]
 * 
 * const handleSlideClick = (slide) => {
 *   if (slide.route) {
 *     router.push(slide.route)
 *   }
 * }
 * </script>
 * ```
 * 
 * ## 📱 반응형 디자인
 * 
 * ### 모바일 최적화
 * ```vue
 * <template>
 *   <Swiper 
 *     :slides="slides"
 *     :height="mobileHeight"
 *     :show-navigation="!isMobile"
 *     :autoplay-speed="mobileAutoplaySpeed"
 *   />
 * </template>
 * 
 * <script setup>
 * import { ref, computed, onMounted } from 'vue'
 * 
 * const isMobile = ref(false)
 * 
 * const mobileHeight = computed(() => 
 *   isMobile.value ? '250px' : '400px'
 * )
 * 
 * const mobileAutoplaySpeed = computed(() => 
 *   isMobile.value ? 5000 : 3000
 * )
 * 
 * onMounted(() => {
 *   const checkMobile = () => {
 *     isMobile.value = window.innerWidth < 768
 *   }
 *   
 *   checkMobile()
 *   window.addEventListener('resize', checkMobile)
 * })
 * </script>
 * ```
 * 
 * ### 터치 제스처 최적화
 * ```vue
 * <template>
 *   <Swiper 
 *     :slides="slides"
 *     :touch-ratio="1.5"
 *     :touch-angle="45"
 *     :resistance="true"
 *     :resistance-ratio="0.85"
 *   />
 * </template>
 * 
 * <script setup>
 * // 터치 제스처 설정
 * // touch-ratio: 터치 감도 (기본값: 1)
 * // touch-angle: 터치 각도 (기본값: 45도)
 * // resistance: 저항 효과 (기본값: true)
 * // resistance-ratio: 저항 비율 (기본값: 0.85)
 * </script>
 * ```
 * 
 * ## 🎨 스와이퍼 선택 가이드
 * 
 * ### 어떤 재생 모드를 선택할까요?
 * 
 * **🔄 자동 재생 (autoplay: true)**
 * - 일정 간격으로 자동으로 다음 슬라이드로 이동합니다
 * - 배너나 광고에 적합합니다
 * - 사용자가 내용을 읽을 시간을 충분히 제공하세요
 * - 예: "메인 배너", "이벤트 안내", "신상품 소개"
 * 
 * **👆 수동 조작 (autoplay: false)**
 * - 사용자가 직접 화살표나 점을 클릭해서 이동합니다
 * - 상품 이미지나 포트폴리오에 적합합니다
 * - 사용자가 원하는 속도로 탐색할 수 있습니다
 * - 예: "상품 이미지 갤러리", "포트폴리오", "고객 후기"
 * 
 * ### 어떤 네비게이션을 선택할까요?
 * 
 * **🎯 화살표 + 점 (showNavigation: true, showPagination: true)**
 * - 가장 완전한 조작 방식을 제공합니다
 * - 사용자가 원하는 슬라이드로 쉽게 이동할 수 있습니다
 * - 슬라이드 개수가 많을 때 유용합니다
 * - 예: "상품 상세 이미지", "포트폴리오 갤러리"
 * 
 * **➡️ 화살표만 (showNavigation: true, showPagination: false)**
 * - 깔끔한 디자인을 유지하면서 기본 조작을 제공합니다
 * - 슬라이드 개수가 적을 때 적합합니다
 * - 예: "간단한 배너", "3-4개 이미지"
 * 
 * **🔘 점만 (showNavigation: false, showPagination: true)**
 * - 미니멀한 디자인을 선호할 때 사용합니다
 * - 특정 슬라이드로 직접 이동할 수 있습니다
 * - 예: "심플한 갤러리", "미니멀 디자인"
 * 
 * ### 어떤 높이를 선택할까요?
 * 
 * **📱 작은 높이 (200-300px)**
 * - 모바일에서 적합한 크기입니다
 * - 페이지 공간을 절약합니다
 * - 간단한 이미지나 아이콘에 적합합니다
 * - 예: "모바일 배너", "작은 갤러리"
 * 
 * **💻 보통 높이 (400-500px)**
 * - 데스크톱에서 가장 많이 사용되는 크기입니다
 * - 이미지의 세부사항을 잘 볼 수 있습니다
 * - 대부분의 용도에 적합합니다
 * - 예: "메인 배너", "상품 이미지"
 * 
 * **🖥️ 큰 높이 (600px 이상)**
 * - 임팩트 있는 시각적 효과를 원할 때 사용합니다
 * - 고해상도 이미지를 최대한 활용할 수 있습니다
 * - 특별한 이벤트나 프로모션에 적합합니다
 * - 예: "풀스크린 배너", "프리미엄 갤러리"
 * 
 * ### 어떤 내용을 넣을까요?
 * 
 * **🖼️ 메인 배너**
 * - 홈페이지 상단의 주요 광고나 이벤트
 * - 사용자의 관심을 끌 수 있는 시각적 콘텐츠
 * - 예: "신상품 출시", "특가 할인", "무료 배송 안내"
 * 
 * **📸 상품 이미지**
 * - 상품의 여러 각도나 상세 사진
 * - 구매 결정에 도움이 되는 정보
 * - 예: "메인 이미지", "상세 이미지", "사용 예시"
 * 
 * **🎨 포트폴리오**
 * - 작업물이나 프로젝트 소개
 * - 전문성과 창의성을 보여주는 콘텐츠
 * - 예: "디자인 작업", "개발 프로젝트", "사진 작품"
 * 
 * **💬 고객 후기**
 * - 사용자들의 리뷰나 추천사
 * - 신뢰도와 만족도를 높이는 콘텐츠
 * - 예: "제품 후기", "서비스 만족도", "추천사"
 * 
 * ### 자동 재생 간격은 어떻게 설정할까요?
 * 
 * **⚡ 빠른 간격 (2-3초)**
 * - 동적인 느낌을 원할 때 사용합니다
 * - 짧은 메시지나 간단한 이미지에 적합합니다
 * - 사용자가 내용을 빠르게 스캔할 수 있습니다
 * 
 * **⏱️ 보통 간격 (3-5초)**
 * - 가장 많이 사용되는 표준 간격입니다
 * - 사용자가 내용을 읽을 시간을 충분히 제공합니다
 * - 대부분의 배너에 권장되는 설정입니다
 * 
 * **🐌 느린 간격 (5-8초)**
 * - 자세한 내용이나 복잡한 이미지에 적합합니다
 * - 사용자가 충분히 내용을 이해할 시간을 제공합니다
 * - 중요한 정보를 전달할 때 사용합니다
 * 
 * ## ⚙️ 설정 옵션 (Props)
 * 
 * | 옵션 | 선택지 | 기본값 | 설명 |
 * |------|--------|--------|------|
 * | `slides` | `Array` | `[]` | 슬라이드 데이터 배열 (필수) |
 * | `autoplay` | `true`, `false` | `false` | 자동 재생 여부 |
 * | `autoplaySpeed` | `Number` | `3000` | 자동 재생 간격 (밀리초) |
 * | `showNavigation` | `true`, `false` | `true` | 화살표 버튼 표시 여부 |
 * | `showPagination` | `true`, `false` | `true` | 하단 점 표시 여부 |
 * | `loop` | `true`, `false` | `false` | 무한 루프 여부 |
 * | `height` | `String` | `'400px'` | 슬라이더 높이 |
 * 
 * ## 💡 실전 팁
 * 
 * 1. **슬라이드는 3-5개 정도**가 적당해요 (너무 많으면 지루해 보여요)
 * 2. **자동 재생은 3-5초 간격**이 좋아요 (너무 빠르면 읽기 어려워요)
 * 3. **모바일에서는 터치**로 조작할 수 있어요
 * 4. **이미지는 같은 비율**로 준비하세요
 * 5. **중요한 정보는 첫 번째 슬라이드**에 넣으세요
 * 6. **이미지 최적화**를 해서 로딩 속도를 개선하세요
 * 7. **반응형 디자인**을 고려해서 다양한 화면 크기에 대응하세요
 */
const meta = {
  title: 'Components/Swiper',
  component: Swiper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Swiper 컴포넌트 🎠

**이미지나 콘텐츠를 슬라이드로 보여주는** 컴포넌트예요!

## 🎯 이 컴포넌트로 할 수 있는 것들

- ✅ **여러 슬라이드 만들기** (배열로 쉽게 생성)
- ✅ **자동 재생** (일정 간격으로 자동 전환)
- ✅ **수동 조작** (터치, 드래그, 버튼 클릭)
- ✅ **네비게이션 버튼** (이전/다음 버튼)
- ✅ **페이지네이션** (하단 점으로 현재 위치 표시)
- ✅ **무한 루프** (마지막에서 첫 번째로 돌아가기)
- ✅ **반응형 디자인** (모바일에서도 잘 작동)

## 💡 언제 사용하나요?

**메인 배너** 만들 때 (예: 홈페이지 상단 광고, 프로모션)
**상품 이미지 갤러리** 만들 때 (예: 상품의 여러 각도 사진)
**포트폴리오** 만들 때 (예: 작업물, 프로젝트 소개)
**이미지 갤러리** 만들 때 (예: 갤러리, 사진첩)

## 🚀 간단한 사용법

\`\`\`vue
<template>
  <!-- 기본 스와이퍼 -->
  <Swiper :slides="slideData" />
  
  <!-- 자동 재생 스와이퍼 -->
  <Swiper :slides="slideData" :autoplay="true" :autoplay-speed="3000" />
  
  <!-- 네비게이션 없는 스와이퍼 -->
  <Swiper :slides="slideData" :show-navigation="false" />
</template>

<script setup>
import Swiper from '@/components/Swiper.vue'

const slideData = [
  { image: '/image1.jpg', title: '첫 번째 슬라이드', description: '첫 번째 슬라이드 설명' },
  { image: '/image2.jpg', title: '두 번째 슬라이드', description: '두 번째 슬라이드 설명' },
  { image: '/image3.jpg', title: '세 번째 슬라이드', description: '세 번째 슬라이드 설명' }
]
</script>
\`\`\`

## 🎨 스와이퍼 선택 가이드

### 자동 재생을 사용할까요?

**🎬 자동 재생 (autoplay: true)**
- 배너나 광고에 적합합니다
- 사용자의 주의를 끌 수 있습니다
- 3-5초 간격을 권장합니다
- 예: "메인 배너", "프로모션", "이벤트 광고"

**🎮 수동 조작 (autoplay: false)**
- 상품 이미지나 포트폴리오에 적합합니다
- 사용자가 원하는 속도로 확인할 수 있습니다
- 상세한 내용을 보여줄 때 좋습니다
- 예: "상품 갤러리", "포트폴리오", "이미지 갤러리"

### 네비게이션 옵션은 어떻게 설정할까요?

**🔘 네비게이션 버튼 (showNavigation: true)**
- 사용자가 쉽게 이전/다음 슬라이드로 이동할 수 있습니다
- 슬라이드가 많을 때 유용합니다
- 데스크톱에서 특히 유용합니다
- 예: "상품 갤러리", "포트폴리오", "이미지 갤러리"

**🔘 네비게이션 없음 (showNavigation: false)**
- 깔끔한 디자인을 원할 때 사용합니다
- 터치/드래그로만 조작합니다
- 모바일에서 자연스러운 경험을 제공합니다
- 예: "모바일 배너", "간단한 갤러리"

### 높이는 어떻게 설정할까요?

**📱 모바일 (height: "250px")**
- 작은 화면에 적합한 높이입니다
- 터치하기 쉽고 로딩이 빠릅니다
- 예: "모바일 배너", "모바일 갤러리"

**💻 데스크톱 (height: "400px")**
- 큰 화면에서 충분한 정보를 보여줍니다
- 이미지의 세부사항을 잘 볼 수 있습니다
- 예: "데스크톱 배너", "상품 갤러리"

**🖼️ 큰 이미지 (height: "500px")**
- 고해상도 이미지를 보여줄 때 사용합니다
- 포트폴리오나 갤러리에 적합합니다
- 예: "포트폴리오", "이미지 갤러리"

### 어떤 내용을 넣을까요?

**🖼️ 이미지 갤러리**
- 상품의 여러 각도 사진
- 포트폴리오 작업물
- 갤러리 사진들
- 예: "상품 이미지", "포트폴리오", "갤러리"

**📢 배너/광고**
- 프로모션 정보
- 이벤트 안내
- 주요 공지사항
- 예: "메인 배너", "프로모션", "이벤트"

**📋 콘텐츠 슬라이드**
- 단계별 가이드
- 기능 소개
- 사용법 안내
- 예: "사용법 가이드", "기능 소개", "튜토리얼"

### 자동 재생 속도는 어떻게 설정할까요?

**⚡ 빠른 속도 (2000-3000ms)**
- 짧은 메시지나 간단한 이미지에 적합합니다
- 사용자의 주의를 빠르게 끌 수 있습니다
- 예: "간단한 배너", "짧은 메시지"

**🐌 보통 속도 (3000-5000ms)**
- 대부분의 경우에 적합한 속도입니다
- 내용을 읽을 수 있는 충분한 시간을 제공합니다
- 예: "일반적인 배너", "상품 소개"

**🐌 느린 속도 (5000-8000ms)**
- 긴 텍스트나 복잡한 이미지에 적합합니다
- 사용자가 충분히 내용을 파악할 수 있습니다
- 예: "상세한 가이드", "복잡한 정보"

## ⚙️ 설정 옵션 (Props)

| 옵션 | 선택지 | 기본값 | 설명 |
|------|--------|--------|------|
| \`slides\` | \`Array\` | \`[]\` | 슬라이드 데이터 배열 (필수) |
| \`autoplay\` | \`true\`, \`false\` | \`false\` | 자동 재생 여부 |
| \`autoplaySpeed\` | \`Number\` | \`3000\` | 자동 재생 간격 (밀리초) |
| \`showNavigation\` | \`true\`, \`false\` | \`true\` | 네비게이션 버튼 표시 |
| \`showPagination\` | \`true\`, \`false\` | \`true\` | 페이지네이션 점 표시 |
| \`loop\` | \`true\`, \`false\` | \`false\` | 무한 루프 여부 |
| \`height\` | \`String\` | \`'400px'\` | 스와이퍼 높이 |

## 💡 실전 팁

1. **슬라이드 개수는 3-7개**가 적당합니다 (너무 많으면 복잡해 보여요)
2. **이미지는 최적화**해서 로딩 속도를 개선하세요
3. **자동 재생은 3-5초 간격**을 권장합니다
4. **모바일에서는 터치 영역**을 충분히 크게 만드세요
5. **중요한 정보는 첫 번째 슬라이드**에 넣으세요
6. **반응형 디자인**을 고려해서 다양한 화면 크기에 대응하세요
7. **접근성을 고려**해서 키보드 조작도 지원하세요
8. **성능을 위해 이미지 지연 로딩**을 사용하세요
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    slides: {
      control: { type: 'object' },
      description: '스와이퍼에 표시할 슬라이드들의 배열입니다. 각 슬라이드는 이미지(image), 제목(title), 설명(description)을 포함합니다. 메인 배너, 상품 이미지, 포트폴리오 등을 구성할 때 사용합니다.',
      table: {
        type: { summary: 'Slide[]' },
        defaultValue: { summary: '-' }
      }
    },
    autoplay: {
      control: { type: 'boolean' },
      description: '슬라이드가 자동으로 전환되는지 설정합니다. true일 때 일정 간격으로 다음 슬라이드로 자동 이동하고, false일 때는 사용자가 직접 조작해야 합니다. 배너나 광고에는 true, 상품 이미지에는 false가 적합합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    autoplaySpeed: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: '자동 재생 시 슬라이드 전환 간격을 밀리초 단위로 설정합니다. 너무 빠르면 사용자가 내용을 읽기 어렵고, 너무 느리면 지루할 수 있습니다. 3-5초(3000-5000ms) 간격을 권장합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3000' }
      }
    },
    showNavigation: {
      control: { type: 'boolean' },
      description: '좌우 화살표 네비게이션 버튼의 표시 여부를 설정합니다. true일 때 사용자가 이전/다음 슬라이드로 쉽게 이동할 수 있고, false일 때는 터치/드래그나 페이지네이션으로만 조작 가능합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    showPagination: {
      control: { type: 'boolean' },
      description: '하단 점 형태의 페이지네이션 표시 여부를 설정합니다. true일 때 현재 슬라이드 위치를 시각적으로 확인할 수 있고, 특정 슬라이드로 직접 이동할 수 있습니다. 슬라이드 개수가 많을 때 유용합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    loop: {
      control: { type: 'boolean' },
      description: '무한 루프 기능을 설정합니다. true일 때 마지막 슬라이드에서 다음으로 넘어가면 첫 번째 슬라이드로 돌아가고, false일 때는 마지막 슬라이드에서 멈춥니다. 연속적인 콘텐츠에는 true가 적합합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    height: {
      control: { type: 'text' },
      description: '스와이퍼의 높이를 설정합니다. CSS 단위(px, %, vh 등)를 사용할 수 있습니다. 모바일에서는 작은 높이(250px), 데스크톱에서는 큰 높이(400px)를 권장합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'400px'" }
      }
    },

  },
} satisfies Meta<typeof Swiper>;

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 슬라이드 데이터
const sampleSlides = [
  {
    id: 1,
    title: '첫 번째 슬라이드',
    description: '이것은 첫 번째 슬라이드의 설명입니다.',
    image: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: 2,
    title: '두 번째 슬라이드',
    description: '이것은 두 번째 슬라이드의 설명입니다.',
    image: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: 3,
    title: '세 번째 슬라이드',
    description: '이것은 세 번째 슬라이드의 설명입니다.',
    image: 'https://picsum.photos/800/400?random=3'
  },
  {
    id: 4,
    title: '네 번째 슬라이드',
    description: '이것은 네 번째 슬라이드의 설명입니다.',
    image: 'https://picsum.photos/800/400?random=4'
  }
];

/**
 * 기본 스와이퍼입니다.
 * 네비게이션과 페이지네이션이 모두 표시됩니다.
 */
export const Default: Story = {
  args: {
    slides: sampleSlides,
    autoplay: false,
    showNavigation: true,
    showPagination: true,
    height: '400px'
  },
  render: (args) => ({
    components: { Swiper },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 800px;">
        <Swiper v-bind="args" @slide-change="handleSlideChange" />
      </div>
    `,
    methods: {
      handleSlideChange(index: number) {
        console.log('Slide changed to:', index);
      }
    }
  }),
};

/**
 * 자동 재생이 활성화된 스와이퍼입니다.
 * 3초마다 자동으로 다음 슬라이드로 이동합니다.
 */
export const WithAutoplay: Story = {
  args: {
    slides: sampleSlides,
    autoplay: true,
    autoplaySpeed: 3000,
    showNavigation: true,
    showPagination: true,
    height: '400px'
  },
  render: (args) => ({
    components: { Swiper },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 800px;">
        <Swiper v-bind="args" />
      </div>
    `
  }),
};

/**
 * 무한 루프가 활성화된 스와이퍼입니다.
 * 마지막 슬라이드에서 다음으로 넘어가면 첫 번째 슬라이드로 돌아갑니다.
 */
export const WithLoop: Story = {
  args: {
    slides: sampleSlides,
    autoplay: true,
    autoplaySpeed: 3000,
    loop: true,
    showNavigation: true,
    showPagination: true,
    height: '400px'
  },
  render: (args) => ({
    components: { Swiper },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 800px;">
        <Swiper v-bind="args" />
      </div>
    `
  }),
};

/**
 * 네비게이션만 표시되는 스와이퍼입니다.
 * 페이지네이션은 숨겨져 있습니다.
 */
export const NavigationOnly: Story = {
  args: {
    slides: sampleSlides,
    showNavigation: true,
    showPagination: false,
    height: '400px'
  },
  render: (args) => ({
    components: { Swiper },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 800px;">
        <Swiper v-bind="args" />
      </div>
    `
  }),
};

/**
 * 페이지네이션만 표시되는 스와이퍼입니다.
 * 네비게이션 버튼은 숨겨져 있습니다.
 */
export const PaginationOnly: Story = {
  args: {
    slides: sampleSlides,
    showNavigation: false,
    showPagination: true,
    height: '400px'
  },
  render: (args) => ({
    components: { Swiper },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 800px;">
        <Swiper v-bind="args" />
      </div>
    `
  }),
};

/**
 * 커스텀 슬롯을 사용한 스와이퍼입니다.
 * 기본 슬라이드 대신 커스텀 콘텐츠를 표시합니다.
 */
export const CustomSlots: Story = {
  args: {
    slides: [
      { id: 1, title: '커스텀 슬라이드 1', color: '#3b82f6' },
      { id: 2, title: '커스텀 슬라이드 2', color: '#10b981' },
      { id: 3, title: '커스텀 슬라이드 3', color: '#f59e0b' },
      { id: 4, title: '커스텀 슬라이드 4', color: '#ef4444' }
    ],
    height: '300px'
  },
  render: (args) => ({
    components: { Swiper },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 800px;">
        <Swiper v-bind="args">
          <template #default="{ slide, index }">
            <div 
              :style="{ 
                backgroundColor: slide.color, 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }"
            >
              {{ slide.title }}
            </div>
          </template>
        </Swiper>
      </div>
    `
  }),
};

/**
 * 작은 높이의 스와이퍼입니다.
 * 더 컴팩트한 디자인에 적합합니다.
 */
export const SmallHeight: Story = {
  args: {
    slides: sampleSlides,
    height: '200px'
  },
  render: (args) => ({
    components: { Swiper },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 600px;">
        <Swiper v-bind="args" />
      </div>
    `
  }),
}; 