import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServiceView from '../views/ServiceView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta:{
      title: 'About us'
    }
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView,
    meta:{
      title: 'Service'
    }
  },
  {
    path: '/my-work',
    name: 'mywork',
    component: PortfolioView,
    meta:{
      title: 'My Work'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact-us'
    }
  },
  // redirect to 404 page
  {
    path: '/:pathMatch(.*)*', // :catchAll(.*)
    name: '404',
    component: NotFound,
    meta:{
      title: '404'
    }
  }

]

const DEFAULT_TITLE = 'Personal Portfolio';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to) => {
//   document.title = to.meta.title +' - ' +DEFAULT_TITLE;
// });

router.beforeEach((to, from, next) =>{
  document.title =  `${to.meta.title }` + ' - '+ DEFAULT_TITLE 
  next()
})

export default router
