<template>
  <div class="bg-[#0F0F0F] min-h-screen">
    <!-- Header -->
    <header class="bg-black h-16 flex items-center px-6 border-b border-[#232323]">
      <h1 class="text-white text-2xl font-bold">My Page</h1>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 py-6">
      <!-- 좌우측 2컬럼 레이아웃 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Left Column -->
        <div class="space-y-4">
          <!-- Profile Card - 새로운 높이값 -->
          <div class="rounded-xl p-5 flex justify-between items-center h-36" style="background: linear-gradient(90deg, #3B82F6 0%, #9333EA 100%);">
            <div>
              <div class="text-white text-2xl font-bold mb-2">Cindyy</div>
              <div class="text-white/80 text-base">ci******@gmail.com</div>
            </div>
            <button class="bg-white text-blue-600 font-semibold px-5 py-3 rounded-lg shadow hover:bg-gray-100 transition">
              Friends Invite
            </button>
          </div>

          <!-- Referrer Card - 새로운 높이값 -->
          <div class="bg-[#1A1A1A] rounded-xl p-5 flex justify-between items-center h-28">
            <span class="text-white text-lg font-medium">Referrer</span>
            <div class="flex items-center gap-3">
              <span class="text-white text-xl font-bold">23</span>
              <span class="bg-gray-700 text-white text-sm px-3 py-1 rounded-lg">+3</span>
              <button class="text-blue-400 text-base font-medium hover:underline">More</button>
            </div>
          </div>

          <!-- Wallets Card - 새로운 높이값 -->
          <div class="bg-[#1A1A1A] rounded-xl p-5 flex justify-between items-center h-28">
            <span class="text-white text-lg font-medium">Wallets</span>
            <button class="text-blue-400 text-base font-medium hover:underline">More</button>
          </div>
        </div>

        <!-- Right Column -->
        <div>
          <!-- Progress and Benefits Card - 새로운 높이값 -->
          <div class="bg-[#1A1A1A] rounded-xl p-5 h-96">
            <!-- Header Section - A와 등급별 혜택보기 한 섹션 -->
            <div class="flex justify-between items-center mb-8">
              <div class="flex items-center gap-4">
                <!-- Level Icon - 새로운 크기 -->
                <div class="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-white text-xl font-bold">A</div>
                <div class="text-white text-2xl font-bold">Level A</div>
              </div>
              <button class="text-blue-400 text-base font-medium hover:underline">① 등급별 혜택보기</button>
            </div>

            <!-- USDT Section - 새로운 간격 -->
            <div class="mb-8">
              <div class="text-white text-2xl font-bold flex items-end gap-3">
                <span>USDT4,600</span>
                <span class="text-blue-400 text-lg font-semibold">/6,000</span>
              </div>
              <div class="text-gray-400 text-base mt-2">Achieve Valid Bet Amount!</div>
            </div>

            <!-- Progress Bar - 새로운 높이 -->
            <div class="mb-8">
              <div class="relative h-4 bg-gray-700 rounded-full">
                <!-- Progress Fill -->
                <div class="absolute h-4 bg-blue-500 rounded-full" style="width:77%"></div>
                <!-- Progress Handle - 새로운 크기 -->
                <div class="absolute top-0 left-[77%] w-5 h-5 bg-white border-2 border-gray-700 rounded-full -translate-x-1/2"></div>
              </div>
              <!-- Level Labels -->
              <div class="flex justify-between mt-4 text-gray-400 text-base">
                <span>A</span>
                <span>A+</span>
              </div>
            </div>

            <!-- Benefits List - 새로운 간격 -->
            <ul class="space-y-5">
              <li class="flex items-center gap-4">
                <span class="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-white text-lg">1% Comp</span>
              </li>
              <li class="flex items-center gap-4">
                <span class="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-white text-lg">Level Up Bonus 10USDT</span>
              </li>
              <li class="flex items-center gap-4">
                <span class="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-white text-lg">2% Comp On Your Balance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Navigation with Border -->
      <div class="mt-8 pt-8 border-t border-[#232323]">
        <div class="flex flex-col space-y-3">
          <button class="text-gray-400 hover:text-white text-base font-medium transition-colors text-left">betting history</button>
          <button class="text-gray-400 hover:text-white text-base font-medium transition-colors text-left">sign out</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// User data
const userProfile = ref({
  name: 'Cindyy',
  email: 'ci******@gmail.com',
  referrerCount: 23,
  newReferrers: 3,
  currentLevel: 'A',
  nextLevel: 'A+',
  progress: 4600,
  target: 6000,
  progressPercentage: 77
})

// Benefits data
const benefits = ref([
  '1% Comp',
  'Level Up Bonus 10USDT',
  '2% Comp On Your Balance'
])
</script>

<style scoped>
/* Exact Figma color values */
.bg-\[#0F0F0F\] {
  background-color: #0F0F0F;
}

.bg-\[#1A1A1A\] {
  background-color: #1A1A1A;
}

.bg-\[#232323\] {
  background-color: #232323;
}

/* 새로운 Figma 디자인 기준 - 폰트 사이즈 */
.text-2xl {
  font-size: 1.75rem; /* 28px */
  line-height: 2.25rem; /* 36px */
  font-weight: 700;
}

.text-xl {
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  font-weight: 700;
}

.text-lg {
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
  font-weight: 500;
}

.text-base {
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
  font-weight: 400;
}

.text-sm {
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  font-weight: 400;
}

/* Exact border radius - 새로운 Figma 디자인 기준 */
.rounded-xl {
  border-radius: 0.75rem; /* 12px */
}

.rounded-lg {
  border-radius: 0.5rem; /* 8px */
}

.rounded-full {
  border-radius: 9999px;
}

/* Exact gradient */
.gradient-blue-purple {
  background: linear-gradient(90deg, #3B82F6 0%, #9333EA 100%);
}

/* 새로운 Figma 디자인 높이값 */
.h-36 {
  height: 9rem; /* 144px */
}

.h-28 {
  height: 7rem; /* 112px */
}

.h-96 {
  height: 24rem; /* 384px */
}

/* 새로운 간격 */
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 1rem; /* 16px */
}

.space-y-5 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 1.25rem; /* 20px */
}

.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0.75rem; /* 12px */
}

.gap-6 {
  gap: 1.5rem; /* 24px */
}

.gap-4 {
  gap: 1rem; /* 16px */
}

.gap-3 {
  gap: 0.75rem; /* 12px */
}

.gap-2 {
  gap: 0.5rem; /* 8px */
}

/* 새로운 패딩 */
.p-5 {
  padding: 1.25rem; /* 20px */
}

.px-5 {
  padding-left: 1.25rem; /* 20px */
  padding-right: 1.25rem; /* 20px */
}

.py-3 {
  padding-top: 0.75rem; /* 12px */
  padding-bottom: 0.75rem; /* 12px */
}

.px-3 {
  padding-left: 0.75rem; /* 12px */
  padding-right: 0.75rem; /* 12px */
}

.py-1 {
  padding-top: 0.25rem; /* 4px */
  padding-bottom: 0.25rem; /* 4px */
}

/* 새로운 마진 */
.mb-8 {
  margin-bottom: 2rem; /* 32px */
}

.mb-2 {
  margin-bottom: 0.5rem; /* 8px */
}

.mt-2 {
  margin-top: 0.5rem; /* 8px */
}

.mt-4 {
  margin-top: 1rem; /* 16px */
}

.mt-8 {
  margin-top: 2rem; /* 32px */
}

.pt-8 {
  padding-top: 2rem; /* 32px */
}

/* 새로운 아이콘 크기 */
.w-14 {
  width: 3.5rem; /* 56px */
}

.h-14 {
  height: 3.5rem; /* 56px */
}

.w-7 {
  width: 1.75rem; /* 28px */
}

.h-7 {
  height: 1.75rem; /* 28px */
}

.w-5 {
  width: 1.25rem; /* 20px */
}

.h-5 {
  height: 1.25rem; /* 20px */
}

.w-4 {
  width: 1rem; /* 16px */
}

.h-4 {
  height: 1rem; /* 16px */
}

/* Border styles */
.border-t {
  border-top-width: 1px;
}

.border-b {
  border-bottom-width: 1px;
}
</style> 