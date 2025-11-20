<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'
import colors from 'tailwindcss/colors'

const appConfig = useAppConfig()
const colorMode = useColorMode()
const color = computed(() => colorMode.value === 'dark' ? (colors as any)[appConfig.ui.colors.neutral][900] : 'white')
const radius = computed(() => `:root { --ui-radius: ${appConfig.theme.radius}rem; }`)
const blackAsPrimary = computed(() => appConfig.theme.blackAsPrimary ? `:root { --ui-primary: black; } .dark { --ui-primary: white; }` : ':root {}')

const route = useRoute()
const { finalizePendingLocaleChange, locale } = useI18n()
const localePath = useLocalePath()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))
const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}
const lang = computed(() => locales[locale.value].code)
const dir = computed(() => locales[locale.value].dir)

const { data: navigation } = await useAsyncData('navigation-' + slug.value, () => queryCollectionNavigation('docs_' + locale.value as keyof Collections), {
  transform: data => data.find(item => item.path === localePath('/docs'))?.children || [],
  watch: [locale]
})

const { data: files } = useLazyAsyncData('search-' + slug.value, () => queryCollectionSearchSections('docs_' + locale.value as keyof Collections), {
  server: false,
  watch: [locale]
})

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  style: [
    { innerHTML: radius, id: 'nuxt-ui-radius', tagPriority: -2 },
    { innerHTML: blackAsPrimary, id: 'nuxt-ui-black-as-primary', tagPriority: -2 }
  ],
  htmlAttrs: {
    lang,
    dir
  }
})

useSeoMeta({
  titleTemplate: '%s - ' + $t('nav.site.title'),
  ogImage: '/saas-light.png',
  twitterImage: '/saas-light.png',
  twitterCard: 'summary_large_image'
})

const links = computed(() => [{
  label: $t('header.docs'),
  to: localePath('/docs'),
  icon: 'lucide-book-a'
}, {
  label: $t('header.blog'),
  to: localePath('/blog'),
  icon: 'lucide-book-open'
}, {
  label: $t('header.changelog.title'),
  to: localePath('/changelog'),
  icon: 'lucide-logs'
}, {
  label: $t('header.faq'),
  to: localePath('/faq'),
  icon: 'lucide-message-circle-question-mark'
}, {
  label: $t('header.pricing.title'),
  to: localePath('/pricing'),
  icon: 'lucide-bitcoin'
}, {
  label: $t('header.projects.title'),
  to: localePath('/projects'),
  icon: 'lucide-anvil'
}])

provide('navigation-' + slug.value, navigation)
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'my', mode: 'out-in', onBeforeEnter }" />
    </NuxtLayout>
    <ClientOnly>
      <LazyUContentSearch
        :files="files" shortcut="meta_k" :navigation="navigation" :links="links" 
        :fuse="{ resultLimit: 24 }" />
    </ClientOnly>
  </UApp>
</template>

<style>
.my-enter-active,
.my-leave-active {
  transition: all 0.1s;
}
.my-enter,
.my-leave-active {
  opacity: 0;
  filter: blur(3rem);
}
</style>
