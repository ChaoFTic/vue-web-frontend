<template>
  <div class="searchBar-wrapper">
    <el-input prefix-icon="el-icon-search">
      <el-button slot="prepend" icon="el-icon-picture-outline"></el-button>
      <el-button slot="append">搜索</el-button>
    </el-input>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar'
  };
</script>

<style scoped>
  .searchBar-wrapper {
    width: 80%;
    padding-top: 30px;
  }
</style>
