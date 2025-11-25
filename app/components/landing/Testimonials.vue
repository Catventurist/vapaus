<script setup lang="ts">
defineProps<{
  page: any
}>()
</script>

<template>
  <UPageSection :ui="{ container: 'mx-10 pt-0' }">
    <UCarousel
      v-slot="{ item }" :items="page.testimonials" :autoplay="{ delay: 6000 }" loop dots
      :ui="{ viewport: '-mx-4 sm:-mx-12 lg:-mx-16 bg-elevated/50 max-w-(--ui-container)' }">
      <UPageCTA
        :description="item.quote" variant="naked" class="rounded-md bg-radial from-muted/20 to-primary/20"
        :ui="{
          container: 'sm:py-12 lg:py-12 sm:gap-8',
          description: 'text-pretty before:content-[open-quote] before:text-5xl lg:before:text-7xl before:inline-block before:absolute before:-ml-6 lg:before:-ml-10 before:-mt-2 lg:before:-mt-4 after:content-[close-quote] after:text-5xl lg:after:text-7xl after:inline-block after:absolute after:mt-1 lg:after:mt-0 after:ml-1 lg:after:ml-2' }">
        <UUser v-bind="item.author" size="xl" class="justify-center font-hand" />
      </UPageCTA>
    </UCarousel>
  </UPageSection>
</template>
