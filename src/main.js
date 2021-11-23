import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import products from './data/products'
products.forEach(p => p.show = false)

const store = createStore({
  state: {
    products: products,
  },
  mutations: {
    filterProducts(state, payload) {
      // filter on object key and value
      if (payload.key && payload.val) {
        state.products.forEach(
          product => product.show = (product[payload.key].toUpperCase() === payload.val) ? true : false
        )
/*
        state.products = state.availableProducts.filter(
          product => (product[payload.key].toUpperCase() === payload.val) ? true : false
        )
*/
      }
    }
  }
})

const app = createApp(App)
app.config.globalProperties.IMAGE_PREFIX = 'https://res.cloudinary.com/amusenow/w_800,c_scale/'
app.use(router).use(store).mount('#app')
