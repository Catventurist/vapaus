<script setup lang="ts">
const people = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    image: '/cat.png'
  },
  {
    id: 2,
    name: 'Robert Johnson',
    designation: 'Product Manager',
    image: '/cat.png'
  },
  {
    id: 3,
    name: 'Jane Smith',
    designation: 'Data Scientist',
    image: '/cat.png'
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'UX Designer',
    image: '/cat.png'
  },
  {
    id: 5,
    name: 'Tyler Durden',
    designation: 'Soap Developer',
    image: '/cat.png'
  },
  {
    id: 6,
    name: 'Dora',
    designation: 'The Explorer',
    image: '/cat.png'
  },
  {
    id: 7,
    name: 'Cat',
    designation: 'Chilling',
    image: '/cat.png'
  }
]
</script>

<template>
  <div class="mb-10 flex min-h-96 w-full flex-row items-center justify-center">
    <MAniTooltip :items="people" />
  </div>
</template>
