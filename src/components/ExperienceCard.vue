<script setup lang="ts">

defineProps({
  JobTitle: String,
  Location: String,
  StartDate: String,
  EndDate: String,
  Company: String,
  Competencies: Array,
});

</script>

<template>
  <div class="experience-card bg-gray-800 p-4 rounded-md text-white">
    <h4 class="text-xl font-bold">{{ JobTitle }}</h4>
    <div class="font-medium">
      <p>{{ Company }}</p>
      <p>{{ StartDate }} - {{ EndDate || 'Present' }}</p>
    </div>
    <div v-for="(competency, index) in Competencies" :key="index">
      {{competency}}
    </div>



  </div>
</template>

<style scoped>

</style>
