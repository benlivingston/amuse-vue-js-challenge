import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue"
import Product from "@/views/Product.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/brands/:brand/:product_slug",
    name: "Product",
    component: Product,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
