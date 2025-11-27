<script setup lang="ts">
const {
  id = '',
  repo = 'nuxt/examples',
  branch = 'main',
  dir = 'examples/hello-world',
  file = 'app.vue',
  title = 'Stackblitz'
} = defineProps<{
  id?: string
  repo?: string
  branch?: string
  dir?: string
  file?: string
  title?: string
}>()

const url = ref('')
const colorMode = useColorMode()

onMounted(() => {
  if (repo) url.value = `https://stackblitz.com/github/${repo}/tree/${branch}/${dir}?embed=1&file=${file}&theme=${colorMode.value}`
  else if (id) url.value = `https://stackblitz.com/edit/${id}?embed=1&file=${file}&theme=${colorMode.value}`
})
</script>

<template>
  <MToggleContent icon="simple-icons-stackblitz" :label="$t('header.open')">
    <div class="min-h-[600px] [&:not(:first-child)]:mt-6">
      <iframe
        v-if="url" :src="url" :title
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        class="size-full min-h-[600px] overflow-hidden rounded-md" />
      <div v-else class="w-full bg-muted/60 animate-pulse min-h-[600px] rounded-md" />
    </div>
  </MToggleContent>
</template>
