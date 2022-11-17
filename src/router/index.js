import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store/index";
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  let isUnauthorized =
    JSON.stringify(store.getters.currentUser) === JSON.stringify({});
  if (to.matched.some((record) => record.meta.authorized)) {
    if (isUnauthorized) {
      next({
        path: "/",
      });
    } else {
      if (to.matched.some((record) => record.meta.authorized)) {
        if (!isUnauthorized) {
          next();
        } else next({ path: from.path });
      }
    }
  } else {
    next();
  }
});
router.afterEach((to) => {
  document.title = to.name !== null ? to.name : "Vue And Vuetify";
});
