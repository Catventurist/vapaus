<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

interface LampEffectProps {
  delay?: number
  duration?: number
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<LampEffectProps>(), {
  delay: 0.5,
  duration: 0.8,
  class: ''
})

const durationInSeconds = computed(() => `${props.duration}s`)
const delayInSeconds = computed(() => `${props.delay}s`)
</script>

<template>
  <div
    class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0"
    :class="$props.class">
    <div class="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
      <div
        :style="{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }"
        class="animate-conic-gradient bg-gradient-conic absolute inset-auto right-1/2 h-56 w-60 overflow-visible from-primary via-transparent to-transparent text-default opacity-50 [--conic-position:from_70deg_at_center_top]">
        <div
          class="absolute bottom-0 left-0 z-20 h-40 w-full bg-default/80 mask-[linear-gradient(to_top,default,transparent)]" />
        <div
          class="absolute bottom-0 left-0 z-20 h-full w-40 bg-default/80 mask-[linear-gradient(to_right,default,transparent)]" />
      </div>
      <div
        :style="{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }"
        class="animate-conic-gradient bg-gradient-conic absolute inset-auto left-1/2 h-56 w-60 from-transparent via-transparent to-primary text-default opacity-50 [--conic-position:from_290deg_at_center_top]">
        <div
          class="absolute bottom-0 right-0 z-20 h-full w-40 bg-default/80 mask-[linear-gradient(to_left,default,transparent)]" />
        <div
          class="absolute bottom-0 right-0 z-20 h-40 w-full bg-default/80 mask-[linear-gradient(to_top,default,transparent)]" />
      </div>
      <div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-default/80 blur-2xl" />
      <div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
      <div
        class="absolute inset-auto z-50 h-36 w-md -translate-y-1/2 rounded-full bg-primary opacity-50 blur-3xl" />
      <div
        class="animate-spotlight absolute inset-auto z-30 h-36 w-32 -translate-y-24 rounded-full bg-primary blur-2xl" />
      <div class="animate-glowing-line absolute inset-auto z-50 h-0.5 w-60 -translate-y-28 bg-primary" />
      <div class="absolute inset-auto z-40 h-44 w-full translate-y-50 bg-default/80" />
    </div>
    <div class="relative z-50 flex -translate-y-80 flex-col items-center px-5">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* Spotlight Animation */
.animate-spotlight {
  animation: spotlight-anim ease-in-out v-bind(durationInSeconds) forwards;
  animation-delay: v-bind(delayInSeconds);
}

/* Glowing Line Animation */
.animate-glowing-line {
  animation: glowing-line-anim ease-in-out v-bind(durationInSeconds) forwards;
  animation-delay: v-bind(delayInSeconds);
}

/* Conic Gradient Animation */
.animate-conic-gradient {
  animation: conic-gradient-anim ease-in-out v-bind(durationInSeconds) forwards;
  animation-delay: v-bind(delayInSeconds);
}

/* Keyframes for Spotlight */
@keyframes spotlight-anim {
  from {
    width: 8rem;
  }

  to {
    width: 16rem;
  }
}

/* Keyframes for Glowing Line */
@keyframes glowing-line-anim {
  from {
    width: 15rem;
  }

  to {
    width: 30rem;
  }
}

/* Keyframes for Conic Gradient */
@keyframes conic-gradient-anim {
  from {
    opacity: 0.5;
    width: 15rem;
  }

  to {
    opacity: 1;
    width: 30rem;
  }
}
</style>
