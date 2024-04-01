import LoginView from '@/views/frontend/LoginView.vue'

export default [
  {
    path: '/login',
    component: LoginView,
    children: [
      { path: '', component: () => import('@/components/frontend/LoginComponent.vue') },
      { path: 'signin', component: () => import('@/components/frontend/SigninComponent.vue') },
      { path: 'forget', component: () => import('@/components/frontend/ForgetComponent.vue') }
    ]
  }
]
