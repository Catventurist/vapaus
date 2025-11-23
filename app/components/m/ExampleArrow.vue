<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-12 ">
    <div class="flex flex-col gap-12 items-center">
      <div class="flex flex-col gap-6">
        <h2 class="text-2xl font-semibold text-center">
          {{ $t('arrow.variants') }}
        </h2>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <span class="w-24 text-default">
              {{ $t('arrow.wavy') }}
            </span>
            <MSquigglyArrow variant="wavy" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-24 text-default">
              {{ $t('arrow.bouncy') }}
            </span>
            <MSquigglyArrow variant="bouncy" class="text-info" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-24 text-default">
              {{ $t('arrow.smooth') }}
            </span>
            <MSquigglyArrow variant="smooth" class="text-purple-600" />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <h2 class="text-2xl font-semibold text-center">
          {{ $t('arrow.directions') }}
        </h2>
        <div class="flex flex-wrap gap-8 justify-center p-4">
          <div class="flex flex-col items-center gap-2">
            <span class="text-default">
              {{ $t('arrow.right') }}
            </span>
            <MSquigglyArrow direction="right" class="text-success" />
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-default">
              {{ $t('arrow.left') }}
            </span>
            <MSquigglyArrow direction="left" class="text-warning" />
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-default">
              {{ $t('arrow.down') }}
            </span>
            <MSquigglyArrow direction="down" class="text-pink-600" />
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-default">
              {{ $t('arrow.up') }}
            </span>
            <MSquigglyArrow direction="up" class="text-cyan-600" />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <h2 class="text-2xl font-semibold text-center">
          {{ $t('arrow.sizes') }}
        </h2>
        <div class="flex items-center gap-8 overflow-x-auto p-4">
          <MSquigglyArrow :width="150" :height="75" :stroke-width="2" title="2" />
          <MSquigglyArrow :width="250" :height="125" :stroke-width="3" class="text-info" />
          <MSquigglyArrow :width="300" :height="150" :stroke-width="4" class="text-purple-600" />
        </div>
      </div>
    </div>
  </div>
</template>
