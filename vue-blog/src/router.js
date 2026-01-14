import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import('@/components/Home.vue'),
    },
    {
        path: "/home",
        redirect: '/',
    },
    {
        path: "/list",
        component: () => import('@/components/List.vue'),
    },
    {
        path: "/detail",
        redirect: "/detail/0",
    },
    {  
        path: "/detail/:id",
        name: 'Detail',
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
    {
        path: "/:pathMatch(.*)*",
        component: () => import('@/components/NotFound.vue'),
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
/*
 * /detail 이라고 URL란에 입력하면 Vue router로 /detail을 보여주세요 가 아니라
 * 서버에 /detail 페이지를 요청하는 것
 * Vue가 라우팅을 하기도 전에 /detail 페이지를 보여주려고 할 수도 잇음
 * 근데 서버에 아무 기능을 개발해놓지 않아서 404페이지가 뜰 수도 있음
 * 이를 방지하기 위해 "어떤 사람이 /어쩌구 로 접속하면 그냥 Vue에게 라우팅을 맡겨주세요" 라고 미리 개발 필요
 * 
 * hash mode를 사용하면 URL에 #이 붙은채로 시작함
 * codingapple.com/#/ 이게 메인 페이지인데 #을 붙이는 이유는
 * # 뒤에 있는 내용들은 절대 서버로 전달되지 않아서임
 * 
 * 따라서 서버가 라우팅을 채가는 일을 방지할 수 있고
 * Vue router에게 온전히 라우팅을 맡길 수 있음
 * 서버가 없으면 # 붙는 hash 라우터로 사이트를 만드는 것도 좋은 선택임
 */

export default router; 