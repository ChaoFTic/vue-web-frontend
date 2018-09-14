<template>
  <el-row :gutter="4" class="goods-list">
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
      };
    },

    mounted() {
      this.getData();
    },

    methods: {
      getData() {
        this.$axios.get('/item')
          .then(res => {
            this.goods = res.data;
            console.log(res);
          })
          .catch(err => console.log(err));
      }
    }
  };
</script>
