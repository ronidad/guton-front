// import { Router } from "express";
import { createRouter, createWebHistory } from "vue-router";

// import pages
import LoginUser from "./components/pages/LoginUser.vue";
import RegisterUser from "./components/pages/RegisterUser.vue";
import HomePage from "./components/pages/HomePage.vue";
import UserProfile from "./components/pages/UserProfile.vue";
import DashBoard from "./components/pages/DashBoard"
import TestHome from "./components/pages/TestHome"
import Clients from "./components/pages/clients"
import Projects from "./components/pages/projects"

import Reports from "./components/pages/reports"



const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginUser },
    { path: "/register", component: RegisterUser },
    { path: "/profile", component: UserProfile },
    {path: "/dashboard", component:DashBoard},
    {path: "/apps", component:Reports},
    {path: "/test",component:TestHome},
    {path: "/reports",component:Reports},
    {path: "/clients", component:Clients},
    {path: "/projects", component: Projects},
   
    

  ],
});

export default router;
