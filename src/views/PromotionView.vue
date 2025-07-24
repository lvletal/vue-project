<template>
  <div class="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-4">프로모션</h1>
        <p class="text-gray-400">다양한 프로모션 혜택을 확인하세요</p>
      </div>

      <!-- Promotion Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Welcome Bonus -->
        <div class="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">신규 가입 보너스</h3>
            <div class="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
              HOT
            </div>
          </div>
          <p class="text-blue-100 mb-4">첫 입금 시 100% 보너스 제공</p>
          <div class="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
            <div class="text-2xl font-bold text-yellow-400">USDT 1,000</div>
            <div class="text-sm text-blue-200">최대 보너스</div>
          </div>
          <button class="w-full bg-yellow-400 text-yellow-900 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
            신청하기
          </button>
        </div>

        <!-- Daily Bonus -->
        <div class="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">데일리 보너스</h3>
            <div class="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold">
              DAILY
            </div>
          </div>
          <p class="text-green-100 mb-4">매일 로그인 시 보너스 지급</p>
          <div class="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
            <div class="text-2xl font-bold text-green-400">USDT 50</div>
            <div class="text-sm text-green-200">일일 보너스</div>
          </div>
          <button class="w-full bg-green-400 text-green-900 py-2 rounded-lg font-semibold hover:bg-green-300 transition-colors">
            받기
          </button>
        </div>

        <!-- VIP Bonus -->
        <div class="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">VIP 전용 보너스</h3>
            <div class="bg-purple-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold">
              VIP
            </div>
          </div>
          <p class="text-purple-100 mb-4">VIP 회원 전용 특별 혜택</p>
          <div class="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
            <div class="text-2xl font-bold text-purple-400">USDT 5,000</div>
            <div class="text-sm text-purple-200">월 보너스</div>
          </div>
          <button class="w-full bg-purple-400 text-purple-900 py-2 rounded-lg font-semibold hover:bg-purple-300 transition-colors">
            자세히 보기
          </button>
        </div>

        <!-- Referral Bonus -->
        <div class="bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">추천인 보너스</h3>
            <div class="bg-orange-400 text-orange-900 px-3 py-1 rounded-full text-sm font-bold">
              REFER
            </div>
          </div>
          <p class="text-orange-100 mb-4">친구 초대 시 양쪽 보너스</p>
          <div class="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
            <div class="text-2xl font-bold text-orange-400">USDT 200</div>
            <div class="text-sm text-orange-200">추천 보너스</div>
          </div>
          <button class="w-full bg-orange-400 text-orange-900 py-2 rounded-lg font-semibold hover:bg-orange-300 transition-colors">
            추천 코드 생성
          </button>
        </div>

        <!-- Cashback -->
        <div class="bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">캐시백</h3>
            <div class="bg-red-400 text-red-900 px-3 py-1 rounded-full text-sm font-bold">
              CASHBACK
            </div>
          </div>
          <p class="text-red-100 mb-4">손실 시 일정 비율 환급</p>
          <div class="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
            <div class="text-2xl font-bold text-red-400">최대 20%</div>
            <div class="text-sm text-red-200">캐시백 비율</div>
          </div>
          <button class="w-full bg-red-400 text-red-900 py-2 rounded-lg font-semibold hover:bg-red-300 transition-colors">
            신청하기
          </button>
        </div>

        <!-- Tournament -->
        <div class="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">토너먼트</h3>
            <div class="bg-indigo-400 text-indigo-900 px-3 py-1 rounded-full text-sm font-bold">
              TOURNAMENT
            </div>
          </div>
          <p class="text-indigo-100 mb-4">주간 토너먼트 참여</p>
          <div class="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
            <div class="text-2xl font-bold text-indigo-400">USDT 10,000</div>
            <div class="text-sm text-indigo-200">총 상금</div>
          </div>
          <button class="w-full bg-indigo-400 text-indigo-900 py-2 rounded-lg font-semibold hover:bg-indigo-300 transition-colors">
            참여하기
          </button>
        </div>
      </div>

      <!-- Terms and Conditions -->
      <div class="mt-12 bg-gray-800 rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4">프로모션 이용약관</h3>
        <div class="text-sm text-gray-300 space-y-2">
          <p>• 모든 프로모션은 중복 신청이 불가능합니다.</p>
          <p>• 보너스는 출금 전 베팅 요건을 충족해야 합니다.</p>
          <p>• 프로모션 혜택은 사전 공지 없이 변경될 수 있습니다.</p>
          <p>• 부정한 방법으로 보너스를 받은 경우 계정이 정지될 수 있습니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 프로모션 페이지 로직
</script>

<style scoped>
/* 프로모션 페이지 스타일 */
</style> 