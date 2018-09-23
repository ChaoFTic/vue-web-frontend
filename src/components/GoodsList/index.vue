<template>
  <el-row v-loading.fullscreen.lock="fullScreenLoading" :gutter="4" class="goods-list">
    <template v-for="(item, index) in goods">
      <goods-list-item
        :item="item"
        :key="index">
      </goods-list-item>
    </template>
  </el-row>
</template>
<script>
  import GoodsListItem from '@/components/GoodsList/GoodsListItem';

  export default {
    name: 'GoodsList',
    components: { GoodsListItem },

    data() {
      return {
        goods: [],
        fullScreenLoading: true,
      };
    },

    watch: {
      '$route'(to, from) {
        this.getData(to.query['search']);
      },

      'goods'() {
        this.$nextTick(() => {
          this.fullScreenLoading =false;
        })
      }
    },

    mounted() {
      this.getData('');
    },

    methods: {
      getData(query_params) {
        console.log('getData', query_params);
        this.$axios.get('/item',
          {
            params: {
              search: query_params
            }
          })
          .then(res => {
            this.goods = res.data;
          })
          .catch(err => console.log(err));
      }
    }
  };
</script>
