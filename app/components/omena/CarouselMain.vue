<script setup lang="ts">
import { Motion } from 'motion-v'

const data = [
  {
    id: 1,
    slogan: 'Creativity is a human trait',
    description: 'You can do more with your brains.',
    categories: ['spirituality', 'consciousness', 'enlightenment'],
    title: 'Consciousness',
    src: '/catbirchdark.webp',
    icon: 'lucide-star',
    color: 'violet',
    chakra: 'Crown'
  },
  {
    id: 2,
    slogan: 'Following it leads to nice things.',
    description: 'Learning oneself is the hardest',
    categories: ['intuition', 'wisdom', 'insight', 'clarity'],
    title: 'Intuition',
    src: '/cat.png',
    icon: 'lucide-eye',
    color: 'indigo',
    chakra: '3rd Eye'
  },
  {
    id: 3,
    slogan: 'Speak and express yourself',
    description: 'The first rule of the club is that you learn about club.',
    categories: ['communication', 'self-expression', 'truth'],
    title: 'Communication',
    src: '/catbirch.webp',
    icon: 'lucide-megaphone',
    color: 'blue',
    chakra: 'Throat'
  },
  {
    id: 4,
    slogan: 'Biggest feelings',
    description: 'Are the most difficult to handle',
    categories: ['love', 'compassion', 'relationships', 'empathy'],
    title: 'Empathy',
    src: '/cat.png',
    icon: 'lucide-heart',
    color: 'green',
    chakra: 'Heart'
  },
  {
    id: 5,
    slogan: 'Coming into solutions',
    description: 'Doing what is right',
    categories: ['personal power', 'confidence', 'decisions'],
    title: 'Decisions',
    src: '/catbirch.webp',
    icon: 'lucide-bolt',
    color: 'yellow',
    chakra: 'Solar Plexus'
  },
  {
    id: 6,
    slogan: 'Doing something for others',
    description: 'Making life an adventure',
    categories: ['creativity', 'sexuality', 'emotions', 'connection'],
    title: 'Creativity',
    src: '/catbirchdark.webp',
    icon: 'lucide-flame',
    color: 'amber',
    chakra: 'Sacral'
  },
  {
    id: 7,
    slogan: 'Basic needs',
    description: 'Are the base',
    categories: ['grounding', 'stability', 'security', 'basic needs'],
    title: 'Stability',
    src: '/catbirchdark.webp',
    icon: 'lucide-tree-pine',
    color: 'red',
    chakra: 'Root'
  }
]
</script>

<template>
  <OmenaCardCarousel>
    <OmenaCarouselItem v-for="(card, index) in data" :key="card.title" :index="index">
      <OmenaCard :card="card" :index="index" :layout="true">
        <Motion
          :key="`dummy-content${index}`" :initial="{ scale: 0.5, opacity: 0 }" :animate="{ scale: 1, opacity: 1 }"
          :transition="{ type: 'spring', stiffness: 260, damping: 50, delay: 0.2 }"
          as="div" class="mb-4 rounded-3xl p-8 md:p-14">
          <div class="mx-auto max-w-3xl md:text-2xl text-center">
            <div class="flex flex-row justify-between gap-2 items-center">
              <h3 class="text-2xl text-default text-shadow-md text-shadow-info p-1 bg-muted/50 backrop-blur-sm rounded-full">
                {{ card.slogan }}
              </h3>
              <Icon :name="card.icon" class="size-10 text-shadow-md backrop-blur-sm" :class="`text-${card.color}-500`" />
            </div>
            <p class="text-lg text-pretty text-default bg-muted/40 backrop-blur-sm rounded-full">
              {{ card.description }}
            </p>
          </div>
          <NuxtImg
            :src="card.src" :alt="card.title" :height="500" :width="500"
            class="mx-auto mt-2 rounded-lg size-full object-contain md:size-1/2 duration-300 hover:scale-105" />
        </Motion>
      </OmenaCard>
    </OmenaCarouselItem>
  </OmenaCardCarousel>
</template>
