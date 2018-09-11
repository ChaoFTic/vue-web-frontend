<template>
  <div class="cartButton-wrapper">
    <el-badge value="5">
      <el-button icon="el-icon-goods">我的购物车</el-button>
    </el-badge>
  </div>
</template>

<script>
  export default {
    name: 'CartButton'
  };
</script>

<style scoped>
  .cartButton-wrapper {
    margin-top: 30px;
  }
</style>
