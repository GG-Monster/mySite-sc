import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);//使用vue插件
import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Message from "@/views/Message";
import Project from "@/views/Project";
const router = new VueRouter({
    // 路由配置

    routes: [ // 路由规则
        // 当匹配到路径 /foo 时，渲染 Foo 组件
        { name: "Home", path: '/', component: Home },
        { name: "About", path: '/about', component: About },
        { name: "Blog", path: '/blog', component: Blog },
        { name: "Message", path: '/message', component: Message },
        { name: "Project", path: '/project', component: Project },
        { name: "CategoryBlog", path: "/article/cate/:categoryId", component: Blog },
    ],
    //name:""  命名路由，通过名字找到跳转的内容，解除系统与路径之间的耦合
    mode: "history",
});
export default router;