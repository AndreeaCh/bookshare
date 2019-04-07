import Vue from "vue";
import Router from "vue-router";
import Greeting from "../components/Greeting.vue";
import Main from "../components/books/Main.vue";
import Login from "../components/login/Login.vue";
import Register from "../components/registration/Register.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/main",
      name: "Main",
      component: Main
    },
    {
      path: "/greeting",
      name: "Greeting",
      component: Greeting
    },
    {
      path: "/",
      redirect: "Main"
    }
  ]
});
