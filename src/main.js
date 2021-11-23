import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import allProducts from './data/products'

const store = createStore({
  state: {
    allProducts: allProducts,
    products: allProducts.filter(p => p.quantity > 0 ? true : false),
    availableProducts: allProducts.filter(p => p.quantity > 0 ? true : false),
  },
  mutations: {
    filterProducts(state, payload) {
      if (payload.key && payload.val) {
        state.products = state.availableProducts.filter(
          product => (product[payload.key].toUpperCase() === payload.val) ? true : false
        )
      }
    }
  }
})

createApp(App).use(router).use(store).mount('#app')
