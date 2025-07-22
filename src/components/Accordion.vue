<template>
  <div class="accordion-container space-y-2">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item bg-white border border-gray-200 rounded-lg overflow-hidden"
    >
      <!-- Accordion Header -->
      <button
        @click="toggleItem(index)"
        class="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
      >
        <span class="font-medium text-gray-900">{{ item.title }}</span>
        <svg
          :class="[
            'w-5 h-5 transition-transform duration-200',
            openItems.includes(index) ? 'rotate-180' : ''
          ]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Accordion Content -->
      <div
        v-show="openItems.includes(index)"
        class="px-4 py-3 border-t border-gray-200 bg-white"
      >
        <slot :name="`accordion-${index}`" :item="item">
          {{ item.content }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

interface AccordionItem {
  title: string
  content?: string
}

const props = defineProps<{
  items: AccordionItem[]
  allowMultiple?: boolean
  defaultOpen?: number[]
}>()

const openItems = ref<number[]>(props.defaultOpen || [])

const toggleItem = (index: number) => {
  if (props.allowMultiple) {
    const itemIndex = openItems.value.indexOf(index)
    if (itemIndex > -1) {
      openItems.value.splice(itemIndex, 1)
    } else {
      openItems.value.push(index)
    }
  } else {
    openItems.value = openItems.value.includes(index) ? [] : [index]
  }
}
</script>

<style scoped>
.accordion-container {
  /* Container styles */
}
</style> 