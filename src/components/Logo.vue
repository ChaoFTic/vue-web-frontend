<template>
  <div class="logo">
    <router-link to="">
      <img width="100px" height="100px" src="@/assets/logo.png" alt="LOGO">
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Logo'
  };
</script>

<style scoped>
  .logo {
    display: flex;
    justify-content: center;
  }
</style>
