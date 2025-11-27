<script setup lang="ts">
import { AnimatePresence, Motion } from 'motion-v'
import { withLeadingSlash } from 'ufo'
import type { PageCollections } from '@nuxt/content'

const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData('values-' + slug.value, () => queryCollection('values_' + locale.value as keyof PageCollections).first(), {
  watch: [locale]
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: $t('empty.page'),
    fatal: true
  })
}

defineI18nRoute({
  paths: {
    en: '/values',
    fi: '/arvot'
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
      <UPageSection class="py-24" :headline="page.headline" :title="page.title" :description="page.description">
        <UTabs :items="page.values">
          <template #content="{ item }">
            <AnimatePresence>
              <Motion
                as="div" :initial="{ opacity: 0.5, filter: 'blur(4px)' }"
                :animate="{ opacity: 1, filter: 'blur(0px)' }" :transition="{ duration: 0.3 }"
                class="grid items-center gap-8 md:grid-cols-12">
                <div class="space-y-6 md:col-span-6">
                  <div class="mb-4 flex items-center gap-4">
                    <div class="rounded-xl p-2.5 bg-muted">
                      <Icon :name="item.icon" class="size-7" :class="item.color" />
                    </div>
                    <h3 class="text-2xl font-bold">
                      {{ item.name }}
                    </h3>
                  </div>
                  <p class="text-muted text-lg">
                    {{ item.description }}
                  </p>
                  <div class="space-y-3 pt-2">
                    <h4 class="text-lg">
                      {{ $t('values.principles') }}:
                    </h4>
                    <ul class="space-y-2">
                      <li v-for="(principle, i) in item.principles" :key="i" class="flex items-start gap-2">
                        <Icon name="lucide-arrow-up-right" class="mt-0.5 size-5" :class="item.color" />
                        <span>{{ principle }}</span>
                      </li>
                    </ul>
                  </div>
                  <UCard v-if="item.testimonial" class="bg-muted/30 mt-6 p-0 duration-300 hover:scale-110 hover:bg-radial from-primary/10 to-default/60" variant="subtle">
                    <div class="mb-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                      <UUser
                        :avatar="item.testimonial.author.avatar" :name="item.testimonial.author.name"
                        :description="item.testimonial.author.description" />
                    </div>
                    <q class="text-muted text-pretty italic">
                      {{ item.testimonial.quote }}
                    </q>
                  </UCard>
                </div>
                <div class="md:col-span-6">
                  <div v-if="item.image" class="relative aspect-4/3 overflow-hidden rounded-xl duration-300 hover:rotate-x-10 hover:-rotate-y-10 shadow-md shadow-primary">
                    <NuxtImg
                      :src="item.image" :alt="$t('values.illustration') + ` ${item.name} ` + $t('values.values')"
                      fill class="object-cover" />
                    <div class="absolute inset-0 bg-linear-to-t from/50 to-transparent" />
                    <div class="absolute right-0 bottom-0 left-0 p-6">
                      <div class="inline-block rounded-lg px-3 py-1 text-sm bg/30 backdrop-blur-sm">
                        {{ item.name }}
                      </div>
                    </div>
                  </div>
                  <div class="group bg-muted/70 flex aspect-4/3 items-center justify-center rounded-xl">
                    <Icon :name="item.icon" class="size-24 opacity-25 duration-300 group-hover:opacity-90" :class="item.color" />
                  </div>
                </div>
              </Motion>
            </AnimatePresence>
          </template>
        </UTabs>
        <UCard class="group/bot mt-16 text-center justify-center shadow-sm shadow-primary" variant="soft" spotlight>
          <Icon name="lucide-castle" class="size-14 text-info duration-300 group-hover/bot:scale-90"  />
          <p class="text-muted text-pretty text-xl mx-auto my-6 max-w-2xl duration-300 group-hover/bot:text-default">
            {{ $t('values.aspect') }}
            <br />
            {{ $t('values.part') }}
          </p>
          <UButton icon="lucide-users" variant="subtle" size="lg" to="/" class="max-w-40">
            {{ $t('values.join') }}
          </UButton>
        </UCard>
      </UPageSection>
    </UPage>
  </UContainer>
</template>
