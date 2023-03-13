import { createApp } from "vue";
import App from "./app.vue";
import dcmmUi from '@dcmm/components'
const app = createApp(App);
app.use(dcmmUi)
app.mount("#app");