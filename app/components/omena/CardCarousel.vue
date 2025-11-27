<script setup lang="ts">
import { ref, onMounted, watch, provide, computed } from 'vue'
import { CarouselKey } from '@/components/omena/CarouselContext'

interface Props {
  initialScroll?: number
}

const props = withDefaults(defineProps<Props>(), {
  initialScroll: 0
})

const carouselRef = ref<HTMLDivElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)
const currentIndex = ref(0)

onMounted(() => {
  if (carouselRef.value) {
    carouselRef.value.scrollLeft = props.initialScroll
    checkScrollability()
  }
})

watch(
  () => props.initialScroll,
  (newVal) => {
    if (carouselRef.value) {
      carouselRef.value.scrollLeft = newVal
      checkScrollability()
    }
  }
)

function checkScrollability() {
  if (carouselRef.value) {
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.value
    canScrollLeft.value = scrollLeft > 0
    canScrollRight.value = scrollLeft < scrollWidth - clientWidth
  }
}

function scrollLeft() {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
}

function scrollRight() {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}

function handleCardClose(index: number) {
  if (carouselRef.value) {
    const cardWidth = isMobile.value ? 230 : 384 // (md:w-96)
    const gap = isMobile.value ? 4 : 8
    const scrollPosition = (cardWidth + gap) * (index + 1)
    carouselRef.value.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    })
    currentIndex.value = index
  }
}

const isMobile = computed(() => {
  return window && window.innerWidth < 768
})

provide(CarouselKey, {
  onCardClose: handleCardClose,
  currentIndex
})
</script>

<template>
  <div class="relative w-full">
    <div ref="carouselRef" class="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]" @scroll="checkScrollability">
      <div class="absolute right-0 z-1000 h-auto w-[5%] overflow-hidden" />
      <div class="flex flex-row justify-start gap-4 pl-4 mx-auto max-w-7xl">
        <slot />
      </div>
    </div>
    <div class="mr-10 flex justify-end gap-2">
      <UButton
        class="relative z-40 flex size-10 items-center justify-center rounded-full disabled:opacity-50"
        icon="lucide-arrow-left" variant="ghost" :disabled="!canScrollLeft" @click="scrollLeft()" />
      <UButton
        class="relative z-40 flex size-10 items-center justify-center rounded-full disabled:opacity-50"
        icon="lucide-arrow-right" variant="ghost" :disabled="!canScrollRight" @click="scrollRight()" />
    </div>
  </div>
</template>
