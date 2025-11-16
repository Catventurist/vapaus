<script setup lang="ts">
import type { PageLink } from '@nuxt/ui'

definePageMeta({
  layout: 'docs'
})

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('docs').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('docs', route.path, {
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
    label: 'Edit',
    icon: 'i-lucide-file-pen',
    to: `https://github.com/Catventurist/vapaus/edit/cat/content/${page?.value?.stem}.md`
  },
  {
    label: 'Star',
    icon: 'i-lucide-star',
    to: 'https://github.com/catventurist/vapaus'
  },
  {
    label: 'Releases',
    icon: 'i-lucide-rocket',
    to: '/changelog'
  }
])

/* const links = ref<PageLink[]>([
  {
    label: $t('links.edit'),
    icon: 'i-lucide-file-pen',
    to: `https://github.com/nuxt/ui/edit/v4/docs/content/${page?.value?.stem}.md`
  },
  {
    label: $t('links.star'),
    icon: 'i-lucide-star',
    to: 'https://github.com/catventurist'
  },
  {
    label: $t('links.releases'),
    icon: 'i-lucide-rocket',
    to: localePath('/changelog')
  }
]) */
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
          <UPageLinks title="Links" :links="tocLinks" />
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
