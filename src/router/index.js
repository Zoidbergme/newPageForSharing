import Vue from 'vue'
import Router from 'vue-router'
import projectView from '../views/projectView'
import EstateDetail from '../components/EstateDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/projectView',
    	name: 'projectView',
      component: projectView
    },
    {
      path:'/estatedetail',
      name:'estatedetail',
      component:EstateDetail
    }
  ]
})
