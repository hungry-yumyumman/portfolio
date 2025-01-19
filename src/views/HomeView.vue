<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { exp, proj } from '@/stores/util'
import ExperienceCard from '@/components/ExperienceCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
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
    CompanyURL: "https://www.uvic.ca",
    Competencies: ["I did so much at this company. Blah blah labuda da", "2222222"],
    Technologies:[""]
  },
  {
    JobTitle: "Application Developer",
    StartDate: format(new Date('January 2, 2023'), "MMMM yyyy"),
    EndDate: format(new Date('August 25, 2023'), "MMMM yyyy"),
    Location:"Victoria, BC",
    Company:"BC Pension Corporation",
    CompanyURL: "https://www.bcpensioncorp.ca",
    Competencies: ["I did so much at this company. Blah blah labuda da", "222222"],
    Technologies:[""]
  }
])

const Projects: Ref<proj[]> = ref([
  {
    ProjectName: "Engineering Locker Registration",
    ProjectDescription: "Little application to help engineering students registers for locker online",
    Technologies: ["SQLite", "Next JS", "Node.js", "Jest"],
    View: "elr",
    ColorIndex:0
  },
  {
    ProjectName: "Engineering Locker Registration",
    ProjectDescription: "",
    Technologies: [""],
    View: "",
    ColorIndex:1
  }
])

</script>

<template>
    <div class="max-w-7xl mx-auto">
      <div class="justify-center items-center">
        <div class="sticky top-0">
          <NavBar/>
        </div>

        <div ref="home" id="home" class="flex flex-col justify-center items-center text-5xl font-bold text-white mt-20 mb-32">
          Toni David

          <div class="flex mt-6 gap-x-4">
            <a href="https://www.linkedin.com/in/toni-david/" class="hover:text-violet-400 active:text-violet-700" target="_blank">
              <IconBrandLinkedin stroke={5} />
            </a>

            <a href="https://github.com/hungry-yumyumman" target="_blank">
              <IconBrandGithub stroke={2} />
            </a>

            <a href="mailto:timothy.toni.david11@gmail.com" target="_blank">
              <IconMail stroke={2} />
            </a>
          </div>
        </div>

        <div id="about" class="text-white mx-3 p-7">
          <h3 class="text-2xl font-bold mb-4">About</h3>
          <div class="pb-16 pt-4 text-lg">
            Hi! I’m Oluwatoni but I mostly go by Toni. I'm a fourth-year Software Engineering student at the University of Victoria.
            I’m passionate about technology, especially when it comes to building reliable systems and improving how teams work together.
            That’s why I’m drawn to Site Reliability Engineering (SRE) and DevOps—there’s just something exciting about optimizing systems and making them run smoothly.
            Lately, I’ve been diving into cloud computing and sharpening my AWS skills, while also exploring web development whenever I need a creative break.
            I enjoy working on projects that bridge the gap between development and operations, where I can solve real-world problems,

            If you’re into building cool, reliable systems or just want to connect, I’d love to hear from you!
          </div>
        </div>

        <div id="experience" class="text-white mx-3 p-7 bg-darkPurple rounded-[24px]">
          <h3 class="text-2xl font-bold mb-4">Experience</h3>
          <div class="grid grid-cols-1 gap-6 ">
            <ExperienceCard
              v-for="(exp, index) in experience"
              :key="index"
              :JobTitle="exp.JobTitle"
              :Location="exp.Location"
              :StartDate="exp.StartDate"
              :EndDate="exp.EndDate"
              :Company="exp.Company"
              :Competencies="exp.Competencies"
              :CompanyURL="exp.CompanyURL"
            />
          </div>
        </div>

        <div id="projects" class="text-white mx-3 p-7 mt-12 pb-8 bg-midnightTeal rounded-[24px]">
          <h3 class="text-2xl font-bold mt-3 mb-4">Projects</h3>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <ProjectCard
              v-for="(project, index) in Projects"
              :key="index"
              :ProjectName="project.ProjectName"
              :ProjectDescription="project.ProjectDescription"
              :Technologies="project.Technologies"
              :View="project.View"
              :ColorIndex="project.ColorIndex"
            />
          </div>
        </div>
      </div>

    </div>

</template>


