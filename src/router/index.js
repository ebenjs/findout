import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Findout from "../views/FindoutView.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/findout/:user",
      name: "findout",
      component: Findout,
      props: true,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
