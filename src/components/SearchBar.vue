<template>
  <div class="searchBar-wrapper">
    <el-input v-model="query_params" prefix-icon="el-icon-search">
      <el-button slot="append" @click="search_items(query_params)">搜索</el-button>
    </el-input>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        query_params: ''
      }
    },

    methods: {
      search_items(params) {
        // this.$emit('search');
        this.$router.push({
          path: '',
          query: {
            search: params
          }
        })
      }
    }
  };
</script>

<style scoped>
  .searchBar-wrapper {
    width: 80%;
  }
</style>
