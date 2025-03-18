<script setup lang="ts">

const items = [
  {
    title: 'Projects',
    disabled: false,
    href: '/#projects',
  },
  {
    title: 'Shift Aide Discord Bot',
    disabled: true,
    href: '',
  },
]
</script>

<template>
  <main class="bg-darkGrey font-discord font-medium">
    <div class="text-white pt-8 pl-3 left-0 top-0">
      <v-breadcrumbs :items="items" divider=">">
      </v-breadcrumbs>
    </div>

    <div class=" max-w-7xl mx-auto justify-center items-center flex flex-col text-5xl text-white pt-12 pb-4">

      <h1 class="font-bold"> Shift Aide Discord Bot </h1>
      <div class="flex flex-col text-base pt-2 m-2">

        <div class="pb-8">
          My coworkers and I are all students (part-time/full-time) who work mostly part-time at a computer help desk. Naturally, people have other commitments, and they're forced to give away shifts.
          We've been using a Messenger group chat for the sole purpose of exchanging shifts, except for the occasional off-the-record PSA.
          When people wanted to exchange shifts, they'd send a message in Messenger with a picture of the shift and maybe try to use a bit of pathos to convince someone to take it.
          I should mention that Discord is the go-to instant messaging and social platform used by students all over the university.
          It's just better overall, especially for a casual work chat for (mostly) Gen Z coworkers.
          Also, there's no button in the top right corner that can be used to accidentally call everyone in the chat (side-eyeing Messenger). That's the context and motivation for this project.

        </div>


        <div class="pb-8">
          <h2 class="pb-2 text-xl font-semibold">Technology Choices</h2>

          <p>
            I chose to make the bot in Python mainly for maintainability and continuity.
            I could've used JavaScript, but I already deal with TypeScript a lot, so a bit of change was nice.
            When starting this project, I found multiple Python packages that could be used to build a Discord bot.
            Essentially, each package was just a wrapper around the Discord API, and the deciding factor was good documentation. I ended up going with discord.py.
          </p>
        </div>


        <div class="pb-8">
          <h2 class="pb-2 text-xl font-semibold"> Requirements and Workflow </h2>

          <p>After reviewing the docs for discord.py, I established a basic workflow for submitting a shift: </p>

          <ul class="list-disc">
            <li>User invokes "shift" command (we'll refer to this user as "command invoker") </li>
            <li>Bot responds with a form so the command invoker can fill out details of the shift they no longer want (this form is only visible to the user who invoked the command) </li>
            <li>Command invoker fills out the form and submits </li>
            <li>Bot announces the details of the shift that's up for grabs to the entire chat, and any user (except the command invoker) can take the shift </li>
            <li>Once another user takes the shift, bot notifies the entire chat and sends a DM with an email template to the command invoker so they can notify our boss (the email template feature is planned for future work) </li>
          </ul>

        </div>

        <div class="pb-8">
          <h2 class="pb-2 text-xl font-semibold"> Working with Discord API Limitations </h2>

          <p> Due to constraints from the Discord API, there were only so many interactive components that could be included in the view the bot provides after the command is invoked.
            You can think of a view as a grid—specifically, a 5 × 5 grid during this project. Each interactive component takes up space on the grid: a button takes up 1 × 1, and a select menu takes up an entire row (1 × 5).
            Taking that into account, I designed the shift details form with 4 select menus and 3 buttons.
            The select menus are used to fill out details of the shift, and the 3 buttons are used to submit, cancel, or make another shift request. Building the view like this also meant the command invoker wouldn't be able to upload a picture of their shift. </p>

        </div>

        <div class="pb-8">
          <h2 class="pb-2 text-xl font-semibold"> Deployment </h2>

          <p> For hosting, I consulted Reddit and Steam community forums, and it seemed like an Oracle Cloud Compute instance was the most cost-effective option.
            Oracle Cloud Compute instances are basically just virtual machines. I created a Compute instance with an Ubuntu image and used pm2 to make a daemon to run the bot. </p>

        </div>

        <div class="pb-8">
          <h2 class="pb-0.5 text-xl font-semibold">Pain Points and Workarounds</h2> <br>

          <div class="pb-6">
            <h4 class="pb-2 text-lg font-semibold"> Select Menu Limitations </h4>


            <p> The first issue I encountered was due to Discord API limitations with the UI components, specifically the select menu.
              The select menu can only have 25 options. For the "From time" and "To time" select menus, I intended to have time slots from 8am to 11:30pm in 30-minute increments, which would be 32 options.
              Since I was limited to 25 options, I had to restrict the time slots to go from 8am to 7pm.
              This is still an ongoing issue. I've considered allowing users to enter the time manually and then validating the input. If you have any suggestions, do let me know! </p>

          </div>

          <div class="">
            <h4 class="pb-2 text-lg font-semibold"> Message Persistence </h4>

            <p>The second issue was message persistence when the bot shuts down and restarts. Every day around 4am, the bot has to restart to update the current day in one of the utility functions.
              Initially, if a shift request message was sent and not taken before the bot restarted, taking that shift would cause an error since it was no longer connected to the running instance of the bot.
              The best solution I found was to use a database to store the shifts and then have the bot reconnect to them using a Discord API method called add_view.
              This worked great, and now shift requests have persistence across restarts.</p>
          </div>


        </div>

        <div class="pb-8">
          <h2 class="pb-2 text-xl font-semibold"> Future Work </h2>

          <p>I'd like to add the functionality for the bot to send an email template to the user who invoked the shift command so they could easily send an email to our boss.
            Overall, it was a fun little project aimed at improving a process I deal with frequently. It's already making our shift exchanges much smoother and more organized. </p>
        </div>

      </div>

    </div>
  </main>


</template>

<style scoped>

</style>
