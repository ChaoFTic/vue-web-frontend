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
      <el-row class="goods-list">
        <goods-list-item/>
        <goods-list-item/>
        <goods-list-item/>
        <goods-list-item/>
        <goods-list-item/>
        <goods-list-item/>
        <goods-list-item/>
        <goods-list-item/>
        <goods-list-item/>
      </el-row>
    </el-main>
    <el-footer>
      <slogan/>
      <copyright/>
    </el-footer>
  </el-container>
</template>

<script>
  import Slogan from '@/components/Layout/Slogan';
  import Copyright from '@/components/Layout/Copyright';
  import SearchBar from '@/components/Layout/SearchBar';
  import Logo from '@/components/Layout/Logo';
  import CartButton from '@/components/Layout/CartButton';
  import GoodsListItem from '@/components/Layout/GoodsListItem';

  export default {
    name: 'Index',
    components: { GoodsListItem, CartButton, Logo, SearchBar, Copyright, Slogan },
  };
</script>

<style scoped>
  .el-footer {
    width: 100%;
    padding: 0;
    background: #eaeaea;
  }

</style>
