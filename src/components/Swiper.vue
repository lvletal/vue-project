<template>
  <div class="swiper-container" ref="swiperRef">
    <div class="swiper-wrapper" :style="wrapperStyle">
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="swiper-slide"
        :style="slideStyle"
      >
        <slot :slide="slide" :index="index">
          <div class="default-slide">
            <img 
              v-if="slide.image" 
              :src="slide.image" 
              :alt="slide.title || `Slide ${index + 1}`"
              class="slide-image"
            />
            <div v-if="slide.title || slide.description" class="slide-content">
              <h3 v-if="slide.title" class="slide-title">{{ slide.title }}</h3>
              <p v-if="slide.description" class="slide-description">{{ slide.description }}</p>
            </div>
          </div>
        </slot>
      </div>
    </div>
    
    <!-- Navigation -->
    <div v-if="showNavigation" class="swiper-navigation">
      <button 
        class="swiper-button swiper-button-prev" 
        @click="prevSlide"
        :disabled="currentIndex === 0"
      >
        <svg class="swiper-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        class="swiper-button swiper-button-next" 
        @click="nextSlide"
        :disabled="currentIndex === slides.length - 1"
      >
        <svg class="swiper-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    
    <!-- Pagination -->
    <div v-if="showPagination" class="swiper-pagination">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        class="swiper-pagination-bullet"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

interface Slide {
  id?: string | number
  title?: string
  description?: string
  image?: string
  [key: string]: any
}

interface Props {
  slides: Slide[]
  autoplay?: boolean
  autoplaySpeed?: number
  showNavigation?: boolean
  showPagination?: boolean
  loop?: boolean
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: false,
  autoplaySpeed: 3000,
  showNavigation: true,
  showPagination: true,
  loop: false,
  height: '400px'
})

const emit = defineEmits<{
  slideChange: [index: number]
  slideClick: [slide: Slide, index: number]
}>()

const swiperRef = ref<HTMLElement>()
const currentIndex = ref(0)
const autoplayInterval = ref<number>()

const wrapperStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
  transition: 'transform 0.3s ease-in-out'
}))

const slideStyle = computed(() => ({
  width: '100%',
  height: props.height
}))

const nextSlide = () => {
  if (currentIndex.value < props.slides.length - 1) {
    currentIndex.value++
  } else if (props.loop) {
    currentIndex.value = 0
  }
  emit('slideChange', currentIndex.value)
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else if (props.loop) {
    currentIndex.value = props.slides.length - 1
  }
  emit('slideChange', currentIndex.value)
}

const goToSlide = (index: number) => {
  currentIndex.value = index
  emit('slideChange', currentIndex.value)
}

const startAutoplay = () => {
  if (props.autoplay) {
    autoplayInterval.value = window.setInterval(() => {
      nextSlide()
    }, props.autoplaySpeed)
  }
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
    autoplayInterval.value = undefined
  }
}

const handleMouseEnter = () => {
  if (props.autoplay) {
    stopAutoplay()
  }
}

const handleMouseLeave = () => {
  if (props.autoplay) {
    startAutoplay()
  }
}

onMounted(() => {
  if (props.autoplay) {
    startAutoplay()
  }
  
  if (swiperRef.value) {
    swiperRef.value.addEventListener('mouseenter', handleMouseEnter)
    swiperRef.value.addEventListener('mouseleave', handleMouseLeave)
  }
})

onUnmounted(() => {
  stopAutoplay()
  
  if (swiperRef.value) {
    swiperRef.value.removeEventListener('mouseenter', handleMouseEnter)
    swiperRef.value.removeEventListener('mouseleave', handleMouseLeave)
  }
})

watch(() => props.autoplay, (newValue) => {
  if (newValue) {
    startAutoplay()
  } else {
    stopAutoplay()
  }
})
</script>

<style scoped>
.swiper-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
}

.swiper-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  flex-shrink: 0;
  position: relative;
}

.default-slide {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
}

.slide-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.slide-description {
  font-size: 1rem;
  opacity: 0.9;
}

/* Navigation */
.swiper-navigation {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  pointer-events: none;
}

.swiper-button {
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  color: #374151;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  pointer-events: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.swiper-button:hover:not(:disabled) {
  background-color: white;
  transform: scale(1.05);
}

.swiper-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.swiper-icon {
  width: 1.5rem;
  height: 1.5rem;
}

/* Pagination */
.swiper-pagination {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.swiper-pagination-bullet {
  width: 0.75rem;
  height: 0.75rem;
  border: none;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.2s ease;
}

.swiper-pagination-bullet:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.swiper-pagination-bullet.active {
  background-color: white;
  transform: scale(1.2);
}
</style> 