<template>
   <header class="bg-white">
      <!-- Sano logo + word -->
      <nav class="scontainer mx-auto py-4 px-5 sm:px-10 flex flex-col sm:flex-row items-center text-xl">
         <a href="https://www.sanogenetics.com" target="_blank" class="flex mb-4 sm:mb-0">
            <!-- Sano logo -->
            <div class="sano-svg-red-orange h-8">
               <!-- Sano symbol -->
               <svg class="sano-use-svg sano-svg-red-orange" viewBox="5 0 230 130">
                  <!-- eslint-disable-next-line -->
                  <path d="M114.064,95.727c-21.616,0-32.654-16.551-45.439-35.719C54.887,39.446,39.317,16.082,7.812,16.082V34.56c19.663,0,30.57,13.692,41.971,30.587c-11.43,16.898-22.374,30.589-42,30.589v18.478c25.832,0,40.972-15.711,53.122-32.711c12.177,17.01,27.299,32.711,53.131,32.711c17.972,0,30.757-7.599,40.972-17.944l-10.645-15.598C136.307,89.671,127.148,95.727,114.064,95.727z"/><path d="M220.318,34.561V16.084c-25.833,0-40.974,15.709-53.123,32.709c-12.178-17.009-27.299-32.709-53.131-32.709c-17.935,0-30.767,7.606-40.991,17.972l10.673,15.588c8.056-9.019,17.234-15.084,30.318-15.084c21.617,0,32.654,16.569,45.44,35.731c13.738,20.561,29.308,43.925,60.813,43.925V95.738c-19.665,0-30.571-13.701-42-30.589C189.747,48.252,200.691,34.561,220.318,34.561z"/>
               </svg>
            </div>
            <!-- sano wordmark -->
            <div class="h-8 w-32 ml-2">
               <svg class="sano-use-svg sano-svg-red-orange" viewBox="5 0 430 130">
                  <!-- eslint-disable-next-line -->
                  <path d="M68.4 57.6l-24.4-5.2c-9.5-2-13.6-5.9-13.6-13.1 0-9.5 8.7-16.1 21.1-16.1 12.9 0 22.9 7.6 24.8 19l0.2 0.9 19.8-4 -0.2-0.9C92 18.2 75 5.9 51.9 5.9c-25.2 0-42.3 13.6-42.3 33.9 0 16.6 9.5 26.8 29.1 31.3l24.5 5c11 2.3 15.1 6.1 15.1 14 0 10.1-8.7 16.5-22.8 16.5 -15.5 0-25.7-7.5-28.2-20.6l-0.2-0.9L6.3 89.3l0.1 0.8c2.7 20.7 21.3 34 47.4 34 26.8 0 44.1-13.8 44.1-35.1C98 72.7 87.7 61.9 68.4 57.6z"/><path d="M184.1 39.8c-8.1-8.4-19.7-13.2-33.8-13.2 -24.4 0-46.1 19.7-46.1 48.8 0 29.2 21.8 48.8 46.1 48.8 14.1 0 25.7-4.8 33.8-13.2v10.6h19.5V29.2h-19.5V39.8zM153.5 107c-17.1 0-30.4-12.1-30.4-31.7 0-19.4 13.3-31.7 30.4-31.7 15.4 0 30.6 12.3 30.6 31.7C184.1 94.9 168.9 107.1 153.5 107z"/><path d="M270.1 26.6c-13.9 0-24.8 5-32.3 14V29.2H218.3v92.4h19.5V78.9c0-23.2 11.1-34.4 27.8-34.4 13.3 0 22.1 10.1 22.1 25.1v52h19.7V65.7C307.4 42.6 292.4 26.6 270.1 26.6z"/><path d="M366.3 26.4c-27.4 0-49.7 19.8-49.7 48.8s22.3 49 49.7 49c27.2 0 49.3-20 49.3-49C415.7 46.2 393.5 26.4 366.3 26.4zM366.3 107.2c-16.2 0-30.7-12.6-30.7-32S350.1 43.1 366.3 43.1c15.8 0 30.5 12.6 30.5 32C396.9 94.6 382.1 107.2 366.3 107.2z" />
               </svg>
            </div>
         </a>

         <ul class="flex sm:ml-10 font-bold">
            <li class="mx-2">
               <RouterLink to="/" :class="{ 'text-sano-red-orange': currentPath === 'home' }">Home</RouterLink>
            </li>
            <li>
               <RouterLink to="/studies" :class="{ 'text-sano-red-orange': currentPath === 'studies' }">Studies</RouterLink>
            </li>
         </ul>
      </nav>
   </header>

   <main class="scontainer p-5 sm:p-10 mx-auto mt-6">
      <RouterView />
   </main>
</template>

<script setup lang="ts">
import "@/assets/main.scss";

import { RouterLink, RouterView, useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const currentPath = computed(() => route.name);
</script>

<style lang="scss">
nav ul {
   list-style: none;
   margin: 0;
   padding: 0;
}

nav ul li + li:before {
   content: "|";
   font-size: medium;
   color: var(--vt-sano-burgundy);
   margin: 0em 1rem;
}
</style>
