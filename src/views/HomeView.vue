<template>
   <div class="text-center mb-6">
      <h1 class="text-2xl">Welcome to the Sano Frontend test 🧬</h1>
   </div>

   <p class="mb-6 text-center text-sm font-bold">⚠ Please use the readme.md file as a guide on how to submit your work. ⚠</p>

   <!-- Instructions -->
   <p class="mb-6">
      In this test, you will display a list of studies and be able to Enrol/Withdraw in/from any study. The list of studies should look nice, use the
      Sano colour scheme, be <em>accessible</em> and <em>mobile friendly</em>.
   </p>

   <p class="mb-6">
      Things we look for in accessibility: Is the HTML markup correct? Can we navigate the Studies page by keyboard only (tabbing)? Will screenreaders
      be able to navigate the page.
   </p>

   <p class="mb-6">Add your development magic to the existing <RouterLink to="/studies">Studies</RouterLink> page.</p>

   <p class="mb-6">
      In this project we are using <a href="https://github.com/ctimmerm/axios-mock-adapter" target="_blank">axios mock adapter</a> as a mock API. This
      means that the data will be reset every time you refresh the page.
   </p>

   <p class="mb-2 font-bold">Task List:</p>

   <ol class="list-decimal list-inside">
      <li class="mb-10">
         <p class="inline">
            Clicking on the 'consent terms' button should show a modal (please build your own basic modal, don't use third party modals).
         </p>

         <p class="mt-2">The modal should have:</p>

         <ul class="list-disc ml-8 mt-2">
            <li>An appropriate heading.</li>
            <li>An appropriate description on why we need consent approval.</li>
            <li>
               Two buttons. One to approve the consent and one to decline it. Approving the consent will reveal the list of studies. Rejecting the
               consent will go back to the previous screen.
            </li>
         </ul>
      </li>

      <li class="mb-10">
         <p class="inline">Assuming the consent was accepted, we want to show the list of studies by fetching them using the following endpoint:</p>
         <pre class="endpoint">GET /home-test/users/1337/studies</pre>
      </li>

      <li class="mb-10">
         <p class="inline">Display the list of studies. Study Name, Run By (researcher) & Status of each study should be displayed in the list.</p>
         <span class="block mt-2"> The Status should either say "Enrolled", "Withdrawn" or "Not Started". </span>
      </li>

      <li class="mb-10">
         <p class="inline">Each study item should have an Enrol/Withdraw study button.</p>
         <ul class="list-disc ml-8 mt-4">
            <li class="mb-4">
               <p class="inline">For each study item, if the user has not started the study yet, the button text should say 'Enrol'.</p>
               <p>Clicking the 'Enrol' button should enrol the user in the study using the following endpoint:</p>

               <pre class="endpoint">PUT /home-test/users/1337/studies/&lt;study_id&gt;</pre>
            </li>
            <li class="mb-4">
               <p>Once the user is enrolled in the study, the button text should say 'Withdraw'.</p>
               <p>Clicking the 'Withdraw' button should reveal a modal to ask the user about the reasons for withdrawing from the study.</p>

               <p class="mt-2">The modal should have:</p>
               <ul class="list-disc ml-6">
                  <li>An appropriate heading.</li>
                  <li>
                     An appropriate description asking the user why they want to withdraw from the study. Use the following reasons: 'This study is
                     taking too much of my time' | 'This study isnt what I thought it was going to be' | 'No longer interested in this study' | 'Other
                     (*with a textbox*)'.
                  </li>
                  <li>A submit button.</li>
               </ul>

               <p class="mt-4">
                  Once the user has submitted their answer, the modal should close and they should be withdrawn from the study using the following
                  endpoint (dont forget to send the reason):
               </p>

               <pre class="endpoint">PUT /home-test/users/1337/studies/&lt;study_id&gt;</pre>
            </li>
            <li class="mb-4">
               If the user has withdrawn from the study, they cannot re-enrol in it i.e. the button to enrol/withdraw should not exist anymore.
            </li>
         </ul>
      </li>

      <li class="mb-10">
         Finally, add a badge in the navigation bar to count the number of studies that the user has enrolled in. Remember that the navigation bar is
         a shared component between pages.
      </li>

      <li class="mb-10">Setup a simple Cypress test which will test some of the functionality above.</li>
   </ol>

   <p class="mt-10 mb-10">We hope you have fun doing the test 😎. Use the readme.md guide on how to submit your work and the Loom video.</p>
</template>

<script setup lang="ts"></script>
