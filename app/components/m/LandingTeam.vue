<script setup lang='ts'>
import type { ButtonProps } from '@nuxt/ui'
import { Motion } from 'motion-v'

const localePath = useLocalePath()
const teamMembers = [
  {
    name: 'Catventurist',
    title: $t('team.cat.title'),
    description: $t('team.cat.description'),
    image: '/cat.png'
  },
  {
    name: 'Jane Doe',
    title: $t('team.jane.title'),
    description: $t('team.jane.description'),
    image: '/logo-dark.webp'
  },
  {
    name: 'John Doe',
    title: $t('team.john.title'),
    description: $t('team.john.description'),
    image: '/logo-light.webp'
  }
]

const links = [
  {
    label: $t('team.positions'),
    to: localePath('/signup'),
    trailingIcon: 'lucide-door-open',
    color: 'primary',
    variant: 'soft'
  },
  {
    label: $t('team.about'),
    to: localePath('/'),
    color: 'info',
    variant: 'subtle',
    icon: 'lucide-info'
  }
] as ButtonProps[]
</script>

<template>
  <UPageSection :headline="$t('team.headline')" :title="$t('team.title')" :description="$t('team.description')" :links="links">
    <UPageGrid>
      <Motion
        v-for="member in teamMembers" :key="member.name" as="div"
        :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0, scale: 1, transition: { ease: 'easeInOut' } }"
        :hover="{ scale: 1.1 }" :press="{ scale: 0.9 }"
        class="flex flex-col items-center text-center bg-radial from-primary/20 to-muted/80 py-8 px-6 rounded-lg">
        <UAvatar
          :src="member.image" :alt="member.name" :width="120" :height="120"
          class="shrink-0 size-16 sm:size-20 rounded-full object-cover bg-radial from-primary/20 to-muted/80" />
        <h3 class="mt-5 text-lg font-semibold">
          {{ member.name }}
        </h3>
        <p class="text-muted text-sm">
          {{ member.title }}
        </p>
        <p class="mt-2 mb-6 text-pretty">
          {{ member.description }}
        </p>
        <div class="mt-auto flex items-center gap-4">
          <UButton to="/" target="_blank" icon="simple-icons-github" variant="ghost" color="neutral" />
          <UButton to="/" target="_blank" icon="simple-icons-hive-blockchain" variant="ghost" color="error" />
          <UButton to="/" target="_blank" icon="simple-icons-telegram" variant="ghost" color="info" />
        </div>
      </Motion>
    </UPageGrid>
  </UPageSection>
</template>
