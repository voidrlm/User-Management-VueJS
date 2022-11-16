import store from "@/store/index";
import router from "../router";
export function initializeSession() {
  let currentUserSession = store.getters.currentUser;
  if (JSON.stringify(currentUserSession) === JSON.stringify({})) {
    if (router.currentRoute.path !== "/") {
      router.push({
        path: "/",
      });
    }
  }
}
