<template>
  <div class="wrapper">
    <div class="product">
      <p>{{ product.name }}</p>
      <p>{{ product.url }}</p>
      <p>Cat: {{ product.category }}</p>
      <p>SubCat: {{ product.sub_category }}</p>
      <p>{{ product.price }}</p>
      <p>{{ product.thc_percentage }}</p>
      <p>{{ product.quantity }}</p>
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

