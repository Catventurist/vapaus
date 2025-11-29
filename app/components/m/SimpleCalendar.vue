<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable.mjs'
import { shallowRef } from 'vue'

type Paiva = {
  id: string
  date: string
  amount: number
}

const data = shallowRef<Paiva[]>([
  {
    id: '1',
    date: '2024-03-11T15:30:00',
    amount: 594
  },
  {
    id: '2',
    date: '2024-03-11T10:10:00',
    amount: 276
  },
  {
    id: '3',
    date: '2024-03-11T08:50:00',
    amount: 315
  },
  {
    id: '4',
    date: '2024-03-10T19:45:00',
    amount: 529
  },
  {
    id: '5',
    date: '2024-03-10T19:45:00',
    amount: 529
  },
  {
    id: '5',
    date: '2024-03-11T15:30:00',
    amount: 594
  },
  {
    id: '7',
    date: '2024-03-11T10:10:00',
    amount: 276
  },
  {
    id: '8',
    date: '2024-03-11T08:50:00',
    amount: 315
  },
  {
    id: '9',
    date: '2024-03-10T19:45:00',
    amount: 529
  },
  {
    id: '10',
    date: '2024-03-10T19:45:00',
    amount: 529
  },
  {
    id: '11',
    date: '2024-03-11T15:30:00',
    amount: 594
  },
  {
    id: '12',
    date: '2024-03-11T10:10:00',
    amount: 276
  },
  {
    id: '13',
    date: '2024-03-11T08:50:00',
    amount: 315
  },
  {
    id: '14',
    date: '2024-03-10T19:45:00',
    amount: 529
  },
  {
    id: '15',
    date: '2024-03-10T19:45:00',
    amount: 529
  },
  {
    id: '16',
    date: '2024-03-11T15:30:00',
    amount: 594
  },
  {
    id: '17',
    date: '2024-03-11T10:10:00',
    amount: 276
  },
  {
    id: '18',
    date: '2024-03-11T08:50:00',
    amount: 315
  },
  {
    id: '19',
    date: '2024-03-10T19:45:00',
    amount: 529
  },
  {
    id: '20',
    date: '2024-03-10T19:45:00',
    amount: 529
  },
  {
    id: '21',
    date: '2024-03-11T15:30:00',
    amount: 594
  },
  {
    id: '22',
    date: '2024-03-11T10:10:00',
    amount: 276
  },
  {
    id: '23',
    date: '2024-03-11T08:50:00',
    amount: 315
  },
  {
    id: '24',
    date: '2024-03-10T19:45:00',
    amount: 529
  }
])

useSortable('#el', data, {
  animation: 150,
  group: 'shared',
  invertSwap: true
})
</script>

<template>
  <div id="el" class="day grid grid-cols-7 grid-rows-5 lg:h-screen gap-2">
    <div
      v-for="(day, index) in data" :key="day.id" ref="el"
      class="group relative flex flex-col items-center bg-muted gap-2 duration-300 ">
      <div class="flex flex-col items-center justify-center">
        <MNumberCount :max="index + 1" />
        <MNumberCount :max="day.amount" />
      </div>
    </div>
  </div>
</template>
