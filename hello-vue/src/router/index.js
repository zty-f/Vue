//导入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//导入组件
import Main from "../views/Main";
import Login from "../views/Login";
import List from "../views/user/List";
import Profile from "../views/user/Profile";
import NotFound from "../views/NotFound";
import App from "../App";
//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
  mode:'history',   //去掉路由里面的#标签   默认使用hash模式带#
  routes: [
    {
      //登录页
      path: '/main/:name',
      component: Main,//嵌套路由
      props:true,
      children:[
        {
          path:'/user/profile/:id',
          component:Profile,
          name:'userProfile',
          props:true
        },
        {
          path:'/user/list',component:List
        }
      ]
    }, //首页
    {
      path: '/login',
      component: Login
    }, {
      path:'/goHome',
      redirect:'/login'
    },{
    path: '/*',
    component: NotFound
    }
  ]

})
