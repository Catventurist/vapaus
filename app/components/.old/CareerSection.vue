<script setup lang="ts">
import { LayoutGroup, Motion, stagger } from 'motion-v'
import type { MotionProps } from 'motion-v'
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'

const childVariant: MotionProps['variants'] = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20
    }
  }
}

const perks = [
  {
    icon: 'lucide:heart',
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs for you and your family'
  },
  {
    icon: 'lucide:globe',
    title: 'Work from Anywhere',
    description: '100% remote work with flexible hours to fit your lifestyle'
  },
  {
    icon: 'lucide:trending-up',
    title: 'Career Growth',
    description: 'Continuous learning opportunities and clear career progression paths'
  }
]

const items = [...Array(3)].map((_, i) => ({
  id: i,
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur cumque enim ipsam doloribus quo excepturi aperiam 
            nulla asperiores corporis architecto odio, officiis iusto 
            dolores libero quos voluptatibus, voluptas dicta? Impedit.`
}))
</script>

<template>
  <Motion
    initial="initial" in-view="animate" :in-view-options="{ once: true }" as-child
    :variants="{ initial: { opacity: 0 }, animate: { opacity: 1, transition: { when: 'beforeChildren', delayChildren: stagger(0.1) } } }">
    <Motion :variants="childVariant" class="relative mb-16 flex flex-col text-center overflow-hidden rounded-2xl bg-linear-to-br from-primary/20 via-primary/10 to-transparent p-8 lg:mb-24 lg:p-16">
      <h1 class="mb-4 text-4xl font-bold lg:text-6xl">
        Join our mission
      </h1>
      <p class="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground lg:text-xl">
        We're building the future of technology. Come help us make a difference.
      </p>
      <div class="mx-auto flex max-w-2xl flex-wrap justify-center gap-8 lg:gap-12">
        <div class="text-center text-info">
          <p class="text-3xl font-bold lg:text-4xl">
            1
          </p>
          <p class="text-sm text-muted-foreground">
            Team member
          </p>
        </div>
        <USeparator orientation="vertical" class="hidden h-auto md:block" />
        <div class="text-center text-success">
          <p class="text-3xl font-bold lg:text-4xl">
            2+
          </p>
          <p class="text-sm text-muted-foreground">
            Countries
          </p>
        </div>
        <USeparator orientation="vertical" class="hidden h-auto md:block" />
        <div class="text-center text-warning">
          <p class="text-3xl font-bold lg:text-4xl">
            100%
          </p>
          <p class="text-sm text-muted-foreground">
            Remote
          </p>
        </div>
      </div>
    </Motion>
    <UContainer>
      <Motion :variants="childVariant" class="mb-16">
        <h2 class="mb-8 text-center text-2xl font-semibold lg:text-3xl">
          Why join us?
        </h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Motion
            v-for="(perk, index) in perks" :key="perk.title" as-child
            :variants="{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } } }">
            <UCard variant="subtle" class="py-0 text-center duration-300 hover:bg-radial from-primary/20 to-90 to-default/80">
              <div class="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                <Icon :name="perk.icon" class="size-6 text-primary" />
              </div>
              <h3 class="mb-2 line-clamp-2 font-semibold">
                {{ perk.title }}
              </h3>
              <p :title="perk.description" class="line-clamp-2 text-sm text-muted-foreground">
                {{ perk.description }}
              </p>
            </UCard>
          </Motion>
        </div>
      </Motion>
      <Motion :variants="childVariant">
        <h2 class="mb-8 text-2xl font-semibold">
          Open positions
        </h2>
        <AccordionRoot type="single" :collapsible="true" class="space-y-4 rounded-lg">
          <AccordionItem v-for="item in items" :key="item.id" :value="`item-${item.id}`" class="rounded-lg px-6">
            <LayoutGroup>
              <AccordionHeader>
                <AccordionTrigger
                  class="py-6 w-full hover:no-underline flex flex-1 items-start justify-between pr-4 text-left">
                  <Motion :layout="true" as-child :variants="childVariant" :transition="{ delay: 0.1 }">
                    <div class="flex-1  duration-300 hover:bg-linear-to-r from-primary/20 to-default/80">
                      <div class="mb-2 flex flex-wrap items-center gap-2">
                        <h3 class="text-lg font-semibold">
                          Senior Full Stack Developer
                        </h3>
                        <UBadge variant="outline" label="Engineering" size="sm" />
                      </div>
                      <div class="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span class="flex items-center gap-1">
                          <Icon name="lucide:map-pin" class="size-4" />
                          Remote
                        </span>
                        <span class="flex items-center gap-1">
                          <Icon name="lucide:briefcase" class="size-4" />
                          Full-time
                        </span>
                        <span class="flex items-center gap-1">
                          <Icon name="lucide:calendar" class="size-4" />
                          Posted 2 days ago
                        </span>
                      </div>
                    </div>
                  </Motion>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent class="pt-2 pb-6">
                <Motion
                  :layout="true" class="mt-4 text-secondary" :initial="{ opacity: 0.7, scaleY: 0.8 }"
                  :animate="{ opacity: 1, scaleY: 1 }"
                  :transition="{ delay: 0.2, type: 'spring', ease: 'linear' }">
                  <div class="space-y-4">
                    <div>
                      <h4 class="mb-2 font-semibold">
                        About the role
                      </h4>
                      <p class="text-sm text-muted-foreground">
                        We're looking for a talented full stack developer to join our growing
                        engineering team. You'll work on building and scaling our core platform.
                      </p>
                    </div>
                    <div>
                      <h4 class="mb-2 font-semibold">
                        Requirements
                      </h4>
                      <ul class="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>5+ years of professional development experience</li>
                        <li>Strong proficiency in Nuxt, Node.js, and TypeScript</li>
                        <li>Experience with cloud platforms (AWS, GCP, or Azure)</li>
                        <li>Excellent communication skills</li>
                      </ul>
                    </div>
                    <div class="flex flex-wrap gap-2 pt-2">
                      <UBadge variant="outline" label="Nuxt" />
                      <UBadge variant="outline" label="Node" />
                      <UBadge variant="outline" label="TypeScript" />
                      <UBadge variant="outline" label="CloudFlare" />
                    </div>
                    <div class="flex gap-3 pt-4">
                      <UButton variant="soft" label="Apply now" trailing-icon="lucide:arrow-right" />
                      <UButton variant="subtle" label="Share" trailing-icon="lucide:send" />
                    </div>
                  </div>
                </Motion>
              </AccordionContent>
            </LayoutGroup>
          </AccordionItem>
        </AccordionRoot>
      </Motion>
      <Motion :variants="childVariant" class="mt-16 text-center">
        <UCard variant="subtle">
          <h3 class="mb-2 text-2xl font-semibold">
            Don not see a perfect fit?
          </h3>
          <p class="mb-6 text-muted-foreground">
            We are always looking for talented people.
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <UButton label="Send your info" trailing-icon="lucide:send" variant="soft" size="lg" />
        </UCard>
      </Motion>
    </UContainer>
  </Motion>
</template>
