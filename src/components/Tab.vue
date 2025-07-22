<template>
  <div class="tab-container">
    <!-- Tab Headers -->
    <div class="tab-headers flex border-b border-gray-200">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[
          'px-4 py-2 text-sm font-medium transition-colors duration-200',
          activeTab === index
            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
        ]"
      >
        {{ tab.title }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content p-4">
      <div v-if="tabs[activeTab]">
        <slot :name="`tab-${activeTab}`" :tab="tabs[activeTab]">
          {{ tabs[activeTab].content }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

interface Tab {
  title: string
  content?: string
}

const props = defineProps<{
  tabs: Tab[]
  defaultTab?: number
}>()

const activeTab = ref(props.defaultTab || 0)
</script>

<style scoped>
.tab-container {
  @apply bg-white rounded-lg shadow-sm;
}
</style> 