<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { exp } from '@/stores/util'
import ExperienceCard from './components/ExperienceCard.vue'
import { IconBrandLinkedin } from '@tabler/icons-vue';
import { IconBrandGithub } from '@tabler/icons-vue';
import { IconMail } from '@tabler/icons-vue';
import { format } from 'date-fns';

const experience : Ref<exp[]> = ref([
  {
    JobTitle: "Computer Help Desk Analyst",
    StartDate: format(new Date('January 2, 2022'), "MMMM yyyy"),
    EndDate:"",
    Location:"Victoria, BC",
    Company:"University of Victoria",
    Competencies: ["I did so much at this company. Blah blah labuda da", "2222222"]
  },
  {
    JobTitle: "Application Developer",
    StartDate: format(new Date('January 2, 2023'), "MMMM yyyy"),
    EndDate: format(new Date('August 25, 2023'), "MMMM yyyy"),
    Location:"Victoria, BC",
    Company:"BC Pension Corporation",
    Competencies: ["I did so much at this company. Blah blah labuda da", "222222"]
  }
])

</script>

<template>
  <main class="bg-gradient-to-b from-black to-blue-500 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <div class="justify-center items-center gap-y-6">
        <NavBar/>

        <div class="flex flex-col justify-center items-center text-5xl font-bold text-white mt-20 mb-44">
          Toni David

          <div class="flex mt-6">
            <a href="https://tabler.io/admin-template" target="_blank">
              <IconBrandLinkedin stroke={5} />
            </a>

            <a href="https://tabler.io/admin-template" target="_blank">
              <IconBrandGithub stroke={2} />
            </a>

            <a href="https://tabler.io/admin-template" target="_blank">
              <IconMail stroke={2} />
            </a>
          </div>


        </div>

        <div class="text-white">
          <h3 class="text-2xl font-bold mb-4">About</h3>
        </div>

        <div class="text-white ">
          <h3 class="text-2xl font-bold mb-4">Experience</h3>
          <div class="grid grid-cols-1 gap-6">
            <ExperienceCard
              v-for="(exp, index) in experience"
              :key="index"
              :JobTitle="exp.JobTitle"
              :Location="exp.Location"
              :StartDate="exp.StartDate"
              :EndDate="exp.EndDate"
              :Company="exp.Company"
              :Competencies="exp.Competencies"
            />
          </div>
        </div>

        <div class="text-white">
          <h3 class="text-2xl font-bold mt-8 mb-4">Projects</h3>
        </div>
      </div>

    </div>
  </main>

</template>


