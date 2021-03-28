import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import Detail from '@/view/Detail'
import Personal from '@/view/Personal'
import Register from '@/view/Register'
import Login from '@/view/Login'
import Special from '@/view/Special'
import Account from "@/components/page/Account"
import Order from "@/components/page/Order"
import Wishlist from "@/components/page/Wishlist"
import Rma from "@/components/page/Rma"
Vue.use(Router)

export default new Router({
  routes: [
{
  path:'/',
  name:'Index',
  component:Index
},
{
  path:'/detail',
  name:'Detail',
  component:Detail
},
{
  path:'/register',
  name:'Register',
  component:Register
},
{
  path:'/login',
  name:'Login',
  component:Login
},
{
  path:'/special',
  name:'Special',
  component:Special
},
{
  path:'/personal',
  name:'Personal',
  component:Personal,
  children: [ 
    　　　{ 
    　　　　path: '/', 
     　　　 component: Account 
    　　  },
    { 
      　　　　path: '/order', 
       　　　 component: Order 
      　　  },
      { 
        　　　　path: '/wishlist', 
         　　　 component: Wishlist 
        　　  },{ 
          　　　　path: '/rma', 
           　　　 component: Rma 
          　　  },

    　　]
}
  ]
})
