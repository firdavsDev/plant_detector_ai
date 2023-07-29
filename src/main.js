import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "ant-design-vue/dist/reset.css";
import Antd from "ant-design-vue";
import { message } from "ant-design-vue";

// app
const app = createApp(App);

// plugins
app.use(createPinia());
app.use(Antd);
app.use(router);
app.mount("#app");
app.config.globalProperties.$message = message;
