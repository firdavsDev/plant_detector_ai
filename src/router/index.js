import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/",
        name: "upload_image",
        component: () => import("../pages/UploadImage.vue"),
      },
      {
        path: "/help",
        name: "help",
        component: () => import("../pages/Help.vue"),
      },
      {
        path: "/response",
        name: "response",
        component: () => import("../pages/ResponseResult.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
