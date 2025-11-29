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
    <MProHeader />
    <ClientOnly>
      <MPortSkills />
      <MFeatureAround />
      <MVideoCta />
      <MCoreValues />
    </ClientOnly>
  </UPage>
</template>
