<template>
  <el-col :span="4" class="goods-list-item">
    <div class="item-wrapper">
      <div class="item-img">
        <a href="javascript:void(0);">
          <img :src="item['image']">
        </a>
      </div>
      <div class="item-price">
        <strong>
          <em>￥</em>
          <i>{{ item['item_price'] }}</i>
        </strong>
      </div>
      <div class="item-title">
        <a title="title hover to see" href="javascript:void(0);" class="hover">
          <span>
            {{ item['item_name'] }}
          </span>
        </a>
      </div>
      <div class="item-company">
        <span>
          <a href="javascript:void(0)" title="link to company">
            <span>
              {{ item['item_company'] }}
            </span>
          </a>
          <a href="javascript:void(0);" title="chat with server">
            <el-icon name="service"></el-icon>
          </a>
        </span>
      </div>
      <div class="item-tags">
        <el-tag v-for="(tag, index) in item['tags']" :key="index" size="mini">{{ tag }}</el-tag>
      </div>
      <div class="item-actions">
        <el-row>
          <el-col :span="12">
            <el-button size="mini" type="danger">
              <v-icon name="heart" scale="1"></v-icon>
              关注
            </el-button>
          </el-col>
          <el-col :span="12">
            <el-button size="mini" @click="addToCart(item)">
              <v-icon name="cart-arrow-down" scale="1"></v-icon>
              <span>加入购物车</span>
            </el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-col>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'GoodsListItem',
    components: {  },

    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },

    methods: {
      ...mapActions([
        'add_to_cart'
      ]),
      addToCart(item){
        this.$store.dispatch('add_to_cart', item).then()
          .catch(err => {
          console.error(err);
        })
      }
    }
  };
</script>

<style scoped>
  a {
    color: #666;
    text-decoration: none;
  }
  .goods-list-item {
    margin-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #fff;
  }

  .goods-list-item:hover {
    border-color: #e9e9e9;
    box-shadow: 0 0 2px 2px #f8f8f8;
  }

  .item-wrapper {
    padding-left: 10px;
    padding-right: 10px;
  }
  .item-wrapper > div{
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .item-img {
    display: flex;
    justify-content: center;
  }
</style>
