<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <div class="flex flex-col gap-2 w-full items-center justify-around">
    <UButton
      :to="localePath('/blog')" icon="lucide-newspaper" aria-label="Blog"
      color="info" variant="ghost" title="Blog" />
    <UButton
      :to="localePath('/changelog')" icon="lucide-list"
      aria-label="Changelog" color="error" variant="ghost" title="Changelog" />
    <UButton
      :to="localePath('/faq')" icon="lucide-info" aria-label="Info"
      color="neutral" variant="ghost" title="Info" />
  </div>
</template>
