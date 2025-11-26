<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const activeSection = ref('')
const localePath = useLocalePath()

const navLinks: NavigationMenuItem[] = [{
  label: $t('header.hero'),
  icon: 'i-lucide-cat',
  to: '#hero'
}, {
  label: $t('header.about'),
  icon: 'i-lucide-info',
  to: '#about'
}, {
  label: $t('header.blog'),
  icon: 'i-lucide-newspaper',
  to: '#blog'
}, {
  label: $t('header.quotes'),
  icon: 'i-lucide-user',
  to: '#quotes'
}, {
  label: $t('header.faq'),
  icon: 'i-lucide-list',
  to: '#faq'
}]

const items = ref<DropdownMenuItem[]>([
  {
    label: $t('header.profile'),
    icon: 'i-lucide-user',
    to: localePath('/cat')
  },
  {
    label: $t('header.blog'),
    icon: 'i-lucide-newspaper',
    to: localePath('/blog')
  },
  {
    label: 'Telegram',
    icon: 'simple-icons-telegram',
    to: 'https://t.me/catventurists'
  },
  {
    label: 'Hive',
    icon: 'simple-icons-hive-blockchain',
    to: 'https://ecency.com/@catventurist'
  },
  {
    label: 'Github',
    icon: 'simple-icons-github',
    to: 'https://github.com/catventurist'
  }
])

onMounted(() => {
  activeSection.value = route.hash
})

watch(
  () => route.hash,
  (h) => {
    activeSection.value = h
  }
)
</script>

<template>
  <ClientOnly>
    <div class="fixed top-18 sm:top-16 mx-auto end-4 transform -translate-x-2 z-10">
      <UNavigationMenu
        v-model="activeSection" :items="navLinks" variant="link" color="neutral"
        class="bg-radial from-primary/10 to-muted/20 backdrop-blur-md rounded-full px-2 sm:px-4 inset-shadow-sm inset-shadow-primary"
        :ui="{ link: 'px-2 py-1', linkLeadingIcon: 'hidden' }">
        <template #item="{ item, active }">
          <ULink
            as-child :to="{ path: '', hash: item.to as string }" exact-hash class="rounded-md"
            aria-label="Go to {{ item.label }}" :active="active">
            <span class="inline-flex items-center">
              <UIcon v-if="item.icon" :name="item.icon" class="size-5 me-1" />
              <span>{{ item.label }}</span>
            </span>
          </ULink>
        </template>
        <template #list-trailing>
          <UDropdownMenu
            :items="items" :content="{ align: 'end', side: 'bottom', sideOffset: 4 }" hover
            :ui="{ content: 'min-w-28' }">
            <UAvatar src="/cat.png" :chip="{ inset: true, color: 'success' }" class="mb-1" />
          </UDropdownMenu>
        </template>
      </UNavigationMenu>
    </div>
  </ClientOnly>
</template>
