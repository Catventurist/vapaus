<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const localePath = useLocalePath()
const intItems = [
  {
    title: $t('inte.vscodium.title'),
    description: $t('inte.vscodium.description'),
    to: 'https://github.com/VSCodium/vscodium/blob/master/docs/index.md',
    icon: 'simple-icons-vscodium',
    color: 'info'
  },
  {
    title: $t('inte.stackblitz.title'),
    description: $t('inte.stackblitz.description'),
    to: 'https://developer.stackblitz.com/',
    icon: 'simple-icons-stackblitz',
    color: 'warning'
  },
  {
    title: $t('inte.reka.title'),
    description: $t('inte.reka.description'),
    to: 'https://developer.stackblitz.com/',
    icon: 'cat-reka',
    color: 'success'
  },
  {
    title: $t('inte.tailwind.title'),
    description: $t('inte.tailwind.description'),
    to: 'https://tailwindcss.com/docs',
    icon: 'simple-icons-tailwindcss',
    color: 'info'
  }
]

const links = [
  {
    label: $t('inte.start'),
    to: localePath('/docs/getting-started'),
    icon: 'i-lucide-book-a',
    color: 'info',
    variant: 'soft'
  },
  {
    label: $t('inte.blog'),
    to: localePath('/blog'),
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-newspaper'
  }
] as ButtonProps[]

const testimonial = ref({
  user: {
    name: 'Catventurist',
    description: $t('inte.user'),
    avatar: {
      src: '/cat.png',
      alt: 'Cat'
    }
  },
  quote: $t('inte.quote')
})
</script>

<template>
  <UPageHero
    :title="$t('inte.title')" :description="$t('inte.description')" reverse
    orientation="horizontal" :links="links">
    <div class="container relative grid grid-cols-2 gap-2">
      <UPageCard
        v-for="item in intItems" :key="item.title" :title="item.title" :description="item.description" :to="item.to"
        :icon="item.icon" spotlight :spotlight-color="item.color as any" />
      <UPageCard orientation="horizontal" variant="subtle" spotlight class="col-span-2 mt-4">
        <q>
          {{ testimonial.quote }}
        </q>
        <UUser v-bind="testimonial.user" />
      </UPageCard>
    </div>
  </UPageHero>
</template>
