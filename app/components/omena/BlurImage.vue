<script setup lang="ts">
interface Props {
  height?: number | string
  width?: number | string
  src: string
  class?: string
  alt?: string
  fill?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  height: 150,
  width: 100,
  class: '',
  alt: 'Background',
  fill: false
})

const isLoading = ref(true)

function handleLoad() {
  isLoading.value = false
}
</script>

<template>
  <NuxtImg
    :class="[isLoading ? 'blur-sm' : 'blur-0', props.class, fill ? 'size-full' : '']"
    :src="src" :width="width" :height="height" :alt="alt" @load="handleLoad" />
</template>
