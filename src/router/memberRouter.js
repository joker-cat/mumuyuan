import NewsPage from '@/views/frontend/NewsPage.vue'
import MemberView from '@/views/frontend/MemberView.vue'
import OnlineOrder from '@/views/frontend/OnlineOrder.vue'
import CartPage from '@/views/frontend/CartPage.vue'

export default [
  { path: '/news/:id', component: NewsPage },
  {
    path: '/member',
    component: MemberView,
    children: [
      { path: '', component: () => import('@/components/member/MemberCenter.vue') },
      { path: 'orderlog', component: () => import('@/components/member/MemberOrderLog.vue') },
      { path: 'discount', component: () => import('@/components/member/MemberDiscount.vue') },
      { path: 'exchange', component: () => import('@/components/member/MemberExchange.vue') }
    ]
  },
  { path: '/onlineOrder', component: OnlineOrder },
  { path: '/cartPage', component: CartPage },
  { path: '/onlineOrder', name: '固定套餐', component: OnlineOrder },
  { path: '/onlineOrder', name: '秘捲', component: OnlineOrder },
  { path: '/onlineOrder', name: '肉品', component: OnlineOrder },
  { path: '/onlineOrder', name: '海鮮', component: OnlineOrder },
  { path: '/onlineOrder', name: '酒食', component: OnlineOrder },
  { path: '/onlineOrder', name: '蔬菜', component: OnlineOrder },
  { path: '/onlineOrder', name: '經典', component: OnlineOrder }
]
