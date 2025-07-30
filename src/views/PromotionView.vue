<template>
  <div class="bg-white relative min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <!-- Header -->
      <div class="mb-20">
        <h1 class="text-2xl font-semibold text-[#222222] leading-[1.2] capitalize">
          promotion
        </h1>
      </div>

      <!-- Promotion Cards Grid - 2개씩 배치 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- First Promotion Card -->
        <div class="flex flex-col gap-4">
          <div 
            class="h-80 rounded-[10px] bg-cover bg-center bg-no-repeat w-full"
            style="background-image: url('https://picsum.photos/800/600?random=1')"
          ></div>
          <div class="flex flex-col gap-[22px] w-full">
            <div class="flex flex-row gap-6 items-center w-full">
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-[#666666] text-base font-light leading-[1.2]">
                  only when first!
                </div>
                <div class="text-[#222222] text-xl font-medium leading-[1.2]">
                  50% first deposit additional bonus
                </div>
              </div>
              <div class="text-[#ff4c4c] text-sm font-normal leading-[1.4]">
                {{ countdown1 }}
              </div>
            </div>
            <div class="flex flex-row gap-4 items-center w-full">
              <div class="flex flex-row gap-1.5 items-center">
                <div class="bg-[#eff3ff] px-1.5 py-0.5 rounded">
                  <div class="text-[#005cf3] text-sm font-normal leading-[1.4] text-right">
                    ~5%
                  </div>
                </div>
                <div class="bg-[#f2f5fa] px-1.5 py-0.5 rounded">
                  <div class="text-[#666666] text-sm font-normal leading-[1.4] text-right">
                    zero rolling
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Promotion Card -->
        <div class="flex flex-col gap-4">
          <div 
            class="h-80 rounded-[10px] bg-cover bg-center bg-no-repeat w-full"
            style="background-image: url('https://picsum.photos/800/600?random=2')"
          ></div>
          <div class="flex flex-col gap-[22px] w-full">
            <div class="flex flex-row gap-6 items-center w-full">
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-[#666666] text-base font-light leading-[1.2]">
                  just One chance
                </div>
                <div class="text-[#222222] text-xl font-medium leading-[1.2]">
                  Get 100% extra on your first deposit!
                </div>
              </div>
              <div class="text-[#999999] text-sm font-normal leading-[1.4]">
                aways
              </div>
            </div>
            <div class="flex flex-row gap-4 items-center w-full">
              <div class="flex flex-row gap-1.5 items-center">
                <div class="bg-[#eff3ff] px-1.5 py-0.5 rounded">
                  <div class="text-[#005cf3] text-sm font-normal leading-[1.4] text-right">
                    100%
                  </div>
                </div>
                <div class="bg-[#f2f5fa] px-1.5 py-0.5 rounded">
                  <div class="text-[#666666] text-sm font-normal leading-[1.4] text-right">
                    x30
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Third Promotion Card -->
        <div class="flex flex-col gap-4">
          <div 
            class="h-80 rounded-[10px] bg-cover bg-center bg-no-repeat w-full"
            style="background-image: url('https://picsum.photos/800/600?random=3')"
          ></div>
          <div class="flex flex-col gap-[22px] w-full">
            <div class="flex flex-row gap-6 items-center w-full">
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-[#666666] text-base font-light leading-[1.2]">
                  Don't worry your lost
                </div>
                <div class="text-[#222222] text-xl font-medium leading-[1.2]">
                  Get 5% of your loss back
                </div>
              </div>
              <div class="text-[#999999] text-sm font-normal leading-[1.4]">
                {{ countdown2 }}
              </div>
            </div>
            <div class="flex flex-row gap-4 items-center w-full">
              <div class="flex flex-row gap-1.5 items-center">
                <div class="bg-[#eff3ff] px-1.5 py-0.5 rounded">
                  <div class="text-[#005cf3] text-sm font-normal leading-[1.4] text-right">
                    ~5%
                  </div>
                </div>
                <div class="bg-[#f2f5fa] px-1.5 py-0.5 rounded">
                  <div class="text-[#666666] text-sm font-normal leading-[1.4] text-right">
                    zero rolling
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Fourth Promotion Card -->
        <div class="flex flex-col gap-4">
          <div 
            class="h-80 rounded-[10px] bg-cover bg-center bg-no-repeat w-full"
            style="background-image: url('https://picsum.photos/800/600?random=4')"
          ></div>
          <div class="flex flex-col gap-[22px] w-full">
            <div class="flex flex-row gap-6 items-center w-full">
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-[#666666] text-base font-light leading-[1.2]">
                  only when first!
                </div>
                <div class="text-[#222222] text-xl font-medium leading-[1.2]">
                  50% first deposit additional bonus
                </div>
              </div>
              <div class="text-[#ff4c4c] text-sm font-normal leading-[1.4]">
                {{ countdown3 }}
              </div>
            </div>
            <div class="flex flex-row gap-4 items-center w-full">
              <div class="flex flex-row gap-1.5 items-center">
                <div class="bg-[#eff3ff] px-1.5 py-0.5 rounded">
                  <div class="text-[#005cf3] text-sm font-normal leading-[1.4] text-right">
                    ~5%
                  </div>
                </div>
                <div class="bg-[#f2f5fa] px-1.5 py-0.5 rounded">
                  <div class="text-[#666666] text-sm font-normal leading-[1.4] text-right">
                    zero rolling
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 카운트다운 상태
const countdown1 = ref('12:29:30 Left')
const countdown2 = ref('7Day Left')
const countdown3 = ref('12:29:30 Left')

// 카운트다운 타이머들
let timer1: NodeJS.Timeout | null = null
let timer2: NodeJS.Timeout | null = null
let timer3: NodeJS.Timeout | null = null

// 카운트다운 함수들
const startCountdown1 = () => {
  let hours = 12
  let minutes = 29
  let seconds = 30

  timer1 = setInterval(() => {
    if (seconds > 0) {
      seconds--
    } else if (minutes > 0) {
      minutes--
      seconds = 59
    } else if (hours > 0) {
      hours--
      minutes = 59
      seconds = 59
    } else {
      countdown1.value = 'Expired'
      if (timer1) clearInterval(timer1)
      return
    }

    countdown1.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} Left`
  }, 1000)
}

const startCountdown2 = () => {
  let days = 7

  timer2 = setInterval(() => {
    if (days > 0) {
      days--
      countdown2.value = `${days}Day Left`
    } else {
      countdown2.value = 'Expired'
      if (timer2) clearInterval(timer2)
    }
  }, 86400000) // 24시간마다 업데이트
}

const startCountdown3 = () => {
  let hours = 12
  let minutes = 29
  let seconds = 30

  timer3 = setInterval(() => {
    if (seconds > 0) {
      seconds--
    } else if (minutes > 0) {
      minutes--
      seconds = 59
    } else if (hours > 0) {
      hours--
      minutes = 59
      seconds = 59
    } else {
      countdown3.value = 'Expired'
      if (timer3) clearInterval(timer3)
      return
    }

    countdown3.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} Left`
  }, 1000)
}

onMounted(() => {
  startCountdown1()
  startCountdown2()
  startCountdown3()
})

onUnmounted(() => {
  if (timer1) clearInterval(timer1)
  if (timer2) clearInterval(timer2)
  if (timer3) clearInterval(timer3)
})
</script>

<style scoped>
/* 프로모션 페이지 스타일 */
.promotion-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
}

.promotion-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.promotion-card-content {
  position: relative;
  z-index: 1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 600;
}
</style> 