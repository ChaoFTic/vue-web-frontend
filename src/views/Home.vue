<template>
  <el-container>
    <el-header height="auto">
      <el-row>
        <el-col :span="6">
          <logo/>
        </el-col>
        <el-col :span="12">
          <search-bar/>
        </el-col>
        <el-col :span="6">
          <cart-button/>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <goods-list/>
    </el-main>
  </el-container>
</template>

<script>
  import CartButton from '@/components/CartButton';
  import GoodsList from '@/components/GoodsList/index';
  import Logo from '@/components/Logo';
  import SearchBar from '@/components/SearchBar';

  export default {
    name: 'Home',
    components: { CartButton, GoodsList, Logo, SearchBar }
  };
</script>

<style scoped>
  .el-header .el-col {
    margin-top: 30px;
  }
</style>
