// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'
import {routerMode} from './config/env'
import {Message} from 'element-ui'
import './config/rem'

Vue.use(VueRouter)
Vue.use(Message)

Vue.prototype.$message = Message;

const router = new VueRouter({
    routes,
    mode: routerMode
})


new Vue({
  router,
  store
}).$mount('#app')
