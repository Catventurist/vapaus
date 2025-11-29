<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()

const items = computed(() => [{
  label: $t('header.docs'),
  to: localePath('/docs'),
  icon: 'lucide-book-a',
  active: route.path.startsWith(localePath('/docs')),
  children: [
    {
      label: $t('header.introduction.title'),
      description: $t('header.introduction.description'),
      icon: 'i-lucide-book',
      to: localePath('/docs/getting-started')
    },
    {
      label: $t('header.essentials.title'),
      description: $t('header.essentials.description'),
      icon: 'i-lucide-wrench',
      to: localePath('/docs/essentials')
    }
  ]
}, {
  label: $t('header.pages'),
  icon: 'lucide-notebook',
  children: [
    {
      label: $t('header.changelog.title'),
      description: $t('header.changelog.description'),
      to: localePath('/changelog'),
      icon: 'lucide-logs'
    }, {
      label: $t('header.pricing.title'),
      description: $t('header.pricing.description'),
      to: localePath('/pricing'),
      icon: 'lucide-bitcoin'
    }, {
      label: $t('header.projects.title'),
      description: $t('header.projects.description'),
      to: localePath('/projects'),
      icon: 'lucide-anvil'
    }, {
      label: $t('header.values.title'),
      description: $t('header.values.description'),
      to: localePath('/values'),
      icon: 'lucide-hand-heart'
    }, {
      label: $t('header.authors.title'),
      description: $t('header.authors.description'),
      to: localePath('/cat'),
      icon: 'lucide-cat'
    }, {
      label: $t('header.profile.title'),
      description: $t('header.profile.description'),
      to: localePath('/profile'),
      icon: 'lucide-person-standing'
    }
  ]
}, {
  label: $t('header.blog'),
  to: localePath('/blog'),
  icon: 'lucide-book-open',
  active: route.path.startsWith(localePath('/blog'))
}, {
  label: $t('header.faq'),
  to: localePath('/faq'),
  icon: 'lucide-list-check',
  active: route.path.startsWith(localePath('/faq'))
}])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink :to="localePath('/')" class="flex flex-row gap-2 items-center rounded-xl duration-300 hover:scale-110 focus:scale-90">
        <UColorModeImage
          light="/logo-light.webp" dark="/logo-dark.webp" :width="24" :height="24" alt="Logo"
          class="w-auto h-6 shrink-0" />
        <p class="text-xl text-primary">
          {{ $t('nav.site.title') }}
        </p>
      </NuxtLink>
    </template>
    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <LangSwitcher />
      <UContentSearchButton />
      <ThemePicker />
      <ColorModeButton />
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
