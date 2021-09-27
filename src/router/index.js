import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import aboutus from '@/pages/aboutus'
import services from '@/pages/services'
import test from '@/pages/test'
import prices from '@/pages/prices'
import contact from '@/pages/contact'
import cookies from '@/pages/cookies'
// import login from '@/pages/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Plan Ishrane',
      component: home
    },
    {
      path: '/o-nama',
      name: 'O Programu',
      component: aboutus
    },
    {
      path: '/usluge',
      name: 'Usluge',
      component: services
    },
    {
      path: '/cene',
      name: 'Cene',
      component: prices
    },
    {
      path: '/kontakt',
      name: 'Koktakt',
      component: contact
    },
    {
      path: '/uslovi-koriscenja-kolacica',
      name: 'Uslovi korišćenja kolačića',
      component: cookies
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})