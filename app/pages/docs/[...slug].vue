<script setup lang="ts">
import type { PageLink } from '@nuxt/ui'
import { withLeadingSlash } from 'ufo'
import type { PageCollections } from '@nuxt/content'

definePageMeta({
  layout: 'docs'
})
const localePath = useLocalePath()
const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData('docs-' + slug.value, () => queryCollection('docs_' + locale.value as keyof PageCollections).path(route.path).first(), {
  watch: [locale]
})
if (!page.value) {
  throw createError({ statusCode: 404, message: $t('empty.docs'), fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('docs_' + locale.value as keyof PageCollections, route.path, {
    fields: ['description']
  })
})

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImageComponent('Saas')

const tocLinks = ref<PageLink[]>([
  {
    label: $t('links.edit'),
    icon: 'i-lucide-file-pen',
    to: `https://github.com/Catventurist/vapaus/edit/cat/content/${page?.value?.stem}.md`
  },
  {
    label: $t('links.star'),
    icon: 'i-lucide-star',
    to: 'https://github.com/catventurist/vapaus'
  },
  {
    label: $t('links.releases'),
    icon: 'i-lucide-list-check',
    to: localePath('/changelog')
  }
])
</script>

<template>
  <UPage v-if="page">
    <UPageHeader :title="page.title" :description="page.description" />
    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />
      <USeparator v-if="surround?.length" class="h-1 bg-radial from-primary/40 to-transparent" />
      <UContentSurround :surround="surround" />
    </UPageBody>
    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :links="page.body.toc.links" highlight>
        <template #bottom>
          <USeparator v-if="page.body?.toc?.links?.length" class="bg-radial from-primary/40 to-transparent" />
          <UPageLinks :title="$t('links.title')" :links="tocLinks" class="-ms-4" />
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
