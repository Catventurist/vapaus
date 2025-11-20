<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { PageCollections } from '@nuxt/content'

const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData('changelog-' + slug.value, () => queryCollection(('changelog_' + locale.value) as keyof PageCollections).first(), {
  watch: [locale]
})
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: $t('empty.log'), fatal: true })
}
const { data: versions } = await useAsyncData(route.path, () => queryCollection(('versions_' + locale.value) as keyof PageCollections).order('path', 'ASC').all(), {
  watch: [locale]
})

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

defineI18nRoute({
  paths: {
    en: '/changelog',
    fi: '/muutoslista'
  }
})

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImageComponent('Saas')
</script>

<template>
  <UContainer>
    <UPageHeader
      v-bind="page"
      class="py-[50px]"
    />

    <UPageBody>
      <UChangelogVersions>
        <UChangelogVersion
          v-for="(version, index) in versions"
          :key="index"
          v-bind="version"
        >
          <template #body>
            <ContentRenderer :value="version.body" />
          </template>
        </UChangelogVersion>
      </UChangelogVersions>
    </UPageBody>
  </UContainer>
</template>
