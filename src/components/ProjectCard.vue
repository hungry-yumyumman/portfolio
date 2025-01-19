<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  ProjectName: String,
  ProjectDescription: String,
  Technologies: Array,
  View: String,
  ColorIndex: Number
})
const cardHoverColors = ['hover:from-orangePri hover:to-orangePri', 'hover:from-darkGrey', 'hover:from-grampsBrown', 'purple', 'orange'];
const chipHoverColors = ['group-hover:bg-black', 'group-hover:bg-lighterGrey', 'pink', 'deep-orange', 'yellow'];

const truncateString = (input: string) => {
  if (input.length > 25) {
    return input.slice(0, 25) + "...";
  } else {
    return input;
  }
}

</script>

<template>

  <div
  :class="[
    'bg-gradient-to-br',
    'from-forestEmerald from-35% to-darkGreen',
    `${cardHoverColors[ColorIndex]}`,
    'cursor-pointer',
    'rounded-lg',
    'p-4',
    'border-2',
    'border-brightTeal',
    'hover:border-white',
    'transition-all',
    'duration-300',
    'ease-in-out',
    'group'
  ]"
  >
    <div>
      <h2 class="text-lg font-bold text-white pb-2">{{ truncateString(ProjectName) }}</h2>
    </div>
    <p class="text-white">{{ ProjectDescription }}</p>
    <div v-if="Technologies?.length > 0" class="d-flex flex-wrap justify-center gap-1 mt-2">
      <div
        v-for="(tech, index) in Technologies"
        :key="index"
        :class="[
          'bg-darkGreen',
          'rounded-full',
          'px-3',
          'py-1',
          'text-sm',
          'text-white',
          `${chipHoverColors[ColorIndex]}`
        ]"
      >
        {{ tech }}
      </div>
    </div>
  </div>

</template>

<style
  scoped>

</style>
