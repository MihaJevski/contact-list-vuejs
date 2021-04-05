import Vue from 'vue';
import Router from 'vue-router';
import {routes} from './routes';
import {store} from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('setErrorMessages', []);
  store.dispatch('setSuccessMessages', []);

  if (!isLoggedIn() && to.meta.requiresAuth) {
    next({name: 'login'})
  } else if (isLoggedIn() && to.meta.requiresAuth === false) {
    next({name: 'home'})
  } else {
    next();
  }
});

function isLoggedIn() {
  return !!window.localStorage.getItem('ACCESS_TOKEN')
}

export default router;
