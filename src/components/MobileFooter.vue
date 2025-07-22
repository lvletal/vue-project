<template>
  <!-- Language Selector -->
  <div class="flex items-center justify-center mb-4">
    <div class="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span class="text-sm">EN</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  </div>

  <!-- Links -->
  <div class="flex justify-center space-x-6 mb-4 text-sm text-gray-400">
    <a href="#" class="hover:text-white">Terms And Conditions</a>
    <a href="#" class="hover:text-white">Privacy Policy</a>
    <a href="#" class="hover:text-white">Responsible Gambling</a>
    <a href="#" class="hover:text-white">Affiliate</a>
  </div>

  <!-- Support Button -->
  <div class="flex justify-center mb-4">
    <button class="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
      </svg>
      <span>Support On Telegram</span>
    </button>
  </div>

  <!-- License -->
  <div class="flex items-center justify-center space-x-2">
    <div class="w-6 h-6 bg-red-600 rounded-full"></div>
    <span class="text-sm text-gray-400">Anjouan Gaming License</span>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here
</script> 