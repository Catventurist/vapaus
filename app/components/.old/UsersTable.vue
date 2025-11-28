<script setup lang="ts">
import { Motion } from 'motion-v'

const users = [
  {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: '/cat.png',
    role: 'Catmin',
    status: 'active',
    joinDate: '2025-01-15',
    location: 'New York, US'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    avatar: '/cat.png',
    role: 'User',
    status: 'active',
    joinDate: '2025-02-20',
    location: 'San Francisco, US'
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael@example.com',
    avatar: '/cat.png',
    role: 'Moderator',
    status: 'inactive',
    joinDate: '2025-01-08',
    location: 'London, UK'
  }
]
</script>

<template>
  <div class="rounded-xl border border-border bg-muted/40 p-3 sm:p-6">
    <div class="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h3 class="text-lg font-semibold sm:text-xl">
          Recent Users
        </h3>
        <p class="text-sm text-muted">
          Latest user registrations and activity
        </p>
      </div>
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1 text-sm text-green-500">
          <Icon name="lucide-trending-up" class="size-4" />
          <span>+12%</span>
        </div>
        <UButton variant="outline" size="sm" click="props.onAddUser">
          <Icon name="lucide-plus" class="size-4" />
          <span class="hidden sm:inline">Add User</span>
          <span class="sm:hidden">Add</span>
        </UButton>
      </div>
    </div>
    <div class="space-y-2">
      <Motion
        v-for="user, index in users" :key="user.id" :initial="{ opacity: 0, y: 10 }"
        :animate="{ opacity: 1, y: 0 }" :transition="{ delay: index * 0.05 }" as="div"
        class="group flex flex-col items-start gap-4 rounded-lg p-4 transition-colors hover:bg-accent/50 sm:flex-row sm:items-center">
        <div class="flex w-full items-center gap-4 sm:w-auto">
          <div class="relative">
            <NuxtImg :src="user.avatar" :alt="user.name" :width="40" :height="40" class="rounded-full" />
            <div :class="`absolute -bottom-1 -right-1 size-3 rounded-full border-2 border-background ${user.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`" />
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <h4 class="truncate text-sm font-medium">
                {{ user.name }}
              </h4>
              <span
                :class="`rounded-full px-2 py-1 text-xs ${user.role === 'Catmin'
                  ? 'bg-purple-500/10 text-purple-500' : user.role === 'Moderator' ? 'bg-blue-500/10 text-blue-500'
                    : 'bg-gray-500/10 text-gray-500'}`">
                {{ user.role }}
              </span>
            </div>
            <div class="mt-1 flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:gap-4">
              <div class="flex items-center gap-1">
                <Icon name="lucid-email" class="size-3" />
                <span class="truncate">
                  {{ user.email }}
                </span>
              </div>
              <div class="flex items-center gap-1">
                <Icon name="lucide-map-pin" class="size-3" />
                <span>{{ user.location }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="ml-auto flex items-center gap-3">
          <div class="flex items-center gap-1 text-xs text-muted">
            <Icon name="lucide-calendar" class="size-3" />
            <span>{{ new Date(user.joinDate).toLocaleDateString() }}</span>
          </div>
          <UButton variant="ghost" size="sm" class="ml-auto">
            <Icon name="lucide-more-horizontal" class="size-4" />
          </UButton>
        </div>
      </Motion>
    </div>
  </div>
</template>
