<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { PageCollections } from '@nuxt/content'

const { locale } = useI18n()
const route = useRoute()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData('cat-' + slug.value, () => {
  return queryCollection('cat_' + locale.value as keyof PageCollections).first()
}, {
  watch: [locale]
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: $t('empty.page.title'),
    fatal: true
  })
}

definePageMeta({
  layout: 'author'
})

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})

defineI18nRoute({
  paths: {
    en: '/cat',
    fi: '/kissa'
  }
})
</script>

<template>
  <div v-if="page">
    <LandingHero :page />
    <div class="pt-0 lg:grid lg:grid-cols-2 lg:gap-8">
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </div>
    <LandingBlog :page />
    <LandingTestimonials :page />
    <LandingFAQ :page />
  </div>
</template>
