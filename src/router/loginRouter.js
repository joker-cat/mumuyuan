import LoginView from '@/views/frontend/LoginView.vue'

export default [
  {
    path: '/login',
    component: LoginView,
    children: [
      { path: '', component: () => import('@/components/login/LoginComponent.vue') },
      { path: 'signin', component: () => import('@/components/login/SigninComponent.vue') },
      { path: 'forget', component: () => import('@/components/login/ForgetComponent.vue') }
    ]
  }
]
