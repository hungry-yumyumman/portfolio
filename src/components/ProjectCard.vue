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
//const cardColors = ['blue', 'green', 'red', 'purple', 'orange'];
// const chipColors = ['light-blue', 'light-green', 'pink', 'deep-orange', 'yellow'];

</script>

<template>
  <div class="">
    <v-card
      border="error"
      color="forestEmerald"
      height="200"
      @click= "() => router.push(View)"
      link>
      <v-card-item>
        <v-card-title class="text-white">{{ProjectName}}</v-card-title>
      </v-card-item>
      <v-card-text class="text-white">{{ProjectDescription}}</v-card-text>
      <div class="d-flex flex-wrap justify-center gap-1">
        <v-chip color="deep-purple-darken-4" variant="flat" v-for="(tech, index) in Technologies" :key="index">{{tech}}</v-chip>
      </div>
    </v-card>
  </div>

</template>

<style
  scoped>

</style>
