<template>
  <el-col :span="4" class="goods-list-item">
    <el-card shadow="hover" class="item-wrapper">
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
            <el-button id="fav-button" size="mini" type="danger">
              <v-icon name="heart" scale="1"></v-icon>
              关注
            </el-button>
          </el-col>
          <el-col :span="12">
            <el-button id="add_button" size="mini" @click="addToCart(item)">
              <v-icon name="cart-arrow-down" scale="1"></v-icon>
              <span>加入购物车</span>
            </el-button>
          </el-col>
        </el-row>
      </div>
    </el-card>
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
        console.log(this.$el);
        this.$el.focus();
        this.$store.dispatch('add_to_cart', item).then(() => {})
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

  .item-wrapper > div > div{
    margin-bottom: 10px;
  }

  .el-card {
    margin-bottom: 40px;
    border: none;
  }
  #add_button:focus{
    color: #606266;
    border-color: #dcdfe6;
    background-color: #ffffff;
  }
  #add_button:hover{
    color: #409EFF;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  #add_button:active{
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: 0;
  }

  #fav-button:focus{
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
  #fav-button:hover{
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  #fav-button:active{
    outline: 0;
  }

  .item-img {
    display: flex;
    justify-content: center;
  }
</style>
