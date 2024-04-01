import { defineAsyncComponent } from 'vue'

const OrderManage = defineAsyncComponent(() => import('@/views/admin/OrderManage.vue'))
const MemberManage = defineAsyncComponent(() => import('@/views/admin/MemberManage.vue'))
const SalesStatistics = defineAsyncComponent(() => import('@/views/admin/SalesStatistics.vue'))
const ProductManage = defineAsyncComponent(() => import('@/views/admin/ProductManage.vue'))
const BookingManage = defineAsyncComponent(() => import('@/views/admin/BookingManage.vue'))
const DiscountManage = defineAsyncComponent(() => import('@/views/admin/DiscountManage.vue'))
const JourneyManage = defineAsyncComponent(() => import('@/views/admin/JourneyManage.vue'))

export default [
  { path: '/order', component: OrderManage },
  { path: '/memberMange', component: MemberManage },
  { path: '/sales', component: SalesStatistics },
  { path: '/product', component: ProductManage },
  { path: '/booking', component: BookingManage },
  { path: '/discount', component: DiscountManage },
  { path: '/journey', component: JourneyManage }
]
