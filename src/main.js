import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import allProducts from './data/products'

const store = createStore({
  state: {
    allProducts: allProducts,
    products: allProducts.filter(p => p.quantity > 0 ? true : false)
  }
})

createApp(App).use(router).use(store).mount('#app')
