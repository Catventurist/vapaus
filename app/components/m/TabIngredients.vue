<script setup lang="ts">
import { ref } from 'vue'
import { AnimatePresence, Motion } from 'motion-v'

interface Ingredient {
  icon?: string
  label?: string
  local?: string
}

const ingredients = [
  { icon: '🍅', label: 'Tomato', local: $t('food.tomato') },
  { icon: '🥬', label: 'Lettuce', local: $t('food.lettuce') },
  { icon: '🧀', label: 'Cheese', local: $t('food.cheese') },
  { icon: '🥕', label: 'Carrot', local: $t('food.carrot') },
  { icon: '🍌', label: 'Banana', local: $t('food.banana') },
  { icon: '🫐', label: 'Blueberries', local: $t('food.blueberry') },
  { icon: '🥂', label: 'Champers?', local: $t('food.drinks') }
] as Ingredient[]

const selectedTab = ref(ingredients[0])
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-[500px] h-[360px] rounded-lg bg-background/80 overflow-hidden shadow-sm shadow-primary flex flex-col">
      <nav class="bg-muted p-1 rounded-lg rounded-b-none border-b border-muted h-12">
        <ul class="flex w-full">
          <li
            v-for="item in ingredients" :key="item?.label" :class="{ 'bg-primary/20': item === selectedTab }"
            class="rounded-[5px] rounded-b-none w-full px-2 cursor-pointer h-9 flex flex-col text-center justify-between items-center min-w-0 relative select-none"
            @click="selectedTab = item">
            {{ item?.icon }} {{ item?.local }}
            <Motion
              v-if="item?.label === selectedTab?.label"
              class="absolute bottom-[-10px] left-0 right-0 h-1 bg-radial from-primary to-transparent" layout-id="underline" />
          </li>
        </ul>
      </nav>
      <main class="flex justify-center items-center text-[128px] grow select-none">
        <AnimatePresence mode="wait">
          <Motion
            :key="selectedTab ? selectedTab.label : 'empty'"
            :initial="{ y: 10, opacity: 0 }"
            :animate="{ y: 0, opacity: 1 }"
            :exit="{ y: -10, opacity: 0 }"
            :transition="{ duration: 0.2 }">
            {{ selectedTab ? selectedTab.icon : '😋' }}
          </Motion>
        </AnimatePresence>
      </main>
    </div>
  </div>
</template>
