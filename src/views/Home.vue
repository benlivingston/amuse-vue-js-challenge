<template>
  <div>
<!--
    <img src="@/assets/logo.png" />
    <img :src="require('@/assets/logo.png')" />
-->
  </div>
  <div class="wrapper">
    <div v-for="product in $store.state.products" :key="product.entity_id" class="product">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}
.product {
  border: 3px solid;
  border-radius: .5rem;
  padding: 1rem;
}
.product p:first-child {
/*
  font-weight: bold;
  font-size: 2.5rem;
  margin: 1rem 0;
*/
}
.product p:last-child {
  font-style: italic;
  font-size: .8rem;
}
</style>
