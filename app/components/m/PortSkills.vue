<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { AnimatePresence, Motion } from 'motion-v'

const technicalSkills = [
  { name: 'JavaScript/TypeScript', icon: 'simple-icons-typescript', proficiency: 95 },
  { name: 'Nuxt', icon: 'simple-icons-nuxt', proficiency: 92 },
  { name: 'Node.js', icon: 'simple-icons-nodedotjs', proficiency: 88 },
  { name: 'Vite', icon: 'simple-icons-vite', proficiency: 80 },
  { name: 'HTML/CSS/TW', icon: 'simple-icons-html5', proficiency: 95 },
  { name: 'Turso', icon: 'simple-icons-turso', proficiency: 85 },
  { name: 'SQL & NoSQL', icon: 'simple-icons-sqlite', proficiency: 82 },
  { name: $t('skills.cloud'), icon: 'lucide-cloud-cog', proficiency: 78 },
  { name: 'Vercel', icon: 'simple-icons-vercel', proficiency: 75 },
  { name: 'Web3', icon: 'simple-icons-hive-blockchain', proficiency: 87 }
]

const tools = [
  {
    id: 1,
    category: $t('skills.frontend'),
    icon: 'lucide-globe',
    items: [
      { name: 'Vue', icon: 'simple-icons-vuedotjs' },
      { name: 'Nuxt', icon: 'simple-icons-nuxt' },
      { name: 'TypeScript', icon: 'simple-icons-typescript' },
      { name: 'Tailwind CSS', icon: 'simple-icons-tailwindcss' },
      { name: 'Reka UI', icon: 'cat-reka' },
      { name: 'Motion', icon: 'cat-motionvue' }
    ]
  },
  {
    id: 2,
    category: $t('skills.backend'),
    icon: 'lucide-server',
    items: [
      { name: 'Node.js', icon: 'simple-icons-nodedotjs' },
      { name: 'Bun', icon: 'simple-icons-bun' },
      { name: 'PostgreSQL', icon: 'simple-icons-postgresql' },
      { name: 'D1', icon: 'lucide-database' },
      { name: 'Nitro', icon: 'cat-nitro' },
      { name: 'SQLite', icon: 'simple-icons-sqlite' }
    ]
  },
  {
    id: 3,
    category: $t('skills.toolscat'),
    icon: 'lucide-terminal',
    items: [
      { name: 'Git', icon: 'lucide-github' },
      { name: 'Netlify', icon: 'simple-icons-netlify' },
      { name: 'Cloudflare', icon: 'simple-icons-cloudflare' },
      { name: 'CI/CD', icon: 'lucide-terminal' },
      { name: 'Turso', icon: 'simple-icons-turso' },
      { name: 'Vercel', icon: 'simple-icons-vercel' }
    ]
  },
  {
    id: 4,
    category: $t('skills.decent'),
    icon: 'lucide-blocks',
    items: [
      { name: $t('skills.blockchain'), icon: 'simple-icons-hive-blockchain' },
      { name: 'SOME', icon: 'cat-ecency' },
      { name: $t('skills.browser'), icon: 'simple-icons-brave' },
      { name: $t('skills.tokens'), icon: 'lucide-coins' },
      { name: $t('skills.contracts'), icon: 'lucide-signature' },
      { name: $t('skills.receipts'), icon: 'lucide-receipt-text' }
    ]
  }
]

const getSkillLevel = (proficiency: number) => {
  if (proficiency >= 90) return $t('skills.expert')
  if (proficiency >= 80) return $t('skills.advanced')
  if (proficiency >= 70) return $t('skills.proficient')
  if (proficiency >= 50) return $t('skills.intermediate')
  return 'Beginner'
}

const getColorClass = (proficiency: number) => {
  if (proficiency >= 90) return 'text-green-500'
  if (proficiency >= 80) return 'text-blue-500'
  if (proficiency >= 70) return 'text-yellow-500'
  if (proficiency >= 50) return 'text-amber-500'
  return 'text-violet-500'
}

const items: TabsItem[] = [
  {
    label: $t('skills.technical'),
    icon: 'lucide-code',
    slot: 'tech'
  },
  {
    label: $t('skills.tools'),
    icon: 'lucide-wrench',
    slot: 'tools'
  }
]
</script>

<template>
  <UPageSection id="skills" :headline="$t('skills.badge')" :title="$t('skills.title')" :description="$t('skills.description')">
    <UTabs :items="items" class="w-full">
      <template #tech>
        <AnimatePresence mode="wait">
          <Motion
            :initial="{ y: 10, opacity: 0 }" :animate="{ y: 0, opacity: 1 }" :exit="{ y: -10, opacity: 0 }"
            :transition="{ duration: 0.2 }" as="div" class="bg-muted/60 rounded-xl border border-primary/20 p-6">
            <span class="mb-4 text-xl font-semibold">
              <Icon name="lucide-lightbulb" class="text-primary mr-2 inline size-5" />
              {{ $t('skills.prof') }}
            </span>
            <div class="mt-6 grid gap-5 sm:grid-cols-2">
              <div v-for="skill in technicalSkills" :key="skill.name" class="space-y-2">
                <div class="flex items-center justify-between">
                  <div class="font-medium flex items-center justify-center gap-2">
                    <Icon :name="skill.icon" />
                    {{ skill.name }}
                  </div>
                  <span class="text-sm font-semibold" :class="getColorClass(skill.proficiency)">
                    {{ getSkillLevel(skill.proficiency) }}
                  </span>
                </div>
                <UProgress v-model="skill.proficiency" class="opacity-60" />
              </div>
            </div>
          </Motion>
        </AnimatePresence>
      </template>
      <template #tools>
        <AnimatePresence mode="wait">
          <Motion
            :initial="{ y: 10, opacity: 0 }" :animate="{ y: 0, opacity: 1 }" :exit="{ y: -10, opacity: 0 }"
            :transition="{ duration: 0.3 }"  as="div" class="bg-default/80 rounded-xl border border-info/20 p-6">
            <h3 class="mb-6 text-xl font-semibold">
              <Icon name="lucide-terminal" class="text-primary mr-2 inline size-5" />
              {{ $t('skills.tools') }}
            </h3>
            <div class="grid gap-8 sm:grid-cols-2">
              <div
                v-for="toolCategory in tools" :key="toolCategory.id"
                class="space-y-4 rounded-lg border border-primary/20 p-4">
                <div class="flex items-center gap-2 font-medium">
                  <Icon :name="toolCategory.icon" class="text-primary size-6" />
                  {{ toolCategory.category }}
                </div>
                <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div
                    v-for="tool in toolCategory.items" :key="tool.name"
                    class="bg-muted/40 duration-300 hover:scale-110 hover:border-muted flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm">
                    <Icon :name="tool.icon" class="text-primary size-4" />
                    <p>
                      {{ tool.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Motion>
        </AnimatePresence>
      </template>
    </UTabs>
  </UPageSection>
</template>
