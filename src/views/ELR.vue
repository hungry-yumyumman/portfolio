<script setup lang="ts">

const items = [
  {
    title: 'Projects',
    disabled: false,
    href: '/#projects',
  },
  {
    title: 'Engineering Locker Registration',
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

    Engineering Locker Registration
    <div class="flex flex-col text-lg pt-12 m-7">
      This project was proposed as a more efficient way to allow engineering students
      register for a locker in the Engineering Lab Wing. Just for a bit of context, students would have to go all the way to
      the Engineering & Computer Science Students Society lounge and register a locker on an excel spreadsheet.

      This web application eliminated the need to be physically present in the lounge register.

      While I did help build initial version of this application, it has since been revamped

    </div>

  </div>

</template>

<style
  scoped>

</style>
