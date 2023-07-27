import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from '../stores/index';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAdmin: true },
    },
    {
      path: "/about",
      name: "about",
      meta: { requiresAdmin: true },
      props: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      beforeEnter:((to, from, next) => {
        // 權限檢查
        if (to.matched.some((record) => record.meta.requiresAdmin)) {
          const isAdmin = useAuthStore().isAdmin;
          if (isAdmin) {
            next();
          } else {
            next('/'); // 未登入，導向到其他頁
          }
        } else {
          next();
        }
      })
    },
    {
      path: "/login",
      name: "login",
      props: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LoginView.vue"),
      meta: { requiresAdmin: true },

    },
  ],
});

export default router;
