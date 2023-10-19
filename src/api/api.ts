import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Mock API DOCS: https://github.com/ctimmerm/axios-mock-adapter
// The delay response is emulating a slower network request
const mock = new MockAdapter(axios, { delayResponse: 1000 });

// ⚠ dont change any of this data
const userStudies = [
   {
      description: "This study is about diabetes",
      id: "st1",
      enrolled: false,
      withdraw_reason: "No longer interested in this study",
      name: "Diabetes",
      researcher: "Sano",
   },
   { description: "This study is about covid-19", id: "st2", enrolled: true, withdraw_reason: null, name: "Covid-19", researcher: "Astrazeneca" },
   { description: "This study is about Parkinsons", id: "st3", enrolled: null, withdraw_reason: null, name: "Parkinsons", researcher: "" },
   {
      description: "This study is about Acid reflux",
      id: "st4",
      enrolled: null,
      withdraw_reason: null,
      name: "Acid reflux",
      researcher: "Dr Yesseini",
   },
   { description: "This study is about Alzheimers", id: "st5", enrolled: null, withdraw_reason: null, name: "Alzheimers", researcher: "Sano" },
];

// Example of a GET request
// mock.onGet("/users").reply(200, {
//    users: [{ id: 1, name: "John Smith" }],
// });

// GET request to fetch the list of studies
mock.onGet("/home-test/users/1337/studies").reply(200, {
   studies: userStudies,
});

// PUT request for a user to join/leave a study
mock.onPut(/\/home-test\/users\/1337\/studies\/(.+)/).reply((config) => {
   // Extracting the study_id from the URL
   const match = config.url?.match(/\/home-test\/users\/1337\/studies\/(.+)/);
   const study_id = match && match[1];

   // Extracting the withdraw_reason from the request body
   const { withdraw_reason } = JSON.parse(config.data || "{}");

   if (study_id) {
      // Find the study id in the list of user studies
      const study = userStudies.find((study) => study.id === study_id);

      if (!study) return [404, { message: "study-not-found" }];

      // If the study is currently enrolled and there's no provided withdraw reason for leaving
      if (study.enrolled && !withdraw_reason) {
         return [400, { message: "withdraw-reason-required" }];
      }

      // Toggle the enrolled status
      study.enrolled = !study.enrolled;

      // If the study is withdrawn (not enrolled), assign the withdraw_reason
      if (!study.enrolled) {
         study.withdraw_reason = withdraw_reason;
      }

      // Return message to say study was enrolled/withdrawn
      return [200, { message: study.enrolled ? "study-enrolled" : "study-withdrawn" }];
   } else {
      // If no study_id found, return an error
      return [400, { message: "invalid-study-id" }];
   }
});

export { axios };
