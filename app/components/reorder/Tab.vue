<script setup lang="ts">
import type { Ingredient } from './ingredients.ts'
import { ReorderItem, motion } from 'motion-v'

const { item, isSelected } = defineProps<{
  item: Ingredient
  isSelected: boolean
}>()

defineEmits<{
  (e: 'click'): void
  // eslint-disable-next-line @typescript-eslint/unified-signatures
  (e: 'remove'): void
}>()
</script>

<template>
  <ReorderItem
    :id="item.label" :value="item" :initial="{ opacity: 0, y: 30 }"
    :animate="{ opacity: 1, backgroundColor: isSelected ? 'var(--ui-muted)' : 'var(--ui-default)', y: 0, transition: { duration: 0.2 } }"
    :exit="{ opacity: 0, y: 20, transition: { duration: 0.3 } }" :while-drag="{ backgroundColor: 'var(--ui-muted)', opacity: 0.7 }"
    :class="{ selected: isSelected }" class="relative rounded-md flex flex-row justify-center" @pointerdown="$emit('click')">
    <motion.span layout="position" class="flex flex-row text-center justify-center">
      {{ item.icon }} {{ item.label }}
    </motion.span>
    <motion.div layout>
      <motion.span
        :initial="false" :animate="{ backgroundColor: isSelected ? 'var(--ui-muted)' : 'var(--ui-default)' }"
        @pointerdown.stop="$emit('remove')" class="bg-muted text-muted p-2 duration-300 hover:text-default">
        x
      </motion.span>
    </motion.div>
  </ReorderItem>
</template>
