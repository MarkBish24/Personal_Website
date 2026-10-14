import { createRouter, createWebHistory } from "vue-router";
import { pages } from "../pages/pages";

const routes = [
  {
    path: "/",
    name: "Home",
    component: pages.HomePage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: pages.ContactPage,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: pages.PortfolioPage,
  },
  {
    path: "/resume",
    name: "Resume",
    component: pages.ResumePage,
  },
  {
    path: "/projects",
    name: "Projects",
    component: pages.ProjectsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
