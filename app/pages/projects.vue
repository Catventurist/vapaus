<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections, PageCollections } from '@nuxt/content'
import { Motion } from 'motion-v'

const { locale } = useI18n()
const route = useRoute()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData('pro-' + slug.value, () => queryCollection('pro_' + locale.value as keyof PageCollections).first(), {
  watch: [locale]
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: $t('empty.projects'),
    fatal: true
  })
}

const { data: projects } = await useAsyncData('projects-' + slug.value, () => queryCollection('projects_' + locale.value as keyof PageCollections).all(), {
  watch: [locale]
})

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})

defineI18nRoute({
  paths: {
    en: '/projects',
    fi: '/projektit'
  }
})
</script>

<template>
  <div v-if="page">
    <UPage>
      <UPageSection :title="page.title" :description="page.description" :ui="{ container: 'pt-0' }">
        <Motion
          v-for="(project, index) in projects" :key="project.title" :initial="{ opacity: 0, scale: 0.9 }"
          :while-in-view="{ opacity: 1, scale: 1 }" :transition="{ ease: 'easeInOut', duration: 0.2 }"
          class="rounded-md" as-child>
          <UPageCard
            :title="project.title" :description="project.description" :to="project.url"
            orientation="horizontal" variant="subtle" :reverse="index % 2 === 1" class="group"
            :ui="{ wrapper: 'max-sm:order-last', title: 'text-xl' }">
            <template #leading>
              <div class="flex items-center gap-2">
                <UBadge v-for="tag in project.tags" :key="tag" :label="tag" variant="soft" />
                <Icon name="lucide:clock" class="text-primary" />
                <NuxtTime :datetime="project.date" class="-ms-1 text-xs text-muted" />
              </div>
            </template>
            <template #footer>
              <ULink :to="project.url" class="flex items-center text-sm text-primary">
                {{ $t('nav.pages.projects.view') }}
                <UIcon name="i-lucide-arrow-right" class="size-4 text-primary transition-all duration-300 opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
              </ULink>
            </template>
            <NuxtLink :to="project.url">
              <NuxtImg :src="project.image" :alt="project.title" :height="200" class="object-cover w-full h-48 rounded-lg" />
            </NuxtLink>
          </UPageCard>
        </Motion>
      </UPageSection>
    </UPage>
  </div>
</template>
