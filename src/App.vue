<template>
  <div id="app">
      <navbarlogout/>
    <router-view/>
  </div>
</template>
<script>
import navbarlogout from "./components/navbarlogout" 
export default {
  components: {
    navbarlogout
  }
}
</script>
