<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items: TimelineItem[] = [
  {
    date: '18.11.2025',
    title: $t('steps.start.title'),
    description: $t('steps.start.description'),
    icon: 'i-lucide-rocket',
    value: 'kickoff'
  },
  {
    date: '1.12.2025',
    title: $t('steps.design.title'),
    description: $t('steps.design.description'),
    icon: 'i-lucide-palette',
    value: 'design'
  },
  {
    date: '20.12.2025',
    title: $t('steps.dev.title'),
    description: $t('steps.dev.description'),
    icon: 'i-lucide-code',
    value: 'development'
  },
  {
    date: '1.1.2026',
    title: $t('steps.dep.title'),
    description: $t('steps.dep.description'),
    icon: 'i-lucide-check-circle',
    value: 'deployment'
  }
]
</script>

<template>
  <UPageSection :title="$t('faq.roadmap.title')" :description="$t('faq.roadmap.description')" class="overflow-hidden">
    <UTimeline
      :items="items" :default-value="0" class="translate-x-[calc(50%-1rem)]"
      :ui="{ item: 'even:flex-row-reverse even:-translate-x-[calc(100%-2rem)] even:text-end rounded-md duration-300 hover:bg-primary/10 hover:scale-110 active:scale-90' }" />
  </UPageSection>
</template>
