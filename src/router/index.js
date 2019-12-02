import Vue from "vue";
import VueRouter from "vue-router";
import ShoppingMall from "@/components/pages/ShoppingMall";
import Register from "@/components/pages/Register";
import Login from "@/components/pages/Login";
import Goods from "@/components/pages/Goods";
import CategoryList from "@/components/pages/CategoryList";
import Cart from "@/components/pages/Cart";
import Main from "@/components/pages/Main";
import Member from "@/components/pages/Member";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    children: [
      { path: "/", name: "ShoppingMall", component: ShoppingMall },
      { path: "/CategoryList", name: "CategoryList", component: CategoryList },
      { path: "/Cart", name: "Cart", component: Cart },
      { path: "/Member", name: "Member", component: Member }
    ]
  },

  { path: "/register", name: "Register", component: Register },
  { path: "/login", name: "Login", component: Login },
  { path: "/Goods", name: "Goods", component: Goods }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
