<script setup lang="ts">
const tableData = [
  {
    feature: $t('pricing.online'),
    free: $t('pricing.true'),
    pro: $t('pricing.true'),
    startup: $t('pricing.true'),
  },
  {
    feature: $t('pricing.offline'),
    free: $t('pricing.true'),
    pro: $t('pricing.true'),
    startup: $t('pricing.true'),
  },
  {
    feature:  $t('pricing.p2p'),
    free: false,
    pro: $t('pricing.true'),
    startup: $t('pricing.true'),
  },
  {
    feature: $t('pricing.tokens'),
    free: '',
    pro: '20 ' + $t('pricing.users'),
    startup: $t('pricing.unlimited'),
  },
  {
    feature: $t('pricing.video'),
    free: '',
    pro: '12 ' + $t('pricing.weeks'),
    startup: '6 ' + $t('pricing.weeks'),
  },
  {
    feature: $t('pricing.support'),
    free: '',
    pro: '10 ' + $t('pricing.weeks'),
    startup: $t('pricing.unlimited'),
  },
  {
    feature: $t('pricing.security'),
    free: '',
    pro: '20 ' + $t('pricing.users'),
    startup: $t('pricing.unlimited'),
  },
]
</script>

<template>
  <div class="relative mx-auto max-w-5xl px-6">
    <div class="w-full overflow-auto lg:overflow-visible">
      <table class="w-[200vw] border-separate border-spacing-x-2 md:w-full">
        <thead class="sticky z-10 top-14 bg-muted/40 backdrop-blur-sm">
          <tr class="*:py-4 *:text-left *:font-medium">
            <th class="lg:w-2/5"></th>
            <th class="space-y-3">
              <span class="block">
                {{ $t('pricing.free')}}
              </span>
              <UButton :label="$t('pricing.start')" to="/" variant="outline" size="sm" />
            </th>
            <th class="bg-muted/80 rounded-t-(--ui-radius) space-y-3 px-4">
              <span class="block">
                {{ $t('pricing.pro')}}
              </span>
              <UButton :label="$t('pricing.start')" to="/" variant="soft" size="sm" />
            </th>
            <th class="space-y-3">
              <span class="block">
                {{ $t('pricing.startup')}}
              </span>
              <UButton :label="$t('pricing.start')" to="/" variant="subtle" size="sm" />
            </th>
          </tr>
        </thead>
        <tbody class="text-caption text-sm">
          <tr class="*:py-3">
            <td class="flex items-center gap-2 font-medium text-info">
              <Icon name="lucide-cpu" class="size-4" />
              {{ $t('pricing.features')}}
            </td>
            <td></td>
            <td class="bg-muted/80 border-none px-4"></td>
            <td></td>
          </tr>
          <tr v-for="(row, index) in tableData.slice(-4)" :key="index" class="*:border-b *:border-primary/40 *:py-3">
            <td>
              {{ row.feature }}
            </td>
            <td>
              <UBadge v-if="row.free" variant="soft" size="lg" >
              <Icon name="lucide-check" class="size-5 text-success" />
              {{ row.free }}
            </UBadge>
            </td>
            <td class="bg-muted/80 border-none px-4">
              <div class="-mb-3 border-b border-primary/20 py-3">
                <UBadge v-if="row.pro" variant="soft" size="lg" >
                <Icon name="lucide-check" class="size-5 text-success" />
                {{ row.pro }}
              </UBadge>
              </div>
            </td>
            <td>
              <UBadge v-if="row.startup" variant="subtle" size="lg" >
              <Icon v-if="row.startup" name="lucide-check" class="size-5 text-success" />
              {{ row.startup }}
            </UBadge>
            </td>
          </tr>
          <tr class="*:pb-3 *:pt-8">
            <td class="flex items-center gap-2 font-medium text-warning">              
              <Icon name="lucide-brain" class="size-4" />
              <span>
                {{ $t('pricing.models')}}
              </span>
            </td>
            <td></td>
            <td class="bg-muted/80 border-none px-4"></td>
            <td></td>
          </tr>
          <tr v-for="(row, index) in tableData" :key="index" class="*:border-b *:border-primary/40 *:py-3">
            <td class="text-default">
              {{ row.feature }}
            </td>
            <td>
              <UBadge v-if="row.free" variant="subtle" size="lg" >
              <Icon name="lucide-check" class="size-5 text-success" />
              {{ row.free }}
            </UBadge>
            </td>
            <td class="bg-muted border-none px-4">
              <div class="-mb-3 border-b border-primary/40 py-3">
                <UBadge v-if="row.pro" variant="soft" size="lg" >
                <Icon name="lucide-check" class="size-5 text-success" />
                {{ row.pro }}
                </UBadge>
              </div>
            </td>
            <td>
              <UBadge v-if="row.free" variant="subtle" size="lg" >
                <Icon v-if="row.startup" name="lucide-check" class="size-5 text-success" />
                {{ row.startup }}
              </UBadge>
            </td>
          </tr>
          <tr class="*:py-6">
            <td></td>
            <td></td>
            <td class="bg-muted rounded-b-(--ui-radius) border-none px-4"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>