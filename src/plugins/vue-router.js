/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/routes';
import store from '@/store';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth) && !store.state.auth.authenticated) {
    /*
     * 如果用户没有身份验证和访问。
     * 需要身份验证的页面，重定向到登录页面。
     */
    next({
      name: 'login.index',
    });
  } else if (to.matched.some(m => m.meta.guest) && store.state.auth.authenticated) {
    /*
     * 如果用户经过身份验证和访问。
     * 一个客户页面，重定向到仪表板页面。
     */
    next({
      name: 'home.index',
    });
  } else {
    next();
  }
});

Vue.router = router;

export default {
  router,
};
