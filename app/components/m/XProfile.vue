<script setup lang="ts">
import { AnimatePresence, Motion } from 'motion-v'

const examples = [
  {
    displayName: 'Dr. Quantum',
    username: 'quantum_coder',
    about:
      'I am a quantum computing researcher who is obsessed with machine learning applications. I spend my days trying to break through classical computing limitations and build systems that might one day change everything!',
    generationType: 'technical',
    image: '/cat.png'
  },
  {
    displayName: 'Catventurist',
    username: 'cat',
    about: $t('profile.userbio'),
    generationType: 'technical',
    image: '/cat.png'
  },
  {
    displayName: 'Lena V. Capital',
    username: 'vc_insider',
    about:
      'As a venture capital partner focused on fintech, I help identify and scale innovative financial technologies. My passion is nurturing startups that have the potential to become even better.',
    generationType: 'professional',
    image: '/cat.png'
  },
  {
    displayName: 'HR Innovator Tom',
    username: 'futureofwork_tom',
    about:
      'I am revolutionizing workplace culture as a Chief People Officer. My current focus is creating sustainable remote work models that boost productivity while maintaining team connection.',
    generationType: 'professional',
    image: '/cat.png'
  },
  {
    displayName: 'Poetica',
    username: 'word_alchemist',
    about:
      'I transform raw emotions into lyrical poetry that lingers in your soul. When I am not crafting verses, you will find me hosting intimate spoken word nights in cozy bookshop corners.',
    generationType: 'creative',
    image: '/cat.png'
  },
  {
    displayName: 'SynthWave Maya',
    username: '80s_retro',
    about:
      'I create digital art that resurrects the neon-drenched aesthetic of 1980s retro futurism. My work blends VHS nostalgia with modern AI tools to imagine what tomorrow looked like yesterday.',
    generationType: 'creative',
    image: '/cat.png'
  },
  {
    displayName: 'Pun Master Flex',
    username: 'dad_joke_ceo',
    about:
      'I am on a crusade to make the world 37% punnier! By day I am a mild-mannered office worker, but by lunchtime I am crafting wordplay so cheesy it needs a lactose warning. 🧀',
    generationType: 'fun',
    image: '/cat.png'
  },
  {
    displayName: 'Taco Hero',
    username: 'salsa_avenger',
    about:
      'I am the self-appointed guardian of authentic Mexican street food! When I am not hunting for the perfect taco, I am in my kitchen experimenting with salsa recipes that make taste buds sing. 🌶️',
    generationType: 'fun',
    image: '/cat.png'
  },
  {
    displayName: 'Mountain Mike',
    username: 'trail_tales',
    about:
      'Just a regular guy who finds peace in hiking trails and capturing nature through my lens. I share stories from paths less traveled - the muddier, the better!',
    generationType: 'casual',
    image: '/cat.png'
  },
  {
    displayName: 'Bookish Beth',
    username: 'cozyreads',
    about:
      'I am that friend who always has book recommendations and a fresh cup of tea. Currently trying to read every mystery novel published after 1985 (wish me luck!).',
    generationType: 'casual',
    image: '/cat.png'
  },
  {
    displayName: 'Astro Chef',
    username: 'space_kitchen',
    about:
      'I combine my love for space exploration and gourmet cooking by developing recipes that astronauts could make in zero-g! Terrestrial foodies seem to like them too. 🚀',
    generationType: 'creative',
    image: '/cat.png'
  },
  {
    displayName: 'Data DJ',
    username: 'analytics_beats',
    about:
      'By day I am a data analyst crunching numbers, by night I am mixing beats at underground clubs. Sometimes I even make songs using SQL query rhythms - nerdcore at its finest! 🎧',
    generationType: 'fun',
    image: '/cat.png'
  }
]
const profile = computed(() => examples[1])

const tabs = [
  { id: 'posts', label: $t('profile.posts'), icon: 'lucide-newspaper' },
  { id: 'replies', label: $t('profile.replies'), icon: 'lucide-reply' },
  { id: 'highlights', label: $t('profile.highlights'), icon: 'lucide-chevrons-up' },
  { id: 'media', label: $t('profile.media'), icon: 'lucide-file' },
  { id: 'reactions', label: $t('profile.reactions'), icon: 'lucide-smile-plus' }
]
</script>

<template>
  <div class="max-w-7xl mx-auto flex">
    <div class="flex w-full">
      <aside class="hidden lg:flex flex-col gap-2 min-w-60 p-4 pr-6 sticky top-0 h-screen">
        <AnimatePresence>
          <Motion
            v-for="(user, index) in examples" :key="user.username" :initial="{ opacity: 0, scale: 0.7 }"
            :animate="{ opacity: 1, scale: 1 }" :transition="{ delay: index * 0.1 }" as-child>
            <UUser
              :description="user.username" :name="user.displayName" class="duration-300 hover:scale-110 active:scale-90"
              :avatar="{ src: user.image, alt: user.displayName }" />
          </Motion>
        </AnimatePresence>
      </aside>
      <main class="flex-1 min-h-screen">
        <div class="relative">
          <div>
            <div class="relative">
              <NuxtImg src="/catbirchdark.webp" :height="220" :width="600" class="absolute top-0 -z-1 opacity-60" />
              <div class="absolute top-0 start-2 flex flex-row min-w-10 items-center text-muted">
                <UUser :name="'@' + profile?.username" :avatar="{ src: profile?.image, alt: profile?.displayName }" class="backdrop-blur-md" />
              </div>
              <div class="flex justify-end mb-4">
                <UButton icon="lucide-settings" variant="subtle" class="rounded-full" />
              </div>
              <div class="mt-6 mx-2">
                <h4 class="font-mono text-primary w-20 text-2xl mb-2 text-shadow-md text-shadow-info">
                  {{ profile?.displayName }}
                </h4>
                <p class="my-4 text-shadow-md text-shadow-info">
                  {{ profile?.about }}
                </p>
                <div
                  class="flex flex-1 justify-between gap-4 mt-2 *:p-2 *:backdrop-blur-md *:rounded-full *:text-primary *:duration-300 *:hover:text-default *:hover:scale-110">
                  <span class="flex items-center gap-1 mx-2">
                    <Icon name="lucide-map-pin" class="size-6 text-primary" />
                    {{ $t('profile.location') }}
                  </span>
                  <span class="flex items-center gap-1">
                    <Icon name="lucide-link" class="size-6 text-primary" />
                    <span class="inline w-30 lowercase">
                      {{ profile?.username ? `${profile.username}.com` : undefined }}
                    </span>
                  </span>
                  <span class="flex items-center w-40 gap-1">
                    <Icon name="lucide-calendar" class="size-6 text-primary" />
                    {{ $t('profile.joined') }} 2025
                  </span>
                </div>
                <div
                  class="flex gap-4 mt-2 *:backdrop-blur-md *:text-primary *:duration-300 *:hover:text-default *:hover:scale-110">
                  <div class="flex font-bold items-center justify-center gap-1">
                    <MNumberCount :max="Math.floor(Math.random() * 100)" />
                    <span class="text-muted">
                      {{ $t('profile.following') }}
                    </span>
                  </div>
                  <span class="flex font-bold items-center justify-center gap-1">
                    <MNumberCount :max="Math.floor(Math.random() * 100)" />
                    <span class="text-muted">
                      {{ $t('profile.followers') }}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <UTabs :items="tabs">
            <template #content>
              <div class="space-y-4">
                <div
                  v-for="(post, index) in examples" :key="post.username"
                  class="flex flex-col border-b border-muted">
                  <div class="group flex gap-4 p-4">
                    <UUser
                      :avatar="{ src: post.image, icon: 'i-lucide-user' }" orientation="vertical"
                      class="min-w-30 duration-300 group-hover:rotate-2 origin-top-left" :name="'@' + post?.username"
                      :description="post.displayName" />
                    <div class="space-y-2">
                      <div class="flex items-center gap-2">
                        <span class="font-bold font-mono min-w-20">
                          {{ post.generationType }}
                        </span>
                        <div class="flex text-muted items-center justify-center gap-1">
                          <span>
                            <MNumberCount :max="index * 7" />
                            {{ $t('time.h') }}
                          </span>
                        </div>
                      </div>
                      <div
                        class="min-h-22 text-pretty text-muted p-2 bg-muted/70 rounded overflow-hidden duration-300 group-hover:text-default">
                        {{ post.about }}
                      </div>
                    </div>
                  </div>
                  <div
                    class="p-4 flex justify-around *:text-primary *:duration-300 *:hover:text-default *:hover:scale-110">
                    <span class="flex items-center gap-2">
                      <Icon name="lucide-message-circle" class="size-6 text-primary" />
                      <span class="text-sm w-6">
                        {{ Math.floor(Math.random() * 100) }}
                      </span>
                    </span>
                    <span class="flex items-center gap-2">
                      <Icon name="lucide-repeat-2" class="size-6 text-primary" />
                      <span class="text-sm w-6">
                        {{ Math.floor(Math.random() * 100) }}
                      </span>
                    </span>
                    <span class="flex items-center gap-2">
                      <Icon name="lucide-heart" class="size-6 text-primary" />
                      <span class="text-sm w-6">
                        {{ Math.floor(Math.random() * 100) }}
                      </span>
                    </span>
                    <span class="flex items-center gap-2">
                      <Icon name="lucide-chart-no-axes-column" class="size-6 text-primary" />
                      <span class="text-sm w-6">
                        {{ Math.floor(Math.random() * 1000) }}
                      </span>
                    </span>
                    <Icon name="lucide-bookmark" class="size-6 text-primary" />
                    <Icon name="lucide-share" class="size-6 text-primary" />
                  </div>
                </div>
              </div>
            </template>
          </UTabs>
        </div>
      </main>
      <aside class="hidden xl:flex flex-col w-[350px] min-w-[350px] p-4 sticky top-20 h-screen">
        <div class="space-y-4">
          <div class="h-12 bg-default rounded-lg" />
          <div class="p-4 space-y-4 bg-default rounded-lg">
            <div class="h-6 bg-muted rounded w-1/3" />
            <div v-for="i in 3" :key="i" class="flex items-center gap-3">
              <div class="h-10 w-10 bg-muted rounded-full" />
              <div class="flex-1 space-y-2">
                <div class="h-4 bg-muted rounded w-2/3" />
                <div class="h-3 bg-muted rounded w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
