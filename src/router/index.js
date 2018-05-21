import Vue from 'vue'
import Router from 'vue-router'
import projectView from '../views/projectView'
import EstateDetail from '../components/EstateDetail'
import PropertyInformation from '../components/PropertyInformation.vue'
import NewMessage from '../components/NewMessage.vue'
import MessageDetail from '../components/MessageDetail.vue'
import BuildingPic from '../components/BuildingPic.vue'
import UnitDetail from '../components/UnitDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/projectView/:id',
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
    },{
      path:'/buildingPic/:projectId/:pic',
      name:'buildingPic',
      component:BuildingPic
    },{
      path:'/unitDetail',
      name:'unitDetail',
      component:UnitDetail
    }
  ]
})
