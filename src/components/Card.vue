<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="px-6 py-4 border-b border-gray-200">
      <slot name="header" />
    </div>
    <div class="px-6 py-4">
      <slot />
    </div>
    <div v-if="$slots.footer" class="px-6 py-4 border-t border-gray-200 bg-gray-50">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * Card 컴포넌트
 * 
 * 콘텐츠를 담는 카드 컨테이너를 제공합니다.
 * 헤더, 본문, 푸터 슬롯을 지원합니다.
 * 
 * @example
 * ```vue
 * <Card variant="elevated">
 *   <template #header>
 *     <h3>카드 제목</h3>
 *   </template>
 *   <p>카드 내용입니다.</p>
 *   <template #footer>
 *     <Button>확인</Button>
 *   </template>
 * </Card>
 * ```
 */
interface Props {
  /** 카드의 스타일 변형 */
  variant?: 'default' | 'elevated' | 'outlined'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const cardClasses = computed(() => {
  const baseClasses = 'rounded-lg'
  
  const variantClasses = {
    default: 'border border-gray-200',
    elevated: 'shadow-lg',
    outlined: 'border-2 border-gray-300'
  }
  
  return `${baseClasses} ${variantClasses[props.variant]}`
})
</script> 