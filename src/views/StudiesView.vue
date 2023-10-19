<template>
   <div class="about">
      <div class="text-center mb-6">
         <h1 class="text-2xl">Studies list</h1>
      </div>

      <p class="mb-6">
         Before you can view the studies list, it would be great if you could approve the
         <button type="button" class="consent rounded px-2" @click="showConsent">consent terms</button>.
      </p>

      <!-- TODO: Create the study list -->
      <p>This is where your magic will happen developing a study list ✨.</p>
   </div>
</template>

<script setup lang="ts">
import { axios } from "@/api/api";
// import { computed } from "vue";

// TODO: fetch your list of data using the imported axios instance (API)

// methods
// -----------------------------------------
function showConsent() {
   console.log("show/hide the consent modal");
}
</script>

<style>
button.consent {
   background-color: var(--vt-sano-green);
   color: var(--vt-white);
   border: 1px solid var(--vt-white);
}
</style>
