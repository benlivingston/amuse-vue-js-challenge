<template>
  <div>
    <select v-model="selectedValue" class="product-filter">
      <option value="">Filter products ...</option>
      <option v-for="value in values" :key="value">{{value}}</option>
    </select>
<!--
    <vue-select v-model="selectedValue" class="product-filter" clear-on-close :options="values"></vue-select>
-->
  </div>
</template>

<script>
//import VueSelect from 'vue-next-select'
//import "vue-next-select/dist/index.css";

export default {
  name: 'ProductFilter',
  components: {
    //VueSelect
  },
  props: {
    criteria: String,
    useAllProducts: Boolean
  },
  data() {
    return {
      selectedValue: ""
    }
  },
  computed: {
    values() {
      if (this.criteria === 'price') {
        return ['$25ish', '$50ish', '$100ish', '$200ish', '$300ish', '$400ish', '$500ish']
      }
      // unique values from available products
      else if (this.useAllProducts) {
        return [...new Set(this.$store.state.availableProducts.map(p => p[this.criteria].toUpperCase()))];
      }
      // unique values from presently filtered products
      else {
        return [...new Set(this.$store.state.products.map(p => p[this.criteria].toUpperCase()))];
      }
    }
  },
  watch: {
    selectedValue: function(val) {
      if (val !== undefined) {
        this.$store.commit('filterProducts', {"key": this.criteria, "val": val})
      }
    }
  }
}
</script>

<style scoped>
</style>
