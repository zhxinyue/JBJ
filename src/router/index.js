import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import Detail from '@/view/Detail'
import Personal from '@/view/Personal'
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
