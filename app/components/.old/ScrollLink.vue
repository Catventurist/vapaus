<script setup lang="ts">
import { Motion, useScroll, useMotionValue, useMotionValueEvent, useDomRef, animate } from 'motion-v'
import type { MotionValue } from 'motion-v'
import type { CSSProperties } from 'vue'

const containerRef = useDomRef()
const { scrollXProgress } = useScroll({ container: containerRef })
const maskImage = useScrollOverflowMask(scrollXProgress)

const left = `0%`
const right = `100%`
const leftInset = `20%`
const rightInset = `80%`
const transparent = `#0000`
const opaque = `#000`

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  )

  useMotionValueEvent(scrollXProgress, 'change', (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      )
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      )
    } else if (
      scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      )
    }
  })

  return maskImage
}

const example: CSSProperties = {
  width: '100vw',
  maxWidth: '400px',
  position: 'relative'
}

const progress: CSSProperties = {
  position: 'absolute',
  top: '30%',
  right: '0%',
  transform: 'rotate(-90deg)'
}

const bg: CSSProperties = {
  stroke: 'var(--muted)'
}

const circle: CSSProperties = {
  strokeDashoffset: 0,
  strokeWidth: '10%',
  fill: 'none'
}

const indicator: CSSProperties = {
  stroke: 'var(--primary)'
}

const list: CSSProperties = {
  display: 'flex',
  listStyle: 'none',
  height: '220px',
  overflowX: 'scroll',
  padding: '20px 0',
  flex: '0 0 600px',
  margin: '0 auto',
  gap: '20px'
}

const listItem: CSSProperties = {
  flex: '0 0 400px'
}
</script>

<template>
  <div id="example" :style="example">
    <svg id="progress" :width="80" :height="80" viewBox="0 0 100 100" :style="progress">
      <circle cx="50" cy="50" r="30" pathLength="1" class="bg" :style="bg" />
      <Motion
        as="circle" cx="50" cy="50" r="30" class="indicator"
        :style="{ ...circle, ...indicator, pathLength: scrollXProgress }" />
    </svg>
    <Motion as="ul" ref="containerRef" :style="{ ...list, maskImage }">
      <li :style="{ ...listItem, background: '#ff0088' }">
        1
      </li>
      <li :style="{ ...listItem, background: '#dd00ee' }">
        2
      </li>
      <li :style="{ ...listItem, background: '#9911ff' }">
        3
      </li>
      <li :style="{ ...listItem, background: '#0d63f8' }">
        4
      </li>
      <li :style="{ ...listItem, background: '#0cdcf7' }">
        5
      </li>
      <li :style="{ ...listItem, background: '#4ff0b7' }">
        6
      </li>
      <li :style="{ ...listItem, background: 'var(--primary)' }">
        7
      </li>
    </Motion>
  </div>
</template>

<style scoped>
#example ::-webkit-scrollbar {
  height: 5px;
  width: 5px;
  background: var(--muted);
  -webkit-border-radius: 1ex;
}

#example ::-webkit-scrollbar-thumb {
  background: var(--primary);
  -webkit-border-radius: 1ex;
  opacity: 40%;
}

#example ::-webkit-scrollbar-corner {
  background: var(--foreground);
}
</style>
