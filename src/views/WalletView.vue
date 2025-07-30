<template>
  <div class="min-h-screen bg-white p-8">
    <div class="max-w-[1200px] mx-auto">
      <!-- Header -->
      <h1 class="text-[24px] font-semibold text-[#222222] leading-[1.2] mb-10">wallet</h1>
      
      <!-- Main Content -->
      <div class="space-y-[30px]">
        <!-- Balance Section -->
        <div class="flex flex-col lg:flex-row gap-10">
          <!-- Left Column - Balance -->
          <div class="flex-1 space-y-[30px]">
            <!-- Balance Card -->
            <div class="h-[200px] flex flex-col justify-between">
              <div class="space-y-5">
                <!-- Balance Label -->
                <div class="flex items-center gap-2.5">
                  <span class="text-[#666666] text-[16px] font-light leading-[1.2]">Cindyy's balance</span>
                </div>
                
                <!-- Balance Amount -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="flex items-center gap-2.5">
                      <div class="w-6 h-6 bg-[#005cf3] rounded-full flex items-center justify-center">
                        <span class="text-white text-xs font-bold">U</span>
                      </div>
                      <span class="text-[#222222] text-[32px] font-semibold leading-[1.2]">23,950.00</span>
                    </div>
                    <button class="w-[30px] h-[30px] border border-[#eeeeee] rounded-lg flex items-center justify-center">
                      <svg class="w-[18px] h-[18px] text-[#666666]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
                      </svg>
                    </button>
                  </div>
                  <div class="bg-[#f5f6f7] backdrop-blur-sm px-3 py-2.5 rounded-[50px]">
                    <span class="text-[#222222] text-[12px] leading-[1.6]">more</span>
                  </div>
                </div>
              </div>
              
              <!-- Balance Details -->
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-1.5">
                    <span class="text-[#666666] text-[16px] leading-[1.2]">Casino</span>
                    <div class="w-5 h-5 bg-[#f2f5fa] rounded-full flex items-center justify-center">
                      <svg class="w-[9px] h-[9px] text-[#666666] rotate-180" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                      </svg>
                    </div>
                  </div>
                  <span class="text-[#222222] text-[16px] font-light leading-[1.2]">23,950.00 USDT</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-[#666666] text-[16px] leading-[1.2]">Sports</span>
                  <span class="text-[#222222] text-[16px] font-light leading-[1.2]">0 USDT</span>
                </div>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex gap-2">
              <button class="flex-1 bg-[#f5f6f7] h-[52px] rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span class="text-[#222222] text-[14px] font-semibold leading-[1.6]">withdraw</span>
              </button>
              <button class="flex-1 bg-[#005cf3] h-[52px] rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span class="text-white text-[14px] font-semibold leading-[1.6]">deposit</span>
              </button>
            </div>
          </div>
          
          <!-- Right Column - Rewards -->
          <div class="flex-1 space-y-2.5">
            <!-- Comp Card -->
            <div class="bg-[#f2f5fa] h-[120px] rounded-[10px] flex items-center justify-between px-8 py-[30px]">
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-1">
                  <span class="text-[#222222] text-[16px] font-semibold leading-[1.2]">comp</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="w-6 h-6 bg-[#005cf3] rounded-full flex items-center justify-center">
                    <span class="text-white text-xs font-bold">U</span>
                  </div>
                  <span class="text-[#222222] text-[24px] font-semibold leading-[1.2]">210.50</span>
                </div>
              </div>
              <div class="flex gap-1">
                <button class="bg-[#e5eaf1] px-3 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  <span class="text-[#222222] text-[11px] leading-[normal]">More</span>
                </button>
                <button class="bg-white px-3 py-2 rounded-lg w-[47px] hover:bg-gray-50 transition-colors">
                  <span class="text-[#222222] text-[12px] font-semibold leading-[1.6]">use</span>
                </button>
              </div>
            </div>
            
            <!-- Affiliate Card -->
            <div class="bg-[#f2f5fa] h-[120px] rounded-[10px] flex items-center justify-between px-8 py-[30px]">
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-1">
                  <span class="text-[#222222] text-[16px] font-semibold leading-[1.2]">affiliate</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="w-6 h-6 bg-[#005cf3] rounded-full flex items-center justify-center">
                    <span class="text-white text-xs font-bold">U</span>
                  </div>
                  <span class="text-[#222222] text-[24px] font-semibold leading-[1.2]">9,180.50</span>
                </div>
              </div>
              <div class="flex gap-1">
                <button class="bg-[#e5eaf1] px-3 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  <span class="text-[#222222] text-[11px] leading-[normal]">More</span>
                </button>
                <button class="bg-white px-3 py-2 rounded-lg w-[47px] hover:bg-gray-50 transition-colors">
                  <span class="text-[#222222] text-[12px] font-semibold leading-[1.6]">use</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Withdrawal Status -->
        <div class="border border-[#eeeeee] rounded-[10px] flex items-center justify-between px-5 py-4">
          <div class="flex items-center gap-2">
            <div class="w-5 h-5 relative">
              <svg class="w-full h-full text-[#666666] animate-spin" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z"/>
              </svg>
            </div>
            <span class="text-[#222222] text-[14px] leading-[1.4]">Withdrawal confirmation in progress</span>
          </div>
          <div class="w-4 h-4">
            <svg class="w-full h-full text-[#666666]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="h-px bg-[#eeeeee] my-10"></div>
      
      <!-- Coupons Section -->
      <div class="space-y-[50px]">
        <div class="space-y-5">
          <!-- Section Header -->
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-2">
              <span class="text-[#222222] text-[16px] font-semibold leading-[1.2]">coupon</span>
              <span class="text-[#51b4ff] text-[15px] font-medium leading-[1.1]">2</span>
            </div>
          </div>
          
          <!-- Coupons Grid -->
          <div class="grid grid-cols-3 gap-2.5">
            <!-- Coupon 1 -->
            <div class="bg-[#f2f5fa] h-[130px] rounded-[10px] flex items-center relative overflow-hidden">
              <div class="flex-1 px-8 py-10">
                <div class="space-y-4">
                  <div class="space-y-1.5">
                    <span class="text-[#51b4ff] text-[16px] font-light leading-[1.2]">just free play</span>
                    <div class="flex items-center gap-2">
                      <span class="text-[#222222] text-[24px] font-medium leading-[1.2]">10</span>
                      <span class="text-[#222222] text-[16px] font-medium leading-[1.2]">USDT</span>
                    </div>
                  </div>
                  <span class="text-[#ff0000] text-[14px] leading-[1.4]">{{ countdown1 }} left</span>
                </div>
              </div>
              <div class="w-[140px] flex flex-col items-center justify-center gap-1 py-3 px-3 border-l border-dashed border-[#dddddd]">
                <div class="w-[25px] h-[25px] text-[#222222]">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                </div>
                <span class="text-[#222222] text-[14px] leading-[1.4]">redeem</span>
              </div>
            </div>
            
            <!-- Coupon 2 -->
            <div class="bg-[#f2f5fa] h-[130px] rounded-[10px] flex items-center relative overflow-hidden">
              <div class="flex-1 px-8 py-10">
                <div class="space-y-4">
                  <div class="space-y-1.5">
                    <span class="text-[#51b4ff] text-[16px] font-light leading-[1.2]">just free play</span>
                    <div class="flex items-center gap-2">
                      <span class="text-[#222222] text-[24px] font-medium leading-[1.2]">2</span>
                      <span class="text-[#222222] text-[16px] font-medium leading-[1.2]">USDT</span>
                    </div>
                  </div>
                  <span class="text-[#ff0000] text-[14px] leading-[1.4]">{{ countdown2 }} left</span>
                </div>
              </div>
              <div class="w-[140px] flex flex-col items-center justify-center gap-1 py-3 px-3 border-l border-dashed border-[#dddddd]">
                <div class="w-[25px] h-[25px] text-[#222222]">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                </div>
                <span class="text-[#222222] text-[14px] leading-[1.4]">redeem</span>
              </div>
            </div>
            
            <!-- Coupon 3 -->
            <div class="bg-[#f2f5fa] h-[130px] rounded-[10px] flex items-center relative overflow-hidden">
              <div class="flex-1 px-8 py-10">
                <div class="space-y-4">
                  <div class="space-y-1.5">
                    <span class="text-[#51b4ff] text-[16px] font-light leading-[1.2]">level Up</span>
                    <div class="flex items-center gap-2">
                      <span class="text-[#222222] text-[24px] font-medium leading-[1.2]">2,000</span>
                      <span class="text-[#222222] text-[16px] font-medium leading-[1.2]">USDT</span>
                    </div>
                  </div>
                  <span class="text-[#999999] text-[14px] leading-[1.4]">~25.02.01</span>
                </div>
              </div>
              <div class="w-[140px] flex flex-col items-center justify-center gap-1 py-3 px-3 border-l border-dashed border-[#dddddd]">
                <div class="w-[25px] h-[25px] text-[#222222]">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                </div>
                <span class="text-[#222222] text-[14px] leading-[1.4]">redeem</span>
              </div>
            </div>
            
            <!-- Coupon 4 -->
            <div class="bg-[#f2f5fa] h-[130px] rounded-[10px] flex items-center relative overflow-hidden">
              <div class="flex-1 px-8 py-10">
                <div class="space-y-4">
                  <div class="space-y-1.5">
                    <span class="text-[#51b4ff] text-[16px] font-light leading-[1.2]">level Up</span>
                    <div class="flex items-center gap-2">
                      <span class="text-[#222222] text-[24px] font-medium leading-[1.2]">1,500</span>
                      <span class="text-[#222222] text-[16px] font-medium leading-[1.2]">USDT</span>
                    </div>
                  </div>
                  <span class="text-[#999999] text-[14px] leading-[1.4]">~25.02.12</span>
                </div>
              </div>
              <div class="w-[140px] flex flex-col items-center justify-center gap-1 py-3 px-3 border-l border-dashed border-[#dddddd]">
                <div class="w-[25px] h-[25px] text-[#222222]">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                </div>
                <span class="text-[#222222] text-[14px] leading-[1.4]">redeem</span>
              </div>
            </div>
            
            <!-- Coupon 5 (Disabled) -->
            <div class="bg-[#f2f5fa] h-[130px] rounded-[10px] flex items-center relative overflow-hidden opacity-50">
              <div class="flex-1 px-8 py-10">
                <div class="space-y-4">
                  <div class="space-y-1.5">
                    <span class="text-[#51b4ff] text-[16px] font-light leading-[1.2]">level Up</span>
                    <div class="flex items-center gap-2">
                      <span class="text-[#222222] text-[24px] font-medium leading-[1.2]">1,500</span>
                      <span class="text-[#222222] text-[16px] font-medium leading-[1.2]">USDT</span>
                    </div>
                  </div>
                  <span class="text-[#999999] text-[14px] leading-[1.4]">~25.02.12</span>
                </div>
              </div>
              <div class="w-[140px] flex flex-col items-center justify-center gap-1 py-3 px-3 border-l border-dashed border-[#dddddd]">
                <div class="w-[25px] h-[25px] text-[#222222]">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                </div>
                <span class="text-[#222222] text-[14px] leading-[1.4]">redeem</span>
              </div>
            </div>
            
            <!-- Coupon 6 (Disabled) -->
            <div class="bg-[#f2f5fa] h-[130px] rounded-[10px] flex items-center relative overflow-hidden opacity-50">
              <div class="flex-1 px-8 py-10">
                <div class="space-y-4">
                  <div class="space-y-1.5">
                    <span class="text-[#51b4ff] text-[16px] font-light leading-[1.2]">level Up</span>
                    <div class="flex items-center gap-2">
                      <span class="text-[#222222] text-[24px] font-medium leading-[1.2]">1,500</span>
                      <span class="text-[#222222] text-[16px] font-medium leading-[1.2]">USDT</span>
                    </div>
                  </div>
                  <span class="text-[#999999] text-[14px] leading-[1.4]">~25.02.12</span>
                </div>
              </div>
              <div class="w-[140px] flex flex-col items-center justify-center gap-1 py-3 px-3 border-l border-dashed border-[#dddddd]">
                <div class="w-[25px] h-[25px] text-[#222222]">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                </div>
                <span class="text-[#222222] text-[14px] leading-[1.4]">redeem</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- More Button -->
        <div class="flex justify-center">
          <button class="bg-[#f5f6f7] backdrop-blur-sm px-3 py-2.5 rounded-[50px] hover:bg-gray-200 transition-colors">
            <span class="text-[#222222] text-[12px] leading-[1.6]">more</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Countdown timer for coupons
const countdown1 = ref('02:35:50')
const countdown2 = ref('04:00:22')

onMounted(() => {
  // Start countdown timers
  const timer1 = setInterval(() => {
    const [hours, minutes, seconds] = countdown1.value.split(':').map(Number)
    let totalSeconds = hours * 3600 + minutes * 60 + seconds - 1
    
    if (totalSeconds <= 0) {
      clearInterval(timer1)
      countdown1.value = '00:00:00'
    } else {
      const h = Math.floor(totalSeconds / 3600)
      const m = Math.floor((totalSeconds % 3600) / 60)
      const s = totalSeconds % 60
      countdown1.value = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
    }
  }, 1000)
  
  const timer2 = setInterval(() => {
    const [hours, minutes, seconds] = countdown2.value.split(':').map(Number)
    let totalSeconds = hours * 3600 + minutes * 60 + seconds - 1
    
    if (totalSeconds <= 0) {
      clearInterval(timer2)
      countdown2.value = '00:00:00'
    } else {
      const h = Math.floor(totalSeconds / 3600)
      const m = Math.floor((totalSeconds % 3600) / 60)
      const s = totalSeconds % 60
      countdown2.value = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
    }
  }, 1000)
})
</script>

<style scoped>
/* Inter font family */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

* {
  font-family: 'Inter', sans-serif;
}

/* Custom animations */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style> 