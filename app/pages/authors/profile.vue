<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: $t('header.profile.title'),
  description: $t('header.profile.description')
})

defineI18nRoute({
  paths: {
    en: '/profile',
    fi: '/profiili'
  }
})
</script>

<template>
  <UPage>
    <UPageSection :title="$t('header.profile.title')" :description="$t('header.profile.description')">
      <MFeatureAround />
      <MCoreValues />
      <MLandingIntegrations />
    </UPageSection>
  </UPage>
</template>
