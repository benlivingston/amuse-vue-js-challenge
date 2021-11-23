<template>
  <div class="product-filters">
<!--
    <img src="@/assets/logo.png" />
    <img :src="require('@/assets/logo.png')" />
-->
    <ProductFilter criteria="category" :useAllProducts=true />
    <ProductFilter criteria="sub_category" />
    <ProductFilter criteria="manufacturer" />
<!--
    <ProductFilter criteria="price" />
-->
  </div>
  <div class="wrapper">
    <div v-for="product in $store.state.products" :key="product.entity_id">
      <router-link :to="product.url">
        <div class="product">
          <p v-if="product.image_url"><img :src="IMAGE_PREFIX + product.image_url" class="product-image"></p>
          <p>{{ product.name }}</p>
          <p>Cat: {{ product.category }}</p>
          <p>SubCat: {{ product.sub_category }}</p>
          <p>Brand: {{ product.manufacturer }}</p>
          <p>THC: {{ product.thc_percentage }}</p>
          <p>Qty: {{ product.quantity }}</p>
          <p>Price: ${{ product.price }}</p>
          <p>+ Add to Cart</p>
        </div>
      </router-link>
    </div>
  </div>
</template>


<script>
import ProductFilter from '@/components/ProductFilter.vue'

export default {
  components:  {
    ProductFilter
  }
}
</script>

<style>
.product {
  border: 2px solid;
  border-radius: .5rem;
  padding: 1rem;
  color: black;
  text-decoration: none !important;
}
.product p:last-child {
  font-style: italic;
}
.product-image {
  height: auto;
  width: 100%;
}
.product-filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  max-width: 1000px;
  margin: 0 auto;
}
a:link {
  text-decoration: none;
}
</style>
