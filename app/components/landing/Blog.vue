<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { PageCollections } from '@nuxt/content'

defineProps<{
  page: any
}>()

const { locale } = useI18n()
const route = useRoute()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: posts } = await useAsyncData('posts-' + slug.value, () =>
  queryCollection('posts_' + locale.value as keyof PageCollections).order('title', 'DESC').limit(3).all()
)
if (!posts.value) {
  throw createError({ statusCode: 404, statusMessage: $t('blog.noposts'), fatal: true })
}
</script>

<template>
  <UPageSection
    :title="page.blog.title" :description="page.blog.description" id="blog"
    :ui="{
      container: 'flex justify-center px-10 pt-0 sm:gap-6 lg:gap-8 ',
      title: 'text-start text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-start mt-2 text-sm sm:text-md lg:text-sm text-muted' }">
    <UBlogPosts orientation="vertical" class="gap-4 lg:gap-y-4">
      <UBlogPost
        v-for="(post, index) in posts" :key="index" orientation="horizontal"
        variant="naked" v-bind="post" :to="post.path"
        :ui="{
          root: 'group relative lg:items-start lg:flex ring-0 hover:ring-0',
          body: '!px-0',
          header: 'hidden' }">
        <template #footer>
          <UButton size="xs" variant="link" class="px-0 gap-0" :label="$t('blog.read')">
            <template #trailing>
              <UIcon
                name="i-lucide-arrow-right"
                class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
            </template>
          </UButton>
        </template>
      </UBlogPost>
    </UBlogPosts>
  </UPageSection>
</template>
