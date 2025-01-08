<script setup lang="ts">

defineProps({
  ProjectName: String,
  ProjectDescription: String,
  Technologies: Array
})
</script>

<template>
  <div class="">
    <v-card height="200">
      <v-card-item>
        <v-card-title>{{ProjectName}}</v-card-title>
      </v-card-item>
      <v-card-text>{{ProjectDescription}}</v-card-text>
      <div>
        <v-chip-group v-for="(tech, index) in Technologies" :key="index">
          <v-chip>{{tech}}</v-chip>
        </v-chip-group>
      </div>
    </v-card>
  </div>

</template>

<style
  scoped>

</style>
