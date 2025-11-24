<script setup lang='ts'>
import type { HTMLAttributes } from 'vue'

type TextureVariant
  = | 'fabric-of-squares'
    | 'grid-noise'
    | 'inflicted'
    | 'debut-light'
    | 'groovepaper'
    | 'none'

const props = withDefaults(defineProps<{
  variant?: TextureVariant
  opacity?: number
  class?: HTMLAttributes['class']
}>(), {
  variant: 'groovepaper',
  opacity: 0.5,
  class: ''
})

const textureMap: Record<Exclude<TextureVariant, 'none'>, string> = {
  'fabric-of-squares': '/textures/fabric-of-squares.png',
  'grid-noise': '/textures/grid-noise.png',
  'inflicted': '/textures/inflicted.png',
  'debut-light': '/textures/debut-light.png',
  'groovepaper': '/textures/groovepaper.png'
}
const textureUrl = props.variant !== 'none' ? textureMap[props.variant] : null
</script>

<template>
  <div class="relative" :class="props.class">
    <div
      aria-hidden="true" class="pointer-events-none absolute top-0 inset-0"
      :style="{ backgroundImage: `url(${textureUrl})`, backgroundRepeat: 'repeat', opacity }" />
    <div class="relative">
      <slot />
    </div>
  </div>
</template>
