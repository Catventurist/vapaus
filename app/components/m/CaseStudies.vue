<script setup lang="ts">
import { AccordionRoot, AccordionContent, AccordionItem, AccordionTrigger } from 'reka-ui'

const caseStudies = [
  {
    id: 'case-1',
    title: 'E-Commerce Platform Redesign',
    client: 'RetailTech Inc.',
    category: 'UX/UI Design',
    summary:
      'A comprehensive redesign of an outdated e-commerce platform to improve user experience, increase conversions, and modernize the brand.',
    coverImage: '/catbirchdark.webp',
    duration: '12 weeks',
    year: '2023',
    challenge:
      'The existing platform suffered from a confusing navigation structure, complicated checkout process, poor mobile experience, and outdated visual design, resulting in high cart abandonment and low conversion rates.',
    process:
      'I followed a user-centered design process that involved extensive user research, competitive analysis, wireframing, prototyping, and multiple rounds of usability testing to create a solution that addressed all key pain points.',
    solution:
      'The redesigned platform featured a clean, modern interface with intuitive navigation, streamlined checkout process, improved product discovery, and a responsive design that worked seamlessly across all devices.',
    results: [
      '43% increase in conversion rate',
      '27% reduction in cart abandonment',
      '58% increase in mobile sales',
      'Customer satisfaction score improved from 3.2/10 to 8.7/10'
    ],
    testimonial: {
      quote:
        'The redesigned platform has transformed our business. Not only have we seen dramatic improvements in conversion rates and sales, but our team finds the new admin interface much easier to use.',
      name: 'Sarah Johnson',
      description: 'E-Commerce Director',
      avatar: {
        src: '/cat.png'
      }
    },
    tools: ['Figma', 'Adobe XD', 'InVision', 'UserTesting'],
    link: '#'
  },
  {
    id: 'case-2',
    title: 'Mobile Banking Application',
    client: 'FinanceFirst Bank',
    category: 'Mobile Development',
    summary:
      'Design and development of a secure, user-friendly mobile banking application with advanced features and biometric authentication.',
    coverImage: '/catbirchdark.webp',
    duration: '16 weeks',
    year: '2022',
    challenge:
      'FinanceFirst needed a mobile banking solution that would provide customers with a secure, convenient way to manage their finances on the go while addressing concerns about security, ease of use, and feature parity with the web platform.',
    process:
      'The project began with security research and competitive analysis, followed by user interviews to understand customer needs. I created a comprehensive information architecture, wireframes, and interactive prototypes that underwent rigorous security and usability testing.',
    solution:
      'A feature-rich mobile banking application with biometric authentication, real-time transaction alerts, mobile check deposit, bill pay, and account management features in an intuitive, accessible interface.',
    results: [
      '92% user satisfaction rating',
      '35% increase in mobile transactions',
      '28% reduction in call center volume',
      '4.8/5 average app store rating'
    ],
    testimonial: {
      quote:
        'This mobile app has exceeded our expectations in every way. The intuitive design and robust security features have given our customers confidence in managing their finances on the go.',
      name: 'Michael Chen',
      description: 'Digital Banking Director',
      avatar: {
        src: '/cat.png'
      }
    },
    tools: ['React Native', 'Figma', 'Firebase', 'Jest'],
    link: '#'
  },
  {
    id: 'case-3',
    title: 'Healthcare Patient Portal',
    client: 'MediCare Solutions',
    category: 'Healthcare Software',
    summary:
      'Created an accessible patient portal allowing secure access to medical records, appointment scheduling, and provider communication.',
    coverImage: '/catbirchdark.webp',
    duration: '20 weeks',
    year: '2022',
    challenge:
      'MediCare Solutions needed a HIPAA-compliant patient portal that would make healthcare more accessible while maintaining strict security and privacy standards. The system needed to integrate with existing EHR systems and be usable by patients of all ages and abilities.',
    process:
      'I conducted extensive research including interviews with patients, healthcare providers, and administrators. I created a secure architecture plan, developed accessible wireframes, and conducted usability testing with diverse user groups including elderly patients and those with disabilities.',
    solution:
      'A comprehensive, accessible patient portal that allows secure access to medical records, appointment scheduling, prescription refills, provider messaging, and telemedicine integration, all with strict adherence to HIPAA compliance.',
    results: [
      '97% patient satisfaction',
      'Reduced administrative tasks by 35%',
      '42% increase in patient portal adoption',
      '31% reduction in missed appointments'
    ],
    testimonial: {
      quote:
        'This patient portal has transformed how we deliver care. Patients love the convenience, and our staff has seen a significant reduction in administrative burden.',
      name: 'Dr. Eleanor Patel',
      description: 'Chief Medical Officer',
      avatar: {
        src: '/cat.png'
      }
    },
    tools: ['React', 'Node.js', 'MongoDB', 'WCAG Guidelines'],
    link: '#'
  },
  {
    id: 'case-4',
    title: 'AI-Powered Content Recommendation Engine',
    client: 'StreamFlix Media',
    category: 'Machine Learning',
    summary:
      'Developed and implemented an AI recommendation system that significantly improved content discovery and user engagement.',
    coverImage: '/catbirchdark.webp',
    duration: '14 weeks',
    year: '2023',
    challenge:
      'StreamFlix had a growing content library but users were struggling to discover relevant content beyond the most popular titles. They needed a sophisticated recommendation system that would increase engagement, viewing time, and retention.',
    process:
      'I analyzed existing user data, researched recommendation algorithms, and designed a hybrid approach combining collaborative filtering and content-based recommendations. I implemented A/B testing frameworks to continuously evaluate and refine the system.',
    solution:
      'A personalized recommendation engine using machine learning to analyze viewing history, preferences, and similar user behaviors to suggest relevant content, with a user interface that elegantly presents recommendations with context.',
    results: [
      '28% increase in content engagement',
      '17% reduction in churn rate',
      '22% increase in average viewing time',
      'Expanded content discovery beyond top 10% of library'
    ],
    testimonial: {
      quote:
        'The new recommendation engine has significantly improved how users discover content on our platform. We are seeing engagement with a much broader range of our library, and users are spending more time on the service.',
      name: 'James Rodriguez',
      description: 'Product Director',
      avatar: {
        src: '/cat.png'
      }
    },
    tools: ['Python', 'TensorFlow', 'AWS', 'React'],
    link: '#'
  }
]
</script>

<template>
  <UPageSection
    title="Case Studies" description="Explore detailed case studies of selected projects. Click on any study to see the full story behind the work."
    class="bg-default py-16 md:py-24">
    <div class="container mx-auto px-4 2xl:max-w-[1400px]">
      <div class="mx-auto max-w-4xl">
        <AccordionRoot type="single" collapsible class="w-full">
          <AccordionItem
            v-for="study in caseStudies" :key="study.id" :value="study.id"
            class="border-primary/10 hover:border-primary/30 mb-6 overflow-hidden rounded-lg border duration-300 hover:shadow-primary hover:shadow-sm">
            <AccordionTrigger class="px-6 py-5">
              <div class="group flex flex-1 items-center gap-4">
                <div class="relative hidden size-16 overflow-hidden rounded-md border sm:block">
                  <NuxtImg :src="study.coverImage" :width="64" :height="64" :alt="study.title" class="object-cover rounded-full duration-300 group-hover:scale-110" />
                </div>
                <div class="flex-1 text-left">
                  <div class="mb-1 flex items-center gap-3">
                    <h3 class="text-xl">
                      {{ study.title }}
                    </h3>
                    <UBadge variant="soft">
                      {{ study.category }}
                    </UBadge>
                  </div>
                  <p class="text-muted line-clamp-2">
                    {{ study.summary }}
                  </p>
                </div>
                <div class="hidden items-center gap-4 sm:flex">
                  <div class="text-right">
                    <div class="text-muted gap-2 flex items-center justify-end">
                      <Icon name="lucide-clock" class="size-5 text-primary duration-300 group-hover:rotate-20" />
                      {{ study.duration }}
                    </div>
                    <div class="text-muted">
                      {{ study.year }}
                    </div>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent class="text-default/80 bg-default/70 backdrop-blur-sm data-[state=open]:animate-[accordion-down_300ms_ease-out] data-[state=closed]:animate-[accordion-up_300ms_ease-out] overflow-hidden focus:outline-none">
              <div class="text-muted bg-muted/30 px-6 py-3">
                Client:
                <span class="text-default font-medium">
                  {{ study.client }}
                </span>
                • Duration:
                <span class="text-default font-medium">
                  {{ study.duration }}
                </span>
              </div>
              <div class="grid grid-cols-1 gap-8 p-6 md:grid-cols-5">
                <div class="md:col-span-3 text-pretty">
                  <div class="mb-8">
                    <h4 class="text-muted mb-2 uppercase">
                      The Challenge
                    </h4>
                    <p class="text-sm">
                      {{ study.challenge }}
                    </p>
                  </div>
                  <div class="mb-8">
                    <h4 class="text-muted mb-2 uppercase">
                      The Process
                    </h4>
                    <p class="text-sm">
                      {{ study.process }}
                    </p>
                  </div>
                  <div class="mb-8">
                    <h4 class="text-muted mb-2 uppercase">
                      The Solution
                    </h4>
                    <p class="text-sm">
                      {{ study.solution }}
                    </p>
                  </div>
                  <div class="mb-8">
                    <h4 class="text-muted mb-2 uppercase">
                      Key Results
                    </h4>
                    <ul class="space-y-2">
                      <li v-for="(result, index) in study.results" :key="index" class="flex items-start gap-2">
                        <span
                          class="bg-primary/10 text-primary flex size-5 shrink-0 items-center justify-center rounded-full font-medium">
                          {{ index + 1 }}
                        </span>
                        <span>
                          {{ result }}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="mb-8">
                    <h4 class="text-muted mb-2 uppercase">
                      Client Testimonial
                    </h4>
                    <UCard class="bg-muted/50 rounded-lg p-4 duration-300 hover:scale-105">
                      <q class="mb-5 italic text-pretty">
                        {{ study.testimonial.quote }}
                      </q>
                      <UUser
                        :name="study.testimonial.name" :description="study.testimonial.description"
                        :avatar="study.testimonial.avatar" class="mt-4" />
                    </UCard>
                  </div>
                </div>
                <div class="md:col-span-2">
                  <div class="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
                    <NuxtImg :src="study.coverImage" :height="300" :width="300" :alt="study.title" class="object-cover rounded-2xl duration-300 hover:rotate-y-10" />
                  </div>
                  <div class="mt-6 space-y-4">
                    <div>
                      <h4 class="text-muted mb-2 uppercase">
                        Tools & Technologies
                      </h4>
                      <div class="flex flex-wrap gap-1.5">
                        <UBadge v-for="tool in study.tools" :key="tool" variant="subtle">
                          {{ tool }}
                        </UBadge>
                      </div>
                    </div>
                    <div class="pt-4">
                      <NuxtLink :to="study.link" class="group w-full flex p-2 gap-2 items-center justify-center">
                        <UButton label="View Full Case Study" color="info" trailing-icon="lucide-arrow-right" variant="soft" />
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </div>
    </div>
  </UPageSection>
</template>
