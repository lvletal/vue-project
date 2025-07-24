<template>
  <div class="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
    <!-- Header -->
    <div class="mb-5">
      <h1 class="text-xl sm:text-2xl font-semibold leading-[1.2] mb-2">VIP CLUB</h1>
      <p class="text-xs sm:text-sm text-[#cccccc] leading-[1.3] font-light">5 benefits</p>
    </div>

    <!-- VIP Benefits - Mobile First -->
    <div class="space-y-2">
      <!-- Play Comp - Accordion -->
      <div class="bg-[#212329] rounded-3xl overflow-hidden">
        <div class="p-5">
          <div class="flex items-center justify-between cursor-pointer" @click="toggleAccordion('playComp')">
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 bg-cover bg-center bg-no-repeat" 
                   style="background-image: url('http://localhost:3845/assets/649c8a654662b66c923f867c07732b112d229cc5.png')"></div>
              <div>
                <h3 class="text-base font-medium text-white leading-[1.2]">Play Comp</h3>
                <p class="text-[13px] text-[#51b4ff] leading-[1.4]">Level up system</p>
              </div>
            </div>
            <div class="w-8 h-8 border border-[#444444] rounded-[50px] flex items-center justify-center backdrop-blur-[5px] transition-transform duration-300"
                 :class="{ 'rotate-180': accordionStates.playComp }">
              <div class="w-3 h-3">
                <svg 
                  class="w-full h-full text-[#cccccc]"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Accordion Content -->
          <div v-show="accordionStates.playComp" class="mt-6 pt-6 border-t border-[#444444]">
            <div class="overflow-x-auto">
              <table class="w-full min-w-[600px] text-[12px]">
                <thead>
                  <tr class="border-b border-[#444444]">
                    <th class="text-left py-3 px-2 text-[#cccccc] font-medium">VIP Level</th>
                    <th class="text-left py-3 px-2 text-[#cccccc] font-medium">Comp Rate</th>
                    <th class="text-left py-3 px-2 text-[#cccccc] font-medium">Bonus Cap</th>
                    <th class="text-left py-3 px-2 text-[#cccccc] font-medium">Monthly Deposit</th>
                    <th class="text-left py-3 px-2 text-[#cccccc] font-medium">Monthly Betting</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="level in vipLevels" :key="level.level" class="border-b border-[#444444]">
                    <td class="py-3 px-2 text-white font-medium">VIP {{ level.level }}</td>
                    <td class="py-3 px-2 text-[#51b4ff]">{{ level.compRate }}%</td>
                    <td class="py-3 px-2 text-white">USDT {{ level.bonusCap.toLocaleString() }}</td>
                    <td class="py-3 px-2 text-white">USDT {{ level.monthlyDeposit.toLocaleString() }}</td>
                    <td class="py-3 px-2 text-white">USDT {{ level.monthlyBetting.toLocaleString() }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Level Up Bonus - Accordion -->
      <div class="bg-[#212329] rounded-3xl overflow-hidden">
        <div class="p-5">
          <div class="flex items-center justify-between cursor-pointer" @click="toggleAccordion('levelUpBonus')">
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 bg-cover bg-center bg-no-repeat" 
                   style="background-image: url('http://localhost:3845/assets/7ce04d37d66b4ba2a7cfd95b36b1c4ce65b0e223.png')"></div>
              <div>
                <h3 class="text-base font-medium text-white leading-[1.2]">Level Up Bonus</h3>
                <p class="text-[13px] text-[#51b4ff] leading-[1.4]">Get bonus when you level up</p>
              </div>
            </div>
            <div class="w-8 h-8 border border-[#444444] rounded-[50px] flex items-center justify-center backdrop-blur-[5px] transition-transform duration-300"
                 :class="{ 'rotate-180': accordionStates.levelUpBonus }">
              <div class="w-3 h-3">
                <svg 
                  class="w-full h-full text-[#cccccc]"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Accordion Content -->
          <div v-show="accordionStates.levelUpBonus" class="mt-6 pt-6 border-t border-[#444444]">
            <div class="space-y-4 text-[13px] text-[#cccccc] leading-[1.4]">
              <div class="bg-[#2e3037] rounded-lg p-4">
                <h4 class="text-white font-medium mb-2">Level Up Rewards</h4>
                <ul class="space-y-2">
                  <li>• VIP 1 → VIP 2: USDT 500 Bonus</li>
                  <li>• VIP 2 → VIP 3: USDT 1,000 Bonus</li>
                  <li>• VIP 3 → VIP 4: USDT 2,000 Bonus</li>
                  <li>• VIP 4 → VIP 5: USDT 3,000 Bonus</li>
                  <li>• VIP 5 → VIP 6: USDT 5,000 Bonus</li>
                  <li>• VIP 6 → VIP 7: USDT 7,500 Bonus</li>
                  <li>• VIP 7 → VIP 8: USDT 10,000 Bonus</li>
                  <li>• VIP 8 → VIP 9: USDT 15,000 Bonus</li>
                </ul>
              </div>
              <div class="bg-[#2e3037] rounded-lg p-4">
                <h4 class="text-white font-medium mb-2">Requirements</h4>
                <p>Complete monthly deposit and betting requirements to automatically level up and receive bonus rewards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Immediate Withdrawal - Accordion -->
      <div class="bg-[#212329] rounded-3xl overflow-hidden">
        <div class="p-5">
          <div class="flex items-center justify-between cursor-pointer" @click="toggleAccordion('immediateWithdrawal')">
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 bg-cover bg-center bg-no-repeat" 
                   style="background-image: url('http://localhost:3845/assets/376a72458492b163a3a196c8b741778d4d7f4d73.png')"></div>
              <div>
                <h3 class="text-base font-medium text-white leading-[1.2]">Immediate Withdrawal</h3>
                <p class="text-[13px] text-[#51b4ff] leading-[1.4]">Withdraw your winnings instantly</p>
              </div>
            </div>
            <div class="w-8 h-8 border border-[#444444] rounded-[50px] flex items-center justify-center backdrop-blur-[5px] transition-transform duration-300"
                 :class="{ 'rotate-180': accordionStates.immediateWithdrawal }">
              <div class="w-3 h-3">
                <svg 
                  class="w-full h-full text-[#cccccc]"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Accordion Content -->
          <div v-show="accordionStates.immediateWithdrawal" class="mt-6 pt-6 border-t border-[#444444]">
            <div class="space-y-4 text-[13px] text-[#cccccc] leading-[1.4]">
              <div class="bg-[#2e3037] rounded-lg p-4">
                <h4 class="text-white font-medium mb-2">Withdrawal Limits</h4>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span>VIP 1-3:</span>
                    <span class="text-[#51b4ff]">USDT 1,000/day</span>
                  </div>
                  <div class="flex justify-between">
                    <span>VIP 4-6:</span>
                    <span class="text-[#51b4ff]">USDT 5,000/day</span>
                  </div>
                  <div class="flex justify-between">
                    <span>VIP 7-9:</span>
                    <span class="text-[#51b4ff]">USDT 10,000/day</span>
                  </div>
                </div>
              </div>
              <div class="bg-[#2e3037] rounded-lg p-4">
                <h4 class="text-white font-medium mb-2">Processing Time</h4>
                <p>All withdrawals are processed within 5-10 minutes during business hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- By Betting - Accordion -->
      <div class="bg-[#212329] rounded-3xl overflow-hidden">
        <div class="p-5">
          <div class="flex items-center justify-between cursor-pointer" @click="toggleAccordion('byBetting')">
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 bg-cover bg-center bg-no-repeat" 
                   style="background-image: url('http://localhost:3845/assets/376a72458492b163a3a196c8b741778d4d7f4d73.png')"></div>
              <div>
                <h3 class="text-base font-medium text-white leading-[1.2]">By Betting</h3>
                <p class="text-[13px] text-[#51b4ff] leading-[1.4]">Earn rewards through betting</p>
              </div>
            </div>
            <div class="w-8 h-8 border border-[#444444] rounded-[50px] flex items-center justify-center backdrop-blur-[5px] transition-transform duration-300"
                 :class="{ 'rotate-180': accordionStates.byBetting }">
              <div class="w-3 h-3">
                <svg 
                  class="w-full h-full text-[#cccccc]"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Accordion Content -->
          <div v-show="accordionStates.byBetting" class="mt-6 pt-6 border-t border-[#444444]">
            <div class="space-y-4 text-[13px] text-[#cccccc] leading-[1.4]">
              <div class="bg-[#2e3037] rounded-lg p-4">
                <h4 class="text-white font-medium mb-2">Betting Rewards</h4>
                <div class="space-y-3">
                  <div class="flex justify-between items-center">
                    <span>Daily Betting Bonus:</span>
                    <span class="text-[#51b4ff]">0.5% - 2%</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span>Weekly Cashback:</span>
                    <span class="text-[#51b4ff]">1% - 5%</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span>Monthly VIP Bonus:</span>
                    <span class="text-[#51b4ff]">USDT 1,000 - 50,000</span>
                  </div>
                </div>
              </div>
              <div class="bg-[#2e3037] rounded-lg p-4">
                <h4 class="text-white font-medium mb-2">How to Earn</h4>
                <p>Place bets on your favorite games and earn rewards based on your VIP level and betting activity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- VIP Support - Accordion -->
      <div class="bg-[#212329] rounded-3xl overflow-hidden">
        <div class="p-5">
          <div class="flex items-center justify-between cursor-pointer" @click="toggleAccordion('vipSupport')">
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 bg-cover bg-center bg-no-repeat" 
                   style="background-image: url('http://localhost:3845/assets/376a72458492b163a3a196c8b741778d4d7f4d73.png')"></div>
              <div>
                <h3 class="text-base font-medium text-white leading-[1.2]">VIP Support</h3>
                <p class="text-[13px] text-[#51b4ff] leading-[1.4]">Dedicated customer support</p>
              </div>
            </div>
            <div class="w-8 h-8 border border-[#444444] rounded-[50px] flex items-center justify-center backdrop-blur-[5px] transition-transform duration-300"
                 :class="{ 'rotate-180': accordionStates.vipSupport }">
              <div class="w-3 h-3">
                <svg 
                  class="w-full h-full text-[#cccccc]"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Accordion Content -->
          <div v-show="accordionStates.vipSupport" class="mt-6 pt-6 border-t border-[#444444]">
            <div class="space-y-4 text-[13px] text-[#cccccc] leading-[1.4]">
              <div class="bg-[#2e3037] rounded-lg p-4">
                <h4 class="text-white font-medium mb-2">Support Channels</h4>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span>Live Chat:</span>
                    <span class="text-[#51b4ff]">24/7 Available</span>
                  </div>
                  <div class="flex justify-between">
                    <span>VIP Hotline:</span>
                    <span class="text-[#51b4ff]"> +1-800-VIP-HELP</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Email Support:</span>
                    <span class="text-[#51b4ff]">vip@plususdt.com</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Response Time:</span>
                    <span class="text-[#51b4ff]">Within 5 minutes</span>
                  </div>
                </div>
              </div>
              <div class="bg-[#2e3037] rounded-lg p-4">
                <h4 class="text-white font-medium mb-2">VIP Benefits</h4>
                <ul class="space-y-1">
                  <li>• Priority customer service</li>
                  <li>• Dedicated account manager</li>
                  <li>• Exclusive promotions</li>
                  <li>• Faster withdrawal processing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const accordionStates = ref({
  playComp: true, // 기본적으로 열려있음
  levelUpBonus: false,
  immediateWithdrawal: false,
  byBetting: false,
  vipSupport: false
})

const toggleAccordion = (key) => {
  accordionStates.value[key] = !accordionStates.value[key]
}

const vipLevels = ref([
  { level: 1, compRate: 0.10, bonusCap: 4000, monthlyDeposit: 1000, monthlyBetting: 5000 },
  { level: 2, compRate: 0.15, bonusCap: 6000, monthlyDeposit: 2000, monthlyBetting: 10000 },
  { level: 3, compRate: 0.20, bonusCap: 6000, monthlyDeposit: 3000, monthlyBetting: 15000 },
  { level: 4, compRate: 0.25, bonusCap: 8000, monthlyDeposit: 4000, monthlyBetting: 20000 },
  { level: 5, compRate: 0.30, bonusCap: 8000, monthlyDeposit: 5000, monthlyBetting: 25000 },
  { level: 6, compRate: 0.50, bonusCap: 10000, monthlyDeposit: 6000, monthlyBetting: 30000 },
  { level: 7, compRate: 0.60, bonusCap: 10000, monthlyDeposit: 7000, monthlyBetting: 35000 },
  { level: 8, compRate: 0.70, bonusCap: 10000, monthlyDeposit: 8000, monthlyBetting: 40000 },
  { level: 9, compRate: 0.80, bonusCap: 10000, monthlyDeposit: 9000, monthlyBetting: 45000 }
])
</script>

<style scoped>
/* Custom scrollbar for mobile */
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #2e3037;
  border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #51b4ff;
  border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #1dafff;
}

/* Custom styles for smooth transitions */
.transition-transform {
  transition: transform 0.3s ease;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style> 