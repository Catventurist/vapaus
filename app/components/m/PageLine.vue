<script lang="ts" setup>
import type { TimelineItem } from '@nuxt/ui'

const { locale } = useI18n()
const items = ref<TimelineItem[]>([
  {
    username: 'Catventurist',
    date: '2025-11-22T14:58:55Z',
    action: $t('line.open'),
    avatar: {
      src: '/cat.png'
    }
  },
  {
    username: 'Catventurist',
    date: '2025-11-22T19:30:14+02:00',
    action: $t('line.mark'),
    icon: 'i-lucide-check-circle'
  },
  {
    username: 'Kitty',
    date: '2025-11-21T11:01:20Z',
    action: $t('line.comment'),
    description: $t('line.changes'),
    avatar: {
      src: '/cat.png'
    }
  },
  {
    username: 'Catventurist',
    date: '2025-11-21T11:01:20Z',
    action: $t('line.comment'),
    description: $t('line.looks'),
    avatar: {
      src: '/cat.png'
    }
  },
  {
    username: 'Kitty',
    date: '2025-11-21T11:01:20Z',
    action: $t('line.merge'),
    icon: 'i-lucide-git-merge'
  }
])
</script>

<template>
  <UTimeline
    :items="items" :reverse="false" size="lg" class="w-96"
    :ui="{ date: 'float-end ms-1', description: 'px-3 py-2 ring ring-default mt-2 rounded-md text-default' }">
    <template #title="{ item }">
      <span>{{ item.username }}</span>
      <span class="font-normal text-muted">
        &nbsp;{{ item.action }}
      </span>
    </template>
    <template #date="{ item }">
      <NuxtTime :datetime="String(item.date)" :locale="locale" relative />
    </template>
  </UTimeline>
</template>
