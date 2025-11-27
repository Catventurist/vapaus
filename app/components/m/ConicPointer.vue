<script setup lang="ts">
import { motion, useMotionValue, useTransform, useDomRef } from 'motion-v'
import { onMounted, ref } from 'vue'

const elementRef = useDomRef()
const size = ref({ width: 0, height: 0, top: 0, left: 0 })
const gradientX = useMotionValue(0.5)
const gradientY = useMotionValue(0.5)
const background = useTransform(
  () =>
    `conic-gradient(from 0deg at calc(${
      gradientX.get() * 100
    }% - ${size.value.left}px) calc(${
      gradientY.get() * 100
    }% - ${size.value.top}px), #0cdcf7, #ff0088, #fff312, #0cdcf7)`
)

function measure() {
  if (!elementRef.value) return
  const rect = elementRef.value.getBoundingClientRect()
  size.value = {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left
  }
}

function handlePointerMove(e: { clientX: number, clientY: number }) {
  gradientX.set(e.clientX / size.value.width)
  gradientY.set(e.clientY / size.value.height)
}

onMounted(() => {
  measure()
})
</script>

<template>
  <div class="absolute inset-0 flex items-center justify-center" @pointermove="handlePointerMove">
    <motion.div
      ref="elementRef" class="size-full rounded-sm opacity-20"
      :style="{ background }" @pointerenter="measure" />
  </div>
</template>
