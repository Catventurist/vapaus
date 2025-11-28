<script setup lang="ts">
import { animate, useMotionValue, useTransform, RowValue, type AnimationPlaybackControlsWithThen } from 'motion-v'
import { onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  min?: number
  max?: number
  duration?: number
}>(), {
  min: 0,
  max: 100,
  duration: 3
})

const count = useMotionValue(props.min)
const rounded = useTransform(() => Math.round(count.get()))

let controls: AnimationPlaybackControlsWithThen

onMounted(() => {
  controls = animate(count, props.max, { duration: props.duration })
})

onUnmounted(() => {
  controls?.stop()
})
</script>

<template>
  <span>
    <RowValue :value="rounded" />
  </span>
</template>
