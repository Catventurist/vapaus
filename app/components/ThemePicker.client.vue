<script setup lang="ts">
import colors from 'tailwindcss/colors'

const appConfig = useAppConfig()
const colorMode = useColorMode()

const neutralColors = [
  { name: $t('theme.slate'), label: 'slate' },
  { name: $t('theme.gray'), label: 'gray' },
  { name: $t('theme.zinc'), label: 'zinc' },
  { name: $t('theme.neutral'), label: 'neutral' },
  { name: $t('theme.stone'), label: 'stone' }
]

const mainColors = [
  { name: $t('theme.red'), label: 'red', src: colors.red },
  { name: $t('theme.orange'), label: 'orange', src: colors.orange },
  { name: $t('theme.amber'), label: 'amber', src: colors.amber },
  { name: $t('theme.yellow'), label: 'yellow', src: colors.yellow },
  { name: $t('theme.lime'), label: 'lime', src: colors.lime },
  { name: $t('theme.green'), label: 'green', src: colors.green },
  { name: $t('theme.emerald'), label: 'emerald', src: colors.emerald },
  { name: $t('theme.teal'), label: 'teal', src: colors.teal },
  { name: $t('theme.cyan'), label: 'cyan', src: colors.cyan },
  { name: $t('theme.sky'), label: 'sky', src: colors.sky },
  { name: $t('theme.blue'), label: 'blue', src: colors.blue },
  { name: $t('theme.indigo'), label: 'indigo', src: colors.indigo },
  { name: $t('theme.violet'), label: 'violet', src: colors.violet },
  { name: $t('theme.purple'), label: 'purple', src: colors.purple },
  { name: $t('theme.fuchsia'), label: 'fuchsia', src: colors.fuchsia },
  { name: $t('theme.pink'), label: 'pink', src: colors.pink },
  { name: $t('theme.rose'), label: 'rose', src: colors.rose }
]

const neutral = computed({
  get() {
    return appConfig.ui.colors.neutral
  },
  set(option) {
    appConfig.ui.colors.neutral = option
    window.localStorage.setItem('nuxt-ui-neutral', appConfig.ui.colors.neutral)
  }
})

/* const colorsToOmit = ['inherit', 'current', 'transparent', 'black', 'white', ...neutralColors]
 const primaryColors = Object.keys(omit(colors, colorsToOmit as any)) */
const primary = computed({
  get() {
    return appConfig.ui.colors.primary
  },
  set(option) {
    appConfig.ui.colors.primary = option
    window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.colors.primary)
    setBlackAsPrimary(false)
  }
})

const radiuses = [0, 0.125, 0.25, 0.375, 0.5]
const radius = computed({
  get() {
    return appConfig.theme.radius
  },
  set(option) {
    appConfig.theme.radius = option
    window.localStorage.setItem('nuxt-ui-radius', String(appConfig.theme.radius))
  }
})

const modes = [
  { label: 'light', name: $t('theme.light'), icon: appConfig.ui.icons.light },
  { label: 'dark', name: $t('theme.dark'), icon: appConfig.ui.icons.dark },
  { label: 'system', name: $t('theme.system'), icon: appConfig.ui.icons.system }
]
const mode = computed({
  get() {
    return colorMode.value
  },
  set(option) {
    colorMode.preference = option
  }
})

function setBlackAsPrimary(value: boolean) {
  appConfig.theme.blackAsPrimary = value
  window.localStorage.setItem('nuxt-ui-black-as-primary', String(value))
}
</script>

<template>
  <UPopover :ui="{ content: 'w-72 px-6 py-4 flex flex-col gap-4' }">
    <template #default="{ open }">
      <UButton
        icon="i-lucide-swatch-book"
        color="neutral"
        :variant="open ? 'soft' : 'ghost'"
        square
        :aria-label="$t('header.theme')"
        :title="$t('header.theme')"
        :ui="{ leadingIcon: 'text-primary' }"
      />
    </template>
    <template #content>
      <fieldset>
        <legend class="text-[11px] leading-none font-semibold mb-2">
          {{ $t('theme.primary') }}
        </legend>
        <div class="grid grid-cols-3 gap-1 -mx-2">
          <ThemePickerButton
            :label="$t('theme.black')"
            :selected="appConfig.theme.blackAsPrimary"
            @click="setBlackAsPrimary(true)"
          >
            <template #leading>
              <span class="inline-block size-2 rounded-full bg-black dark:bg-white" />
            </template>
          </ThemePickerButton>
          <ThemePickerButton
            v-for="color in mainColors"
            :key="color.label"
            :label="color.name"
            :chip="color.label"
            :selected="!appConfig.theme.blackAsPrimary && primary === color.label"
            @click="primary = color.label"
          />
        </div>
      </fieldset>
      <fieldset>
        <legend class="text-[11px] leading-none font-semibold mb-2">
          {{ $t('theme.tone') }}
        </legend>
        <div class="grid grid-cols-3 gap-1 -mx-2">
          <ThemePickerButton
            v-for="color in neutralColors"
            :key="color.label"
            :label="color.name"
            :chip="color.label === 'neutral' ? 'old-neutral' : color.label"
            :selected="neutral === color.label"
            @click="neutral = color.label"
          />
        </div>
      </fieldset>
      <fieldset>
        <legend class="text-[11px] leading-none font-semibold mb-2">
          {{ $t('theme.radius') }}
        </legend>
        <div class="grid grid-cols-5 gap-1 -mx-2">
          <ThemePickerButton
            v-for="r in radiuses"
            :key="r"
            :label="String(r)"
            class="justify-center px-0"
            :selected="radius === r"
            @click="radius = r"
          />
        </div>
      </fieldset>
      <fieldset>
        <legend class="text-[11px] leading-none font-semibold mb-2">
          {{ $t('theme.mode') }}
        </legend>
        <div class="grid grid-cols-3 gap-1 -mx-2">
          <ThemePickerButton
            v-for="m in modes"
            :key="m.label"
            :label="m.name"
            :icon="m.icon"
            :selected="colorMode.preference === m.label"
            @click="mode = m.label"
          />
        </div>
      </fieldset>
    </template>
  </UPopover>
</template>
