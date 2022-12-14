import type { RouteRecordRaw } from "vue-router"

const route: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "็ป้"
    }
  },
  {
    path: "/list",
    name: "list",
    component: () => import("@/views/list.vue"),
    meta: {
      title: "ๅ่กจ"
    }
  }
]

export default route
