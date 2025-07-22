<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <h1 class="text-2xl font-bold text-gray-900">반응형 데모 페이지</h1>
          <nav class="hidden md:flex space-x-8">
            <a href="#" class="text-gray-600 hover:text-gray-900">홈</a>
            <a href="#" class="text-gray-600 hover:text-gray-900">서비스</a>
            <a href="#" class="text-gray-600 hover:text-gray-900">문의</a>
          </nav>
          <button class="md:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          반응형 디자인
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          다양한 화면 크기에서 최적화된 사용자 경험을 제공합니다.
          화면 크기를 조절해보세요!
        </p>
      </div>

      <!-- Grid Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="w-12 h-12 bg-blue-500 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">모바일 최적화</h3>
          <p class="text-gray-600">작은 화면에서도 완벽한 사용자 경험을 제공합니다.</p>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="w-12 h-12 bg-green-500 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">태블릿 지원</h3>
          <p class="text-gray-600">중간 크기 화면에서도 최적의 레이아웃을 유지합니다.</p>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="w-12 h-12 bg-purple-500 rounded-lg mb-4"></div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">데스크톱 경험</h3>
          <p class="text-gray-600">큰 화면에서 풍부한 콘텐츠와 기능을 제공합니다.</p>
        </div>
      </div>

      <!-- Feature Section -->
      <div class="bg-white rounded-xl shadow-lg p-8 mb-16">
        <h3 class="text-3xl font-bold text-gray-900 mb-8 text-center">반응형 특징</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 class="text-xl font-semibold text-gray-900 mb-4">유연한 그리드 시스템</h4>
            <p class="text-gray-600 mb-4">화면 크기에 따라 자동으로 조정되는 그리드 레이아웃을 사용합니다.</p>
            <ul class="space-y-2 text-gray-600">
              <li>• 모바일: 1열 레이아웃</li>
              <li>• 태블릿: 2열 레이아웃</li>
              <li>• 데스크톱: 3열 레이아웃</li>
            </ul>
          </div>
          <div>
            <h4 class="text-xl font-semibold text-gray-900 mb-4">적응형 타이포그래피</h4>
            <p class="text-gray-600 mb-4">화면 크기에 맞게 글자 크기가 자동으로 조정됩니다.</p>
            <ul class="space-y-2 text-gray-600">
              <li>• 모바일: 작은 글자 크기</li>
              <li>• 태블릿: 중간 글자 크기</li>
              <li>• 데스크톱: 큰 글자 크기</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <h3 class="text-3xl font-bold text-gray-900 mb-4">지금 시작하세요</h3>
        <p class="text-xl text-gray-600 mb-8">반응형 디자인의 힘을 경험해보세요</p>
        <button class="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          시작하기
        </button>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 class="text-lg font-semibold mb-4">회사 정보</h4>
            <p class="text-gray-300">최고의 반응형 디자인을 제공하는 회사입니다.</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">서비스</h4>
            <ul class="space-y-2 text-gray-300">
              <li>웹 디자인</li>
              <li>모바일 앱</li>
              <li>UI/UX 디자인</li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">연락처</h4>
            <p class="text-gray-300">info@example.com</p>
            <p class="text-gray-300">+82 123-456-7890</p>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 반응형 디자인 데모. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 반응형 데모 페이지 컴포넌트
</script>

<style scoped>
/* 추가적인 반응형 스타일이 필요한 경우 여기에 작성 */
</style> 