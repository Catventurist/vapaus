<script setup lang="ts">
import { Motion } from 'motion-v'

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1
  }
}

const items = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1
  }
}

const values = [
  {
    title: $t('values.innovation.title'),
    description: $t('values.innovation.description'),
    icon: 'lucide-lightbulb'
  },
  {
    title: $t('values.integrity.title'),
    description: $t('values.integrity.description'),
    icon: 'lucide-shield'
  },
  {
    title: $t('values.collaboration.title'),
    description: $t('values.collaboration.description'),
    icon: 'lucide-users'
  },
  {
    title: $t('values.excellence.title'),
    description: $t('values.excellence.description'),
    icon: 'lucide-sparkles'
  },
  {
    title: $t('values.adaptability.title'),
    description: $t('values.adaptability.description'),
    icon: 'lucide-refresh-cw'
  },
  {
    title: $t('values.empathy.title'),
    description: $t('values.empathy.description'),
    icon: 'lucide-heart-handshake'
  },
  {
    title: $t('values.purpose.title'),
    description: $t('values.purpose.description'),
    icon: 'lucide-target'
  },
  {
    title: $t('values.transparency.title'),
    description: $t('values.transparency.description'),
    icon: 'lucide-package-open'
  },
  {
    title: $t('values.sustainability.title'),
    description: $t('values.sustainability.description'),
    icon: 'lucide-tree-pine'
  }
]
</script>

<template>
  <UPageSection id="values" :title="$t('header.values.title')" :description="$t('header.values.description')">
    <div class="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
      <Motion
        initial="hidden" animate="visible" :variants="container"
        :transition="{ type: 'spring', delayChildren: 0.5, staggerChildren: 0.2 }" as="div"
        class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <Motion
          v-for="value in values" :key="value.title" :variants="items" as="div"
          class="bg-card/20 group flex flex-col rounded-lg border border-primary/20 p-6 duration-500 hover:bg-radial-[at_25%_25%] from-transparent to-primary/20 to-75%">
          <div class="bg-primary/10 text-primary mb-4 flex size-12 items-center justify-center rounded-md">
            <Icon :name="value.icon" class="text-primary size-10 duration-300 group-hover:scale-110" />
          </div>
          <h3 class="mb-2 text-xl duration-300 group-hover:text-primary">
            {{ value.title }}
          </h3>
          <p class="text-muted duration-300 group-hover:text-default">
            {{ value.description }}
          </p>
        </Motion>
      </Motion>
    </div>
  </UPageSection>
</template>
