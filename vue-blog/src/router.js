import { createWebHistory, createRouter } from "vue-router";
import Home from '@/components/Home.vue'
import List from '@/components/List.vue'
import Detail from '@/components/Detail.vue'
import NotFound from "./components/NotFound.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/list",
        component: List,
    },
    {
        path: "/detail/:id",
        component: Detail,
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 