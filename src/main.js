// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HomePage'
import Login from './components/Login'
import { AjaxPlugin } from 'vux'
import Post from './components/Post'

Vue.use(VueRouter)
Vue.use(AjaxPlugin)
const routes = [{
  path: '/Login',
  component: Login
},
{
  path: '/',
  component: Home
},
{
  path: '/post',
  component: Post
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
