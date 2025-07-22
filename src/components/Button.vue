<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * Button 컴포넌트
 * 
 * 다양한 스타일과 크기의 버튼을 제공합니다.
 * 
 * @example
 * ```vue
 * <Button variant="primary" size="md" @click="handleClick">
 *   클릭하세요
 * </Button>
 * ```
 */
interface Props {
  /** 버튼의 스타일 변형 */
  variant?: 'primary' | 'secondary' | 'outline'
  /** 버튼의 크기 */
  size?: 'sm' | 'md' | 'lg'
  /** 비활성화 상태 */
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false
})

/**
 * 버튼 클릭 이벤트
 */
defineEmits<{
  click: []
}>()

const buttonClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }
  
  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  
  return `${baseClasses} ${variantClasses[props.variant]} ${sizeClasses[props.size]} ${disabledClasses}`
})
</script> 