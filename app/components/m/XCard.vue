<script setup lang="ts">
import { Motion } from 'motion-v'

interface ReplyProps {
  authorName: string
  authorHandle: string
  authorImage: string
  content: string
  isVerified?: boolean
  timestamp: string
}

interface XCardProps {
  authorName: string
  authorHandle: string
  authorImage: string
  content: string[]
  isVerified?: boolean
  timestamp: string
  reply?: ReplyProps
}

const { locale } = useI18n()
const xcard = ({
  authorName: 'Catventurist',
  authorHandle: 'cat',
  authorImage: '/cat.png',
  content: [
    $t('profile.text1'),
    $t('profile.text2'),
    $t('profile.text3'),
    $t('profile.text4')
  ],
  isVerified: true,
  timestamp: '27.11.2025T09:30:00.000Z',
  reply: {
    authorName: 'Kitty Cat',
    authorHandle: 'kitty',
    authorImage: '/catbirchdark.webp',
    content: $t('profile.answer'),
    isVerified: true,
    timestamp: '26.11.2025T09:30:00.000Z'
  }
}) satisfies XCardProps
</script>

<template>
  <Motion
    :initial="{ opacity: 0.3 }" :animate="{ opacity: 1 }" :transition="{ duration: 0.3 }" :hover="{ scale: 1.03 }" as="div"
    class="w-full min-w-[400px] md:min-w-[500px] max-w-xl p-1.5 rounded-2xl relative isolate overflow-hidden bg-default/80
      bg-linear-to-br from-default/5 to-default/2 backdrop-blur-xl
      backdrop-saturate-180 border border-default/10 hover:shadow-sm shadow-primary
      will-change-transform translate-z-0">
    <div
      class="w-full duration-300 p-5 rounded-xl relative bg-linear-to-br from-default/5 to-transparent
        backdrop-blur-md backdrop-saturate-150 border border-default/5
        text-default/90 translate-z-0 before:absolute before:inset-0 before:bg-linear-to-br before:from-default/2 before:to-default/1
        before:opacity-0 before:transition-opacity before:pointer-events-none hover:before:opacity-100">
      <div class="flex gap-3">
        <UUser
          :description="'@' + xcard.authorHandle" :chip="{ color: 'success', position: 'top-left' }" size="lg"
          :avatar="{ src: xcard.authorImage, alt: xcard.authorName }">
          <template #name>
            {{ xcard.authorName }}
            <Icon name="lucide-verified" class="text-info" />
          </template>
        </UUser>
      </div>
      <div class="mt-2">
        <p v-for="(item, index) in xcard.content" :key="index" class="text-default text-base">
          {{ item }}
        </p>
        <NuxtTime
          :locale="locale" :datetime="Date.now() - 45 * 60 * 1000" relative
          class="text-muted text-sm mt-2 block" />
      </div>
      <div v-if="xcard.reply" class="mt-4 pt-4 border-t border-default/8">
        <div class="flex flex-row justify-between items-center gap-3">
          <p class="text-default text-sm mt-1">
            {{ xcard.reply.content }}
          </p>
          <div class="min-w-30 flex flex-col items-center gap-1">
            <UUser
              :name="xcard.reply.authorName" :description="'@' + xcard.reply.authorHandle"
              :avatar="{ src: xcard.reply.authorImage, alt: xcard.reply.authorName }" />
            <NuxtTime :locale="locale" :datetime="Date.now() - 60 * 60 * 1000" relative class="text-muted text-sm" />
          </div>
        </div>
      </div>
    </div>
  </Motion>
</template>
