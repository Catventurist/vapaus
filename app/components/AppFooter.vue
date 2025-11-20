<script setup lang="ts">
import { Motion } from 'motion-v'

const localePath = useLocalePath()
const columns = [{
  label: $t('header.resources'),
  children: [{
    label: $t('header.changelog.title'),
    to: localePath('/changelog'),
    icon: 'lucide-logs'
  }, {
    label: $t('header.docs'),
    icon: 'lucide-book-a',
    to: localePath('/docs')
  }, {
    label: $t('header.help'),
    icon: 'lucide-message-circle-question-mark',
    to: localePath('/faq')
  }, {
    label: $t('header.roadmap'),
    icon: 'lucide-map',
    to: localePath('/faq')
  }]
}, {
  label: $t('header.community'),
  children: [{
    label: $t('header.blog'),
    to: localePath('/blog'),
    icon: 'lucide-book-open'
  }, {
    label: $t('header.pricing.title'),
    to: localePath('/pricing'),
    icon: 'lucide-receipt-euro'
  }, {
    label: $t('header.about'),
    to: localePath('/docs'),
    icon: 'lucide-badge-info'
  }, {
    label: $t('header.projects.title'),
    to: localePath('/projects'),
    icon: 'lucide-anvil'
  }]
}]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  toast.add({
    title: $t('header.subscribed.title'),
    description: $t('header.subscribed.description')
  })
}
</script>

<template>
  <Motion
    as-child :initial="{ opacity: 0, y: 10 }" :while-in-view="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.3, y: { type: 'spring', stiffness: 260, damping: 20 } }">
    <USeparator icon="lucide:cat" class="h-1 bg-radial from-primary/40 to-transparent" />
    <UFooter :ui="{ top: 'border-b border-default' }">
      <template #top>
        <UContainer>
          <UFooterColumns :columns="columns">
            <template #right>
              <form @submit.prevent="onSubmit">
                <UFormField name="email" :label="$t('header.subscribe.description')" size="lg">
                  <UInput
                    v-model="email" type="email" class="w-full"
                    :placeholder="$t('header.subscribe.enter')" disabled>
                    <template #trailing>
                      <UButton
                        type="submit" size="xs" color="info" variant="soft" trailing-icon="lucide-send"
                        :label="$t('header.subscribe.title')" />
                    </template>
                  </UInput>
                </UFormField>
              </form>
            </template>
          </UFooterColumns>
        </UContainer>
      </template>
      <template #left>
        <div class="text-muted text-sm flex text-center">
          Catventurist 💜 {{ new Date().getFullYear() }}
        </div>
      </template>
      <template #right>
        <UButton
          to="https://t.me/catventurists" target="_blank" icon="i-simple-icons-telegram" aria-label="Telegram"
          color="info" variant="ghost" title="Telegram" />
        <UButton
          to="https://ecency.com/@catventurist" target="_blank" icon="i-simple-icons-hive-blockchain"
          aria-label="Ecency/Hive" color="error" variant="ghost" title="Ecency/Hive" />
        <UButton
          to="https://github.com/catventurist" target="_blank" icon="i-simple-icons-github" aria-label="GitHub"
          color="neutral" variant="ghost" title="Github" />
      </template>
    </UFooter>
  </Motion>
</template>
