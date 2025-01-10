<script setup lang="ts">

defineProps({
  JobTitle: String,
  Location: String,
  StartDate: String,
  EndDate: String,
  Company: String,
  CompanyURL: String,
  Competencies: Array,
  Technologies: Array
});

</script>

<template>
  <div class="bg-gray-800 p-4 rounded-md text-white">
    <h4 class="text-xl font-bold">{{ JobTitle }}</h4>
    <div class="font-medium">
      <a :href="CompanyURL" class="underline hover:text-violet-400 active:text-violet-700" target="_blank">{{ Company }}</a>
      <p>{{ StartDate }} - {{ EndDate || 'Present' }}</p>
    </div>
    <div v-for="(competency, index) in Competencies" :key="index">
      {{competency}}
    </div>
  </div>
</template>

<style scoped>

</style>
