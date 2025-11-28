<script setup lang="ts">
import Tab from './Tab.vue'
import {
  allIngredients,
  getNextIngredient,
  initialTabs
} from './ingredients'
import type { Ingredient } from './ingredients'
import { closestItem, removeItem } from './array'
import { AnimatePresence, LayoutGroup, ReorderGroup, motion } from 'motion-v'

const tabs = ref(initialTabs)
const selectedTab = ref(tabs.value[0])

function remove(item: Ingredient) {
  if (item === selectedTab.value) {
    selectedTab.value = closestItem(tabs.value, item)
  }
  tabs.value = [...removeItem(tabs.value, item)]
}

function add() {
  const nextItem = getNextIngredient(tabs.value as Ingredient[])
  if (nextItem) {
    tabs.value = [...tabs.value, nextItem]
    selectedTab.value = nextItem
  }
}
</script>

<template>
  <div class="mx-auto w-[480px] h-[360px] rounded-lg bg-default/80 backdrop-blur-sm overflow-hidden flex flex-col">
    <LayoutGroup>
      <ReorderGroup v-model:values="tabs" as="ul" axis="x" class="tabs">
        <AnimatePresence :initial="false">
          <Tab
            v-for="it in tabs" :key="it.label" :item="it" :data-size="tabs.length" :is-selected="selectedTab === it"
            @click="selectedTab = it" @remove="remove(it)" />
        </AnimatePresence>
        <motion.button
          class="add-item flex items-center justify-center"
          :disabled="tabs.length === allIngredients.length" :initial="{ scale: 1 }" :press="{ scale: 0.9 }"
          @click="add">
          <Icon name="lucide-plus-circle" class="text-primary size-6 self-center" />
        </motion.button>
      </ReorderGroup>
    </LayoutGroup>
    <main>
      <AnimatePresence mode="wait" :initial="false">
        <motion.div
          :key="selectedTab ? selectedTab.label : 'empty'" :initial="{ opacity: 1, y: 20 }"
          :animate="{ opacity: 1, y: 0 }" :exit="{ opacity: 0, y: -20 }" :transition="{ duration: 0.2 }">
          {{ selectedTab ? selectedTab.icon : '😋' }}
        </motion.div>
      </AnimatePresence>
    </main>
  </div>
</template>

<style scoped>
.nav {
  color: var(--color-default);
  padding: 5px 5px 0;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid var(--color-muted);
  height: 44px;
  display: flex;
  max-width: 100%;
  overflow: hidden;
}

.tabs {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: nowrap;
  padding-right: 10px;
  flex: 1;
  overflow: hidden;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 128px;
  flex-grow: 1;
  user-select: none;
}

:deep(ul),
:deep(li) {
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 14px;
}

:deep(li) {
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  padding: 10px 15px;
  position: relative;
  cursor: pointer;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  position: relative;
  user-select: none;
}

:deep(li span) {
  flex-shrink: 1;
  flex-grow: 1;
  line-height: 18px;
  display: block;
  min-width: 0;
  padding-right: 30px;
  mask-image: linear-gradient(to left, transparent 20px, var(--color-default) 40px);
  -webkit-mask-image: linear-gradient(to left, transparent 20px, var(--color-default) 40px);
}

:deep(li .close) {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
}

:deep(li button) {
  width: 20px;
  height: 20px;
  border: 0;
  color: var(--color-default);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: var(--foreground);
  margin-left: 10px;
  cursor: pointer;
  flex-shrink: 0;
}

.default {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  color: var(--color-default);
}

.add-item {
  width: 30px;
  height: 30px;
  color: var(--color-muted);
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  align-self: center;
}

.add-item:disabled {
  opacity: 0.4;
  cursor: default;
  pointer-events: none;
}
</style>
