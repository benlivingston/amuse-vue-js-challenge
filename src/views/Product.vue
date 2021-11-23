<template>
  <div class="wrapper">
    <div class="product">
      <p><router-link to="/"><button class="close-button">X</button></router-link></p>
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
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      // match product url to route
      return this.$store.state.allProducts.filter(p => p.url === this.$route.fullPath)[0]
    }
  }
}
</script>

