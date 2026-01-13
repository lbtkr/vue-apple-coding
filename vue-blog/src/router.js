import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import('@/components/Home.vue'),
    },
    {
        path: "/list",
        component: () => import('@/components/List.vue'),
    },
    {  
        path: "/detail/:id?",
        component:  () => import('@/components/Detail.vue'),
        children: [
            {
                path: "author",
                component: () => import('@/components/Author.vue'),
            },
            {
                path: "comment",
                component: () => import('@/components/Comment.vue'),
            }
        ],
    },
    { path: "/:pathMatch(.*)*", component: () => import('@/components/NotFound.vue'),}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 