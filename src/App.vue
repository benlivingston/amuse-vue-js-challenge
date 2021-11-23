<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

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
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
