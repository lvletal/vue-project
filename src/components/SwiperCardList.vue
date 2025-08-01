<template>
  <div 
    class="swiper-container" 
    ref="swiperContainer"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseup="endDrag"
    @mouseleave="endDrag"
    @touchstart="startDrag"
    @touchmove="onDrag"
    @touchend="endDrag"
  >
    <div class="swiper-wrapper">
      <div 
        v-for="(item, index) in items" 
        :key="index"
        class="swiper-slide"
      >
        <slot :item="item" :index="index"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'

interface Props {
  items: any[]
  showNav?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showNav: false
})

const swiperContainer = ref<HTMLElement>()
const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)

const startDrag = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
  startX.value = clientX - (swiperContainer.value?.offsetLeft || 0)
  scrollLeft.value = swiperContainer.value?.scrollLeft || 0
  
  // Prevent text selection during drag
  if (swiperContainer.value) {
    swiperContainer.value.style.cursor = 'grabbing'
    swiperContainer.value.style.userSelect = 'none'
  }
}

const onDrag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return
  
  e.preventDefault()
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
  const x = clientX - (swiperContainer.value?.offsetLeft || 0)
  const walk = (startX.value - x) * 2 // Scroll speed multiplier
  
  if (swiperContainer.value) {
    swiperContainer.value.scrollLeft = scrollLeft.value + walk
  }
}

const endDrag = () => {
  isDragging.value = false
  if (swiperContainer.value) {
    swiperContainer.value.style.cursor = 'grab'
    swiperContainer.value.style.userSelect = 'auto'
  }
}

const handleResize = () => {
  nextTick(() => {
    // 리사이즈 시 필요한 로직이 있다면 여기에 추가
  })
}

onMounted(() => {
  nextTick(() => {
    if (swiperContainer.value) {
      window.addEventListener('resize', handleResize)
      // Set initial cursor style
      swiperContainer.value.style.cursor = 'grab'
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// items가 변경될 때마다 필요한 로직이 있다면 여기에 추가
watch(() => props.items, () => {
  nextTick(() => {
    // 아이템 변경 시 필요한 로직이 있다면 여기에 추가
  })
}, { deep: true })
</script>

<style scoped>
.swiper-container {
  position: relative;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
}

.swiper-container:active {
  cursor: grabbing;
}

.swiper-container::-webkit-scrollbar {
  display: none;
}

.swiper-wrapper {
  display: flex;
  gap: 6px;
  padding: 0.5rem 0;
  min-width: max-content;
}

.swiper-slide {
  flex-shrink: 0;
  width: 130px; /* 고정 너비 130px */
}
</style> 