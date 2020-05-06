import App from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login');

export default [{
  path: '/',
  component: App,  //顶层路由，对应index.html
  children: [      //二级路由。对应App.vue
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    //登陆注册页
    {
      path: '/login',
      component: login
    }
  ]
}]
