<script setup lang="ts">
import { useGoTo } from 'vuetify'

const goTo = useGoTo()

</script>

<template>
  <nav class="backdrop-blur-md bg-red-800 lg:bg-gray-400/20 rounded-[20px] p-2 flex justify-center items-center h-full">
    <ul class="flex flex-row gap-x-12 sm:gap-x-28 md:gap-x-40 lg:gap-x-64 text-center">
      <li>
        <a href="#home" class="bg-transparent font-sans text-sm sm:text-lg text-white font-semibold">Home</a>
      </li>
      <li>
        <a href="#about" class="font-sans text-sm sm:text-lg text-white font-semibold">About</a>
      </li>
      <li>
        <a href="#experience" class="bg-transparent font-sans text-sm sm:text-lg text-white font-semibold">Experience</a>
      </li>
      <li>
        <a href="#projects" class="font-sans text-sm sm:text-lg text-white font-semibold">Projects</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  height: 100%;
}
</style>
