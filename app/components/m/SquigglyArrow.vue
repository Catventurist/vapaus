<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<{
  width?: number
  height?: number
  strokeWidth?: number
  class?: HTMLAttributes['class']
  direction?: 'right' | 'left' | 'up' | 'down'
  variant?: 'wavy' | 'bouncy' | 'smooth'
}>(), {
  width: 200,
  height: 100,
  strokeWidth: 4,
  class: '',
  direction: 'right',
  variant: 'wavy',
})

const paths = {
  wavy: {
    body: 'M 15 50 Q 35 35, 55 48 T 95 52 Q 115 48, 135 50 Q 145 52, 155 48',
    head: 'M 155 48 Q 147 44, 143 42 M 155 48 Q 148 53, 144 56'
  },
  bouncy: {
    body: 'M 15 50 Q 45 32, 65 50 Q 85 68, 105 50 Q 125 32, 145 50 Q 152 54, 158 50',
    head: 'M 158 50 Q 149 45, 145 43 M 158 50 Q 150 56, 146 59'
  },
  smooth: {
    body: 'M 15 50 Q 60 38, 100 48 Q 135 56, 158 50',
    head: 'M 158 50 Q 149 45, 145 43 M 158 50 Q 150 56, 146 59'
  }
}

const rotations = {
  right: 'rotate(0)',
  left: 'rotate(180 100 50)',
  down: 'rotate(90 100 50)',
  up: 'rotate(-90 100 50)',
}

const selectedPath = paths[props.variant]
const rotation = rotations[props.direction]
</script>

<template>
  <svg :width="props.width" :height="props.height" viewBox="-10 -10 220 120" fill="none" :class="props.class">
    <g :transform="rotation" class="group">
      <path 
        :d="selectedPath.body" stroke="currentColor" :stroke-width="props.strokeWidth"
        stroke-linecap="round" fill="none" class="duration-300 group-hover:text-primary group-active:text-default" />
      <path 
        :d="selectedPath.head" stroke="currentColor" :stroke-width="props.strokeWidth" 
        stroke-linecap="round" class="duration-300 group-hover:text-primary group-active:text-default" />
    </g>
  </svg>
</template>
