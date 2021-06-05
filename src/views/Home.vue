<template>
  <div class="home">
    <clubs msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import clubs from '@/components/clubs.vue'

export default {
  name: 'Home',
  components: {
    clubs
  }
  
}
</script>

