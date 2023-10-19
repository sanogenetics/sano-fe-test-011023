import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

if (import.meta.hot) {
   import.meta.hot.on("vite:beforeUpdate", () => console.clear());
}
