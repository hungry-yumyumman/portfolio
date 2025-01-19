<script setup lang="ts">

const items = [
  {
    title: 'Projects',
    disabled: false,
    href: '/#projects',
  },
  {
    title: 'Hosted Gramps Web',
    disabled: true,
    href: '',
  },
]

</script>

<template>
  <div class="text-sm font-bold text-white pt-8 pl-3 left-0 top-0">
    <v-breadcrumbs :items="items" divider=">">
    </v-breadcrumbs>
  </div>

  <div class=" max-w-7xl mx-auto justify-center items-center flex flex-col text-5xl font-bold text-white pt-12 mb-44">

    Hosted Gramps Web
    <div class="flex flex-col text-lg pt-12 m-7">
      Coming Soon

    </div>

  </div>
</template>

<style
  scoped>

</style>
