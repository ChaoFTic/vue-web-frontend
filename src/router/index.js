import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      component: () => import('@/components/Layout'),
      children: [
        {
          path: '',
          component: () => import('@/views/Home')
        }, {
          path: 'cart',
          component: () => import('@/views/Cart')
        }, {
          path: 'guide',
          component: () => import('@/components/map/EchartMap')
        }, {
          path: 'map',
          component: () => import('@/components/map/FengMap')
        }, {
          path: 'item/:id',
          component: () => import('@/views/Item'),
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
  ]
});
