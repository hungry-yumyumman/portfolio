<script setup lang="ts">
import { useRouter } from 'vue-router'

interface ProjectProps {
  ProjectName: string
  ProjectDescription: string
  Technologies: string[]
  View: string
  ColorIndex: number
}

defineProps<ProjectProps>()
const router = useRouter()

const cardHoverColors = [
  'hover:from-orangePri hover:to-orangePri',
  'hover:from-darkGrey hover:to-darkGrey',
  'hover:from-grampsBrown hover:to-grampsBrown',
] as const

const chipHoverColors = [
  'group-hover:bg-black',
  'group-hover:bg-lighterGrey',
  'group-hover:bg-pink-500',
] as const

const truncateString = (input: string) => {
  if (input.length > 25) {
    return input.slice(0, 25) + "..."
  }
  return input
}

const getCardHoverColor = (index: number): string => {
  return cardHoverColors[index] || cardHoverColors[0]
}

const getChipHoverColor = (index: number): string => {
  return chipHoverColors[index] || chipHoverColors[0]
}
</script>

<template>
  <div
    :class="[
      'bg-gradient-to-br',
      'from-forestEmerald from-35% to-darkGreen',
      getCardHoverColor(ColorIndex),
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
    @click="() => router.push(View)"
  >
    <div>
      <h2 class="text-lg font-bold text-white pb-2">{{ truncateString(ProjectName) }}</h2>
    </div>
    <p class="text-white">{{ ProjectDescription }}</p>
    <div v-if="Technologies?.length > 0" class="flex flex-wrap justify-center gap-1 mt-2">
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
          getChipHoverColor(ColorIndex)
        ]"
      >
        {{ tech }}
      </div>
    </div>
  </div>
</template>
