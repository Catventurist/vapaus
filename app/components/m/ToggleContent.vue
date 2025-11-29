<script setup lang="ts">
import { LayoutGroup, Motion } from 'motion-v'
import type { HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<{
  icon?: string
  label?: string
  content?: string
  class?: HTMLAttributes['class']
}>(), {
  icon: 'simple-icons-stackblitz',
  label: '',
  content: '',
  class: ''
})

const isOpen = ref(false)
function handleClick() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <LayoutGroup>
    <Motion
      class="bg-radial from-muted/20 to-primary/10 p-2 border border-warning/40" :layout="true" :class="props.class"
      :initial="{ borderRadius: '8px' }">
      <Motion
        as="div" class="flex flex-row items-center gap-2 text-lg text-primary font-semibold cursor-pointer"
        :layout="true" :data-a="isOpen" as-child>
        <UButton
          variant="soft" :label="props.label" :icon="isOpen ? 'lucide-plus' : props.icon"
          :ui="{ leadingIcon: 'duration-300 group-hover:rotate-45' }" class="group" @click="handleClick" />
      </Motion>
      <Motion
        v-if="isOpen" :layout="true" class="mt-4 text-muted border-info" :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }" :transition="{ delay: 0.2 }">
        <p class="text-info text-lg">
          {{ props.content }}
        </p>
        <slot />
      </Motion>
    </Motion>
  </LayoutGroup>
</template>
