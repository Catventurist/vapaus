<script setup lang="ts">
import { ref, onMounted, inject, onUnmounted, watch } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'
import { onClickOutside } from '@vueuse/core'
import { CarouselKey } from '@/components/omena/CarouselContext'

interface Card {
  id: number
  slogan: string
  description: string
  categories: string[]
  title: string
  src: string
  icon: string
  color: string
  chakra: string
}

interface Props {
  card: Card
  index: number
  layout?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  layout: false
})

const open = ref(false)
const containerRef = ref<HTMLDivElement | null>(null)
const carouselContext = inject(CarouselKey)

if (!carouselContext) {
  throw new Error('Card must be used within a Carousel')
}

const { onCardClose } = carouselContext

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    handleClose()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

watch(open, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

onClickOutside(containerRef, () => handleClose())

function handleOpen() {
  open.value = true
}

function handleClose() {
  open.value = false
  onCardClose(props.index)
}
</script>

<template>
  <Teleport to="body">
    <AnimatePresence>
      <div v-if="open" class="fixed inset-0 z-50 h-full overflow-auto">
        <Motion
          as="div" :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :exit="{ opacity: 0 }"
          class="fixed inset-0 size-full bg-background/80 backdrop-blur-lg" />
        <Motion
          ref="containerRef" as="div" :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :exit="{ opacity: 0 }"
          :layout-id="layout ? `card-${card.title}` : undefined"
          class="relative z-60 mx-auto my-10 h-fit max-w-5xl rounded-3xl p-4 md:p-10">
          <UButton
            class="sticky right-0 top-4 ml-auto flex size-8 rounded-full"
            icon="lucide-x" variant="ghost" @click="handleClose" />
          <Motion
            v-for="cat in card.categories" :key="cat" as="button" :layout-id="layout ? `category-${card.title}` : undefined"
            :class="`text-${card.color}-500`" class="rounded-full text-center justify-center text-sm gap-2 max-w-37 px-2 py-1 bg-muted/70 inset-shadow-sm inset-shadow-primary duration-300 hover:text-default">
            {{ cat }}
          </Motion>
          <Motion
            as="h2" :layout-id="layout ? `title-${card.title}` : undefined"
            :class="`text-${card.color}-500`" class="mt-2 px-2 text-center justify-center text-2xl md:text-5xl text-shadow-sm text-shadow-primary bg-muted/20 backrop-blur-sm rounded-full">
            {{ card.title }}
          </Motion>
          <div>
            <slot />
          </div>
        </Motion>
      </div>
    </AnimatePresence>
  </Teleport>
  <Motion
    :layout-id="layout ? `card-${card.title}` : undefined"
    class="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-xl md:h-160 md:w-96"
    @click="handleOpen">
    <div class="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-linear-to-b from-background/50 via-transparent to-transparent" />
    <div class="relative z-40 p-8">
      <Motion
        :layout-id="layout ? `title-${card.title}` : undefined" as="h2"
        class="mt-2 max-w-xs text-left text-xl md:text-3xl text-shadow-md text-shadow-primary">
        {{ card.title }}
      </Motion>
    </div>
    <OmenaBlurImage :src="card.src" :alt="card.title" class="absolute inset-0 z-10 object-cover" :fill="true" />
  </Motion>
</template>
