import HomePage from "../pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const pages = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: PortfolioPage,
  },
  {
    path: "/resume",
    name: "Resume",
    component: ResumePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: pages,
});

export default router;
