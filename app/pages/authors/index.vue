<script setup lang="ts">
/*
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

const localePath = useLocalePath()
const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))
const { data: authors } = await useAsyncData('authors-' + slug.value, () => {
  return queryCollection('authors_' + locale.value as keyof Collections).all()
},
{ watch: [locale] })

 const name = computed(() => authors.value?.name)
const avatar = computed(() => authors.value?.avatar)
const to = computed(() => authors.value?.to) */

const localePath = useLocalePath()

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: $t('header.authors.title'),
  description: $t('header.authors.description')
})

defineI18nRoute({
  paths: {
    en: '/authors',
    fi: '/kayttajat'
  }
})
</script>

<template>
  <UPage>
    <UPageSection :title="$t('header.authors.title')" :description="$t('header.authors.description')">
      <div class="flex items-center justify-center">
        <UPageCard spotlight class="group">
          <div class="flex flex-row justify-between items-center">
            <SocialButtons class="basis-1/5" />
            <UUser
              name="Catventurist" :description="$t('profile.userbio')" :to="localePath('/cat')"
              class="rounded-xl p-4 duration-300 hover:scale-110 hover:bg-radial from-primary/20 to-muted/60"
              :avatar="{ src: '/cat.png', icon: 'i-lucide-cat' }"
              :chip="{ color: 'success', position: 'top-right' }" />
            <div class="basis-1/5">
              <LinkButtons />
            </div>
          </div>
        </UPageCard>
      </div>
      <!--       <NuxtLink v-for="author in authors" :key="author.name" :to="author.url">
        <UAvatar :src="author.avatar" />
      </NuxtLink>
      <UUser :name="author.name" :avatar="author.avatar" :to="to" /> -->
    </UPageSection>
  </UPage>
</template>
