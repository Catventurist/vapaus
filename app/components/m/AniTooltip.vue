<script setup lang="ts">
import { computed, ref } from 'vue'
import { Motion } from 'motion-v'

interface Item {
  id: number
  name: string
  designation: string
  image: string
}

defineProps<{
  items: Item[]
}>()

const hoveredIndex = ref<number | null>(null)
const mouseX = ref<number>(0)

const rotation = computed<number>(() => {
  const x = mouseX.value
  return (x / 100) * 50
})

const translation = computed<number>(() => {
  const x = mouseX.value
  return (x / 100) * 50
})

function handleMouseEnter(event: MouseEvent, itemId: number) {
  hoveredIndex.value = itemId
  const rect = (event.target as HTMLElement)?.getBoundingClientRect()
  const halfWidth = rect.width / 2
  mouseX.value = event.clientX - rect.left - halfWidth
}

function handleMouseMove(event: MouseEvent) {
  const rect = (event.target as HTMLElement)?.getBoundingClientRect()
  const halfWidth = rect.width / 2
  mouseX.value = event.clientX - rect.left - halfWidth
}
</script>

<template>
  <div
    v-for="item in items" :key="item.id" class="group relative -mr-4"
    @mouseenter="(e) => handleMouseEnter(e, item.id)" @mouseleave="hoveredIndex = null" @mousemove="handleMouseMove">
    <Motion
      v-if="hoveredIndex === item.id" :initial="{ opacity: 0, y: 20, scale: 0.6 }"
      :animate="{ opacity: 1, y: 0, scale: 1 }" :transition="{ type: 'spring', stiffness: 260, damping: 10 }"
      :exit="{ opacity: 0, y: 20, scale: 0.6 }" :style="{ translateX: `${translation}px`, rotate: `${rotation}deg` }"
      class="absolute left-1/2 -top-16 z-50 flex -translate-x-1/2 flex-col items-center justify-center whitespace-nowrap rounded-md bg-default/80 px-4 py-2 text-xs">
      <div class="absolute right-1/2 translate-x-1/2 -bottom-px z-30 h-px w-2/5 me-1 bg-linear-to-r from-transparent via-emerald-500 to-transparent" />
      <div class="absolute left-1/2 -translate-x-1/2 -bottom-px z-30 h-px w-2/5 ms-1 bg-linear-to-r from-transparent via-sky-500 to-transparent" />
      <div class="relative z-30 text-primary">
        {{ item.name }}
      </div>
      <div class="text-xs text-muted">
        {{ item.designation }}
      </div>
    </Motion>
    <NuxtImg
      :src="item.image" :alt="item.name"
      class="relative size-14 rounded-full object-cover object-top transition duration-500 group-hover:z-30 group-hover:scale-105" />
  </div>
</template>
