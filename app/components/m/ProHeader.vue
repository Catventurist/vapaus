<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const activeSection = ref('')
const localePath = useLocalePath()

const navLinks: NavigationMenuItem[] = [{
  label: $t('header.skills'),
  icon: 'i-lucide-hammer',
  to: '#skills'
}, {
  label: $t('header.features'),
  icon: 'i-lucide-bird',
  to: '#features'
}, {
  label: $t('header.video'),
  icon: 'i-lucide-video',
  to: '#video'
}, {
  label: $t('header.values.title'),
  icon: 'i-lucide-scale',
  to: '#values'
}]

const items = ref<DropdownMenuItem[]>([
  {
    label: $t('header.about'),
    icon: 'i-lucide-user',
    to: localePath('/cat')
  },
  {
    label: $t('header.blog'),
    icon: 'i-lucide-newspaper',
    to: localePath('/blog')
  },
  {
    label: $t('header.profile.title'),
    icon: 'i-lucide-person-standing',
    to: localePath('/profile')
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
  },
  {
    label: 'Gitlab',
    icon: 'simple-icons-gitlab',
    to: 'https://gitlab.com/catventurist'
  },
  {
    label: 'Codepen',
    icon: 'simple-icons-codepen',
    to: 'https://codepen.io/Catventurist'
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
    <div class="fixed top-18 sm:top-16 mx-auto end-4 pe-2 z-10">
      <UNavigationMenu
        v-model="activeSection" :items="navLinks" variant="link" color="neutral"
        class="bg-radial from-primary/10 to-muted/80 backdrop-hue-rotate-90 backdrop-blur-xs rounded-full px-2 sm:px-4 inset-shadow-sm inset-shadow-primary"
        :ui="{ link: 'px-2 py-1', linkLeadingIcon: 'hidden', viewport: 'shadow-none hidden' }">
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
          <UPopover mode="hover" :ui="{ content: 'min-w-28 bg-transparent' }">
            <UAvatar src="/cat.png" :chip="{ inset: true, color: 'success' }" class="mb-1" />
            <template #content>
              <div class="grid grid-cols-2">
                <UButton v-for="item in items" variant="link" class="bg-default/60 backdrop-blur-md" :key="item.label" :label="item.label" :icon="item.icon" :to="item.to" />
              </div>
            </template>
          </UPopover>
        </template>
      </UNavigationMenu>
    </div>
  </ClientOnly>
</template>
