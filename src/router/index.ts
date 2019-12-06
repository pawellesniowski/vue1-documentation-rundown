import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BasicFunctionality from "../components/BasicFunctionality.vue";
import FormInput from "../components/FormInput/FormInput.vue";
import AnimatedElements from "../components/AnimatedElements/AnimatedElements.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/basic-functionality",
    name: "my first",
    component: BasicFunctionality
  },
  {
    path: "/form",
    name: "form input",
    component: FormInput
  },
  {
    path: "/animated-elements",
    name: "Animated Elements",
    component: AnimatedElements
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
