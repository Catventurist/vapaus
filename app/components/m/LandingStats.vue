<script setup lang="ts">
import { motion, useInView } from 'motion-v'

const STAGGER_DELAY = 0.1
const ICON_STAGGER_OFFSET = 0.2
const VALUE_DELAY_OFFSET = 0.3
const TREND_STAGGER_OFFSET = 0.5

type StatsCardsProps = {
  value?: string
  label?: string
  description?: string
  icon?: string
  trend?: {
    value?: string
    direction?: 'up' | 'down'
  }
}

const stats: StatsCardsProps[] = [
  {
    value: '2.5',
    label: $t('stats.revenue.title'),
    description: $t('stats.revenue.description'),
    icon: 'lucide-euro',
    trend: { value: '+12%', direction: 'up' }
  },
  {
    value: '2',
    label: $t('stats.members.title'),
    description: $t('stats.members.description'),
    icon: 'lucide-users',
    trend: { value: '+8%', direction: 'up' }
  },
  {
    value: '98%',
    label: $t('stats.satisfaction.title'),
    description: $t('stats.satisfaction.description'),
    icon: 'lucide-star',
    trend: { value: '+2%', direction: 'up' }
  },
  {
    value: '2',
    label: $t('stats.downloads.title'),
    description: $t('stats.downloads.description'),
    icon: 'lucide-smartphone',
    trend: { value: '+15%', direction: 'up' }
  }
]
const aref = ref(null)
const isInView = useInView(aref)
</script>

<template>
  <div class="mx-auto max-w-7xl px-6">
    <motion.div
      class="mb-16 text-center" :initial="{ opacity: 0, y: 20 }" :transition="{ duration: 0.4 }"
      :in-view-options="{ once: true }" :while-in-view="{ opacity: 1, y: 0 }">
      <h2 class="mb-4 font-bold text-3xl text-default lg:text-4xl">
        {{ $t('stats.title') }}
      </h2>
      <p class="mx-auto max-w-2xl text-muted text-lg">
        {{ $t('stats.description') }}
      </p>
    </motion.div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" ref="aref">
      <motion.div
        v-for="(stat, index) in stats" :key="stat.label"
        :animate="isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }"
        class="group relative overflow-hidden rounded-2xl border border-border bg-linear-to-br from-background to-background/50 p-6 transition-all hover:scale-105 hover:border-primary active:scale-95 shadow-md shadow-primary"
        :initial="{ opacity: 0, y: 30, scale: 0.9 }"
        :transition="{ duration: 0.6, delay: index * STAGGER_DELAY, type: 'spring', stiffness: 100 }">
        <motion.div
          :animate="isInView ? { rotate: 0, scale: 1 } : { rotate: -10, scale: 0.8 }"
          :initial="{ rotate: -10, scale: 0.8 }" class="mb-4 text-3xl"
          :transition="{ duration: 0.6, delay: index * STAGGER_DELAY + ICON_STAGGER_OFFSET, type: 'spring', stiffness: 200 }">
          <Icon :name="String(stat.icon)" class="size-8" />
        </motion.div>
        <motion.div
          :animate="isInView ? { scale: 1 } : { scale: 0.5 }" :initial="{ scale: 0.5 }"
          class="mb-1 font-bold text-2xl text-default lg:text-3xl"
          :transition="{ duration: 0.8, delay: index * STAGGER_DELAY + VALUE_DELAY_OFFSET, type: 'spring', stiffness: 200 }">
          {{ stat.value }}
        </motion.div>
        <h3 class="mb-2 font-semibold text-default text-sm uppercase tracking-wide">
          {{ stat.label }}
        </h3>
        <p v-if="stat.description" class="mb-3 text-muted text-xs">
          {{ stat.description }}
        </p>
        <motion.div
          v-if="stat.trend" :animate="isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }"
          class="inline-flex items-center rounded-full px-2 py-1 font-medium text-xs"
          :class="`${stat.trend.direction === 'up'
            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
            : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'}`" :initial="{ opacity: 0, x: -10 }"
          :transition="{ duration: 0.4, delay: index * STAGGER_DELAY + TREND_STAGGER_OFFSET }">
          <span class="me-1">
            {{ stat.trend.direction === "up" ? "↗" : "↘" }}
          </span>
          {{ stat.trend.value }}
        </motion.div>
        <motion.div
          class="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100"
          :initial="{ opacity: 0 }" :transition="{ duration: 0.3 }" :hover="{ opacity: 1 }" />
      </motion.div>
    </div>
  </div>
</template>
