import Vue from 'vue'
import Router from 'vue-router'
import projectView from '../views/projectView'
import EstateDetail from '../components/EstateDetail'
import PropertyInformation from '../components/PropertyInformation.vue'
import NewMessage from '../components/NewMessage.vue'
import MessageDetail from '../components/MessageDetail.vue'
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
    },{
      path:'/propertyInformation',
      name:'propertyInformation',
      component:PropertyInformation
    },{
      path:'/newMessage',
      name:'newMessage',
      component:NewMessage
    },{
      path:'/messageDetail/:id',
      name:'messageDetail',
      component:MessageDetail
    }
  ]
})
