<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui'

const items: StepperItem[] = [
  {
    title: $t('steps.problem.title'),
    description: $t('steps.problem.description'),
    content: $t('steps.problem.content'),
    icon: 'i-lucide-shovel'
  }, {
    title: $t('steps.reaction.title'),
    description: $t('steps.reaction.description'),
    content: $t('steps.reaction.content'),
    icon: 'i-lucide-hammer'
  }, {
    title: $t('steps.solution.title'),
    description: $t('steps.solution.description'),
    content: $t('steps.solution.content'),
    icon: 'i-lucide-dollar-sign'
  }
]

const stepper = useTemplateRef('stepper')
</script>

<template>
  <UStepper ref="stepper" :items="items" orientation="vertical" class="w-full">
    <template #content="{ item }">
      <div class="flex flex-row gap-2 justify-between">
        <UButton
          leading-icon="i-lucide-arrow-left" variant="ghost" :label="$t('steps.prev')"
          :disabled="!stepper?.hasPrev" @click="stepper?.prev()" />
        <h2 class="text-2xl text-primary pt-8">
          {{ item?.content }}
        </h2>
        <UButton
          trailing-icon="i-lucide-arrow-right" variant="ghost" :label="$t('steps.next')"
          :disabled="!stepper?.hasNext" @click="stepper?.next()" />
      </div>
    </template>
  </UStepper>
</template>
