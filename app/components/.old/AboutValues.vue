<script setup lang="ts">
import { AnimatePresence, Motion } from 'motion-v'

interface CompanyValue {
  id: string
  name: string
  description: string
  icon: string
  color: string
  principles: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
    image: string
  }
  image?: string
}

const companyValues = [
  {
    id: 'innovation',
    name: 'Innovation',
    description:
      'We constantly push boundaries and challenge the status quo, fostering a culture where creative thinking and experimentation are encouraged at all levels of the organization.',
    icon: 'lucide-lightbulb',
    color: 'text-amber-500',
    principles: [
      'Embrace experimentation and calculated risk-taking',
      'Challenge assumptions and existing processes',
      'Dedicate time and resources to exploring new ideas',
      'Learn from failures and iterate quickly'
    ],
    testimonial: {
      quote:
        'Working in an environment that truly values innovation isn&apost just about having the latest technology—it&aposs about feeling empowered to question, experiment, and sometimes fail. This culture has allowed us to develop solutions no one else has thought of yet.',
      author: 'Alex Chen',
      role: 'Lead Product Engineer',
      image: '/catbirchdark.webp'
    },
    image: '/catbirchdark.webp'
  },
  {
    id: 'integrity',
    name: 'Integrity',
    description:
      'We believe in transparency, honesty, and ethical conduct in everything we do. Trust is the foundation of our relationships with customers, partners, and each other.',
    icon: 'lucide-shield-check',
    color: 'text-blue-500',
    principles: [
      'Be honest and transparent in all communications',
      'Do what&aposs right, even when it&aposs difficult',
      'Keep commitments and take accountability for mistakes',
      'Protect private data and confidential information'
    ],
    testimonial: {
      quote:
        'In my ten years with the company, I&aposve seen us turn down lucrative opportunities that didn&apost align with our ethical standards. That consistent commitment to integrity isn&apost just good ethics—it&aposs built an unparalleled level of trust with our customers.',
      author: 'Sarah Johnson',
      role: 'Senior Account Director',
      image: '/catbirchdark.webp'
    },
    image: '/catbirchdark.webp'
  },
  {
    id: 'collaboration',
    name: 'Collaboration',
    description:
      'We achieve more together than alone. By combining diverse perspectives and skills, we create solutions that are stronger, more innovative, and more effective than any individual could produce.',
    icon: 'lucide-users',
    color: 'text-indigo-500',
    principles: [
      'Value and seek diverse perspectives',
      'Share knowledge openly across teams',
      'Give credit and celebrate team achievements',
      'Support colleagues and prioritize team success'
    ],
    testimonial: {
      quote:
        'The collaborative spirit here isn&apost just talk—it&aposs built into how we work. Even as we&aposve grown to multiple offices globally, we&aposve maintained a culture where everyone&aposs input is valued and people genuinely enjoy working together to solve challenging problems.',
      author: 'Miguel Hernandez',
      role: 'Global Operations Manager',
      image: '/catbirchdark.webp'
    },
    image: '/catbirchdark.webp'
  },
  {
    id: 'customer-focus',
    name: 'Customer Focus',
    description:
      'Our customers are at the center of everything we do. We&aposre committed to understanding their needs, exceeding their expectations, and building lasting relationships based on mutual success.',
    icon: 'lucide-heart',
    color: 'text-red-500',
    principles: [
      'Deeply understand customer needs and pain points',
      'Prioritize features that deliver true customer value',
      'Proactively gather and implement customer feedback',
      'Measure success through customer outcomes'
    ],
    testimonial: {
      quote:
        'I&aposve been amazed at how customer feedback directly shapes our product roadmap. When I joined, I expected the usual lip service to customer-centricity, but here, customer success genuinely drives every decision from product features to support policies.',
      author: 'Avery Wilson',
      role: 'Customer Success Lead',
      image: '/catbirchdark.webp'
    },
    image: '/catbirchdark.webp'
  },
  {
    id: 'excellence',
    name: 'Excellence',
    description:
      'We strive for excellence in everything we do, from the quality of our products to our customer service. We set high standards and continuously work to exceed them through learning and improvement.',
    icon: 'lucide-area-chart',
    color: 'text-emerald-500',
    principles: [
      'Set ambitious goals and high standards',
      'Pursue continuous improvement through feedback',
      'Pay attention to details without losing sight of the big picture',
      'Take pride in delivering exceptional quality'
    ],
    testimonial: {
      quote:
        'The most inspiring thing about working here is how everyone strives for excellence while remaining humble. There&aposs always a sense that we can do better—not from a place of dissatisfaction, but from genuine passion for creating the best possible experience for our users.',
      author: 'Jordan Taylor',
      role: 'Quality Assurance Director',
      image: '/catbirchdark.webp'
    },
    image: '/catbirchdark.webp'
  },
  {
    id: 'sustainability',
    name: 'Sustainability',
    description:
      'We are committed to creating a positive environmental and social impact. Our business decisions consider long-term sustainability and our responsibility to future generations.',
    icon: 'lucide-globe',
    color: 'text-green-500',
    principles: [
      'Minimize environmental impact in operations and products',
      'Support community initiatives and social causes',
      'Consider long-term sustainability in all business decisions',
      'Measure and report on environmental and social performance'
    ],
    testimonial: {
      quote:
        'When we announced our carbon-neutral initiative, I wasn&apost sure if it would be more than a marketing exercise. Three years later, we&aposve reduced emissions by 68%, switched to renewable energy, and built sustainability requirements into our entire supply chain. It&aposs real change.',
      author: 'Priya Patel',
      role: 'Sustainability Program Manager',
      image: '/catbirchdark.webp'
    },
    image: '/catbirchdark.webp'
  }
] as CompanyValue[]
</script>

<template>
  <UPageSection
    class="py-24" headline="Core Values" title="What Guides Our Decisions"
    description="Our values are not just words on a wall—they are the
          principles that guide our daily actions and long-term vision,
          shaping our culture and driving our success.">
    <UTabs :items="companyValues">
      <template #content="{ item }">
        <AnimatePresence>
          <Motion
            as="div" :initial="{ opacity: 0.5, filter: 'blur(4px)' }" :animate="{ opacity: 1, filter: 'blur(0px)' }"
            :transition="{ duration: 0.3 }" class="grid items-center gap-8 md:grid-cols-12">
            <div class="space-y-6 md:col-span-6">
              <div class="mb-4 flex items-center gap-4">
                <div class="rounded-xl p-2.5 bg-muted">
                  <Icon :name="item.icon" class="size-7" :class="item.color" />
                </div>
                <h3 class="text-2xl font-bold">
                  {{ item.name }}
                </h3>
              </div>
              <p class="text-muted text-lg">
                {{ item.description }}
              </p>
              <div class="space-y-3 pt-2">
                <h4 class="text-lg">
                  Key Principles:
                </h4>
                <ul class="space-y-2">
                  <li v-for="(principle, i) in item.principles" :key="i" class="flex items-start gap-2">
                    <Icon name="lucide-arrow-up-right" class="mt-0.5 size-5" :class="item.color" />
                    <span>{{ principle }}</span>
                  </li>
                </ul>
              </div>
              <UCard v-if="item.testimonial" class="bg-muted/30 mt-6 p-0">
                <div class="mb-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <div class="relative size-12 shrink-0 overflow-hidden rounded-full">
                    <NuxtImg :src="item.testimonial.image" :alt="item.testimonial.author" fill class="object-cover" />
                  </div>
                  <div>
                    <h4 class="text-lg">
                      {{ item.testimonial.author }}
                    </h4>
                    <p class="text-muted text-sm">
                      {{ item.testimonial.role }}
                    </p>
                  </div>
                </div>
                <q class="text-muted italic">
                  {{ item.testimonial.quote }}
                </q>
              </UCard>
            </div>
            <div class="md:col-span-6">
              <div v-if="item.image" class="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <NuxtImg :src="item.image" :alt="`Illustration of our ${item.name} value`" fill class="object-cover" />
                <div class="absolute inset-0 bg-linear-to-t from/50 to-transparent" />
                <div class="absolute right-0 bottom-0 left-0 p-6">
                  <div class="inline-block rounded-lg px-3 py-1 text-sm bg/30 backdrop-blur-sm">
                    {{ item.name }}
                  </div>
                </div>
              </div>
              <div class="bg-muted flex aspect-[4/3] items-center justify-center rounded-xl">
                <Icon :name="item.icon" class="size-24 opacity-25" :class="item.color" />
              </div>
            </div>
          </Motion>
        </AnimatePresence>
      </template>
    </UTabs>
    <div class="mt-16 text-center">
      <p class="text-muted text-pretty mx-auto mb-6 max-w-2xl">
        These values guide every aspect of our work.
        Want to be part of a team that lives these values every day?
      </p>
      <UButton icon="lucide-users" variant="subtle" size="lg" to="/">
        Join Our Team
      </UButton>
    </div>
  </UPageSection>
</template>
