<template>
  <el-container>
    <el-header style="background: #eaeaea;"></el-header>
    <router-view/>
    <el-footer>
      <slogan/>
      <copyright/>
    </el-footer>
  </el-container>
</template>

<script>
  import Slogan from '@/components/Slogan';
  import Copyright from '@/components/Layout/Copyright';
  import Home from '@/views/Home';

  export default {
    name: 'Index',
    components: { Home, Copyright, Slogan },

  };
</script>

<style scoped>
  .el-footer {
    width: 100%;
    padding: 0;
    background: #eaeaea;
  }
</style>
