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
        component: () => import('../views/Permission.vue')
      },
      {
        path: '/404',
        component: () => import('../views/404.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router