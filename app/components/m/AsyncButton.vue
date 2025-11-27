<script setup lang="ts">
import { LayoutGroup, Motion } from 'motion-v'
import type { $Transition, VariantType } from 'motion-v'

const iconVariants: { [k: string]: VariantType } = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 }
}
const layoutTransition: $Transition = { type: 'spring', bounce: 0.25, duration: 0.4 }
const iconTransition: $Transition = { type: 'spring', bounce: 0.4, duration: 0.3, opacity: { delay: 0 } }

const awaitingPromise = ref(false)
const isAwaiting = computed(() => props.awaiting || awaitingPromise.value)

const props = defineProps<{
  icon?: string
  awaiting?: boolean
  type?: 'submit' | 'reset' | 'button'
  color?: 'neutral' | 'primary' | 'error' | 'success' | 'warning' | 'info'
  variant?: 'shadow' | 'outline' | 'ghost' | 'link'
  disabled?: boolean

  promise?: () => Promise<null | unknown>
}>()
const emits = defineEmits<{ (e: 'click', ev: MouseEvent): void }>()

function onClick(ev: MouseEvent) {
  if (isAwaiting.value || props.disabled) return
  emits('click', ev)
  if (!props.promise) return
  awaitingPromise.value = true
  props.promise().finally(() => (awaitingPromise.value = false))
}
</script>

<template>
  <LayoutGroup>
    <Motion as="div" layout :transition="layoutTransition">
      <UButton
        :disabled="isAwaiting" :type="type" :variant="variant as any" :color="color"
        class="items-center" @click="onClick">
        <Motion
          v-if="isAwaiting" key="loading-icon" layout :variants="iconVariants" initial="hidden"
          animate="show" :transition="iconTransition" as="div" class="flex items-center">
          <Icon name="lucide:loader" />
        </Motion>
        <Motion
          v-else-if="icon" key="icon" layout :variants="iconVariants" initial="hidden"
          animate="show" :transition="iconTransition" as="div" class="flex items-center">
          <Icon :name="icon" />
        </Motion>
        <Motion v-if="$slots.default" key="content" as="div" layout :transition="layoutTransition">
          <slot />
        </Motion>
      </UButton>
    </Motion>
  </LayoutGroup>
</template>
