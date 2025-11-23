<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { PageCollections } from '@nuxt/content'

const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData('faq-' + slug.value, () => queryCollection('faq_' + locale.value as keyof PageCollections).first(), {
  watch: [locale]
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: $t('empty.faq'),
    fatal: true
  })
}

defineI18nRoute({
  paths: {
    en: '/faq',
    fi: '/ukk'
  }
})

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UContainer v-if="page">
    <UPage>
      <ClientOnly>
        <MLandingFaq :page="page" />
        <MProjectLine />
      </ClientOnly>
    </UPage>
  </UContainer>
</template>
