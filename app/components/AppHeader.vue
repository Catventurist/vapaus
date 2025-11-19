<script setup lang="ts">
const route = useRoute()

const items = computed(() => [{
  label: 'Docs',
  icon: 'lucide-book',
  to: '/docs',
  active: route.path.startsWith('/docs')
}, {
  label: 'Pricing',
  icon: 'lucide-bitcoin',
  to: '/pricing'
}, {
  label: 'Blog',
  icon: 'lucide-newspaper',
  to: '/blog'
}, {
  label: 'Changelog',
  icon: 'lucide-list-check',
  to: '/changelog'
}])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" class="flex flex-row gap-2 items-center rounded-xl duration-300 hover:scale-110 focus:scale-90">
        <UColorModeImage
          light="/logo-light.webp" dark="/logo-dark.webp" :width="24" :height="24"
          class="w-auto h-6 shrink-0" />
        <p class="text-xl text-primary font-bold">
          Vapaus
        </p>
      </NuxtLink>
    </template>
    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UColorModeButton />
    <!--       <UButton icon="i-lucide-log-in" color="neutral" variant="ghost" to="/login" class="lg:hidden" />
      <UButton label="Sign in" color="neutral" variant="outline" to="/login" class="hidden lg:inline-flex" />
      <UButton
        label="Sign up" color="neutral" trailing-icon="i-lucide-arrow-right"
        class="hidden lg:inline-flex" to="/signup" /> -->
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    <!--   <USeparator class="my-6" />
      <UButton label="Sign in" color="neutral" variant="subtle" to="/login" block class="mb-3" />
      <UButton label="Sign up" color="neutral" to="/signup" block /> -->
    </template>
  </UHeader>
</template>
