<script setup lang="ts">
const columns = [{
  label: 'Resources',
  children: [{
    label: 'Help center'
  }, {
    label: 'Docs'
  }, {
    label: 'Roadmap'
  }, {
    label: 'Changelog'
  }]
}, {
  label: 'Features',
  children: [{
    label: 'Affiliates'
  }, {
    label: 'Portal'
  }, {
    label: 'Jobs'
  }, {
    label: 'Sponsors'
  }]
}, {
  label: 'Company',
  children: [{
    label: 'About'
  }, {
    label: 'Pricing'
  }, {
    label: 'Careers'
  }, {
    label: 'Blog'
  }]
}]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  toast.add({
    title: 'Subscribed?',
    description: 'You might be subscribed to our newsletter.'
  })
}
</script>

<template>
  <USeparator icon="i-simple-icons-nuxtdotjs" class="h-px" />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <form @submit.prevent="onSubmit">
              <UFormField name="email" label="Subscribe to our newsletter" size="lg">
                <UInput v-model="email" type="email" class="w-full" placeholder="Enter your email">
                  <template #trailing>
                    <UButton type="submit" size="xs" color="neutral" label="Subscribe" variant="subtle" />
                  </template>
                </UInput>
              </UFormField>
            </form>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">
        Catventurist © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UButton
        to="https://t.me/Catventurists" target="_blank" icon="i-simple-icons-telegram"
        aria-label="Telegram" color="info" variant="ghost" />
      <UButton
        to="https://ecency.com/@catventurist" target="_blank" icon="i-simple-icons-hive-blockchain"
        aria-label="Hive" color="error" variant="ghost" />
      <UButton
        to="https://github.com/Catventurist" target="_blank" icon="i-simple-icons-github" aria-label="GitHub"
        color="neutral" variant="ghost" />
    </template>
  </UFooter>
</template>
