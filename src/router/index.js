import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import Detail from '@/view/Detail'
import Personal from '@/view/Personal'
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
  component:Personal
}
  ]
})
