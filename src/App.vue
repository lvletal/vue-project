<template>
  <div id="app" class="min-h-screen">
    <nav class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold text-gray-900">Vue + Storybook + Tailwind</h1>
          </div>
          <div class="flex items-center space-x-4">
            <router-link to="/" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</router-link>
            <router-link to="/token-studio" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Token Studio</router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script> 