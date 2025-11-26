<!-- <script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const navLinks: NavigationMenuItem[] = [{
  label: 'Hero',
  icon: 'i-lucide-cat',
  to: '#hero'
}, {
  label: 'About',
  icon: 'i-lucide-info',
  to: '#about'
}, {
  label: 'Blog',
  icon: 'i-lucide-newspaper',
  to: '#blog'
}, {
  label: 'Quotes',
  icon: 'i-lucide-user',
  to: '#quotes'
}, {
  label: 'Faq',
  icon: 'i-lucide-list',
  to: '#faq'
}]
</script> -->

<template>
  <div>
    <AppHeader />
    <MCatHeader />
    <UMain>
      <UPage>
        <slot />
      </UPage>
    </UMain>
    <AppFooter />
  </div>
</template>
