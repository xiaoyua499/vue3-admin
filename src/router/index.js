import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/user',
        component: () => import('../views/user.vue')
      },
      {
        path: '/table',
        component: () => import('../views/Table.vue')
      },
      {
        path: '/tabs',
        component: () => import('../views/Tabs.vue')
      },
      {
        path: '/form',
        component: () => import('../views/From.vue')
      },
      {
        path: '/upload',
        component: () => import('../views/Upload.vue')
      },
      {
        path: '/editor',
        component: () => import('../views/Editor.vue')
      },
      {
        path: '/permission',
        meta: {
          permission: true
        },
        component: () => import('../views/Permission.vue')
      },
      {
        path: '/404',
        component: () => import('../views/404.vue')
      },
      {
        path: '/403',
        component: () => import('../views/403.vue')
      }
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const name = sessionStorage.getItem('name')
  if (!name && to.path !== '/login') {
    next('/login')
  } else if (to.meta.permission) {
    name === 'admin' ? next() : next('/403')
  } else {
    next()
  }
})

export default router