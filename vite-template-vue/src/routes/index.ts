import { createMemoryHistory, createRouter } from 'vue-router'
import UsecaseCustomSuspense from '@/pages/example-suspense/usecase-custom-suspense.vue'
import UsecaseCustomSuspenseWithWrapper from '@/pages/example-suspense/usecase-custom-suspense-with-wrapper.vue'
import pageNotFound from '@/pages/error/page-not-found.vue'

const routes = [
  {
    path: '/example-suspense/usecase-custom-suspense',
    component: UsecaseCustomSuspense
  },
  {
    path: '/example-suspense/usecase-custom-suspense-with-wrapper',
    component: UsecaseCustomSuspenseWithWrapper
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: pageNotFound
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
