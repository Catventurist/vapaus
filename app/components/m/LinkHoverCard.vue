<script setup lang="ts">
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring
} from 'motion-v'

interface HoverLinkPreviewProps {
  to: string
  previewImage: string
  imageAlt?: string
}

const props = defineProps<HoverLinkPreviewProps>()

const isHovered = ref(false)
const showPreview = ref(false)
const prevX = ref<number | null>(null)

const motionTop = useMotionValue(0)
const motionLeft = useMotionValue(0)
const motionRotate = useMotionValue(0)

const springTop = useSpring(motionTop, { stiffness: 300, damping: 30 })
const springLeft = useSpring(motionLeft, { stiffness: 300, damping: 30 })
const springRotate = useSpring(motionRotate, { stiffness: 300, damping: 20 })

const handleMouseEnter = () => {
  showPreview.value = true
  prevX.value = null
}

const handleMouseLeave = () => {
  showPreview.value = false
  prevX.value = null
  motionRotate.set(0)
}

const handleMouseMove = (e: MouseEvent) => {
  const PREVIEW_WIDTH = 192
  const PREVIEW_HEIGHT = 112
  const OFFSET_Y = 40

  motionTop.set(e.clientY - PREVIEW_HEIGHT - OFFSET_Y)
  motionLeft.set(e.clientX - PREVIEW_WIDTH / 2)

  if (prevX.value !== null) {
    const deltaX = e.clientX - prevX.value
    const newRotate = Math.max(-15, Math.min(15, deltaX * 1.2))
    motionRotate.set(newRotate)
  }
  prevX.value = e.clientX
}
</script>

<template>
  <div>
    <NuxtLink
      :to="props.to" class="relative inline-block cursor-pointer underline" :on-mouse-enter="handleMouseEnter"
      :on-mouse-leave="handleMouseLeave" :on-mouse-move="handleMouseMove">
      <slot />
    </NuxtLink>
    <AnimatePresence>
      <motion.div
        v-if="!showPreview && !isHovered"
        :initial="{ opacity: 0, scale: 0.8, y: -10, rotate: 0 }"
        :animate="{ opacity: 1, scale: 1, y: 0 }" :exit="{ opacity: 0, scale: 0.8, y: -10, rotate: 0 }"
        :style="{ position: 'sticky', top: springTop, left: springLeft, rotate: springRotate, zIndex: 50, pointerEvents: 'none' }">
        <div class="rounded-2xl shadow-sm shadow-primary p-2 min-w-[180px] max-w-xs">
          <NuxtImg :src="props.previewImage" :alt="props.imageAlt" :width="192" :height="112" draggable="false" class="object-cover rounded-md" />
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</template>
