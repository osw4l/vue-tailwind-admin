<template>
  <Navbar v-if="isLoggedIn" />
  <router-view/>
</template>

<script>
import Navbar from "@/components/navbar";
export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    },
  },
}
</script>
