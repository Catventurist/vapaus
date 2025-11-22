<script setup lang="ts">
const toast = useToast()
const localePath = useLocalePath()

onMounted(async () => {
  const cookie = useCookie('cookie-consent')
  if (cookie.value === 'accepted') {
    return
  }

  toast.add({
    title: $t('cookies.title'),
    duration: 0,
    close: false,
    actions: [{
      label: $t('cookies.accept'),
      icon: 'lucide-check',
      color: 'success',
      variant: 'outline',
      onClick: () => {
        cookie.value = 'accepted'
      }
    }, {
      label: $t('cookies.optout'),
      icon: 'lucide-circle-off',
      color: 'error',
      variant: 'ghost'
    }]
  })
})
</script>

<template>
  <div class="h-screen flex items-center justify-center px-4">
    <UButton
      icon="i-lucide-chevron-left" :to="localePath('/')" size="xl" color="neutral" variant="subtle"
      class="absolute left-8 top-8 rounded-full z-10" />
    <UPageCard variant="subtle" class="max-w-sm w-full">
      <slot />
    </UPageCard>
  </div>
</template>
