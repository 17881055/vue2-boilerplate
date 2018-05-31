/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/pages/Home/Index'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Account
  {
    path: '/account',
    name: 'account.index',
    component: () => import('@/pages/Account/Index'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/pages/Login/Index'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: () => import('@/pages/Register/Index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

   // iview demo
   {
    path: '/demo',
    name: 'iview.index',
    component: () => import('@/pages/IviewDemo/Index'),

    meta: {
      auth: true,
    },
  },

  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
