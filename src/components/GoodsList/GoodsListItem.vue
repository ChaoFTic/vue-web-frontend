<template>
  <el-col :span="4" class="goods-list-item">
    <el-card shadow="hover" class="item-wrapper">
      <div class="item-img">
        <router-link :to="{ path: `item/${item.id}` }">
          <img :src="item['image']" width="220px" height="220px">
          <!--<img v-lazy.src="item['image']" :data-load="require('@/../../../static/item_default.png')">-->
        </router-link>
      </div>
      <div class="item-price">
        <strong>
          <em>￥</em>
          <i>{{ item['item_price'] }}</i>
        </strong>
      </div>
      <div class="item-title">
        <router-link :to="{ path: `item/${item.id}` }" title="title hover to see" class="hover">
          <span>
            {{ item['item_name'] }}
          </span>
        </router-link>

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
              <fa-icon icon="heart"/>
              关注
            </el-button>
          </el-col>
          <el-col :span="12">
            <el-button id="add_button" size="mini" @click="addToCart(item)">
              <fa-icon icon="cart-arrow-down"/>
              <span>加入购物车</span>
            </el-button>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </el-col>
</template>
<script>
  import { mapActions } from 'vuex';
  import FaIcon from '@/components/FaIcon';

  export default {
    name: 'GoodsListItem',
    components: { FaIcon },

    props: {
      item: {
        type: Object,
        default() {
          return {};
        }
      }
    },

    data() {
      return {
        // default_image: require('@/../../../static/item_default.png')
      }
    },

    computed: {
      errorImage() {
        // return 'this.src="' + require('@/assets/') + '"'
        return ''
      }
    },

    methods: {
      ...mapActions([
        'add_to_cart'
      ]),
      addToCart(item) {
        console.log(this.$el);
        this.$el.focus();
        this.$store.dispatch('add_to_cart', item)
          .then(() => {
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  };
</script>

<style scoped>

  a {
    color: #666;
    text-decoration: none;
  }

  .item-wrapper > div > div {
    margin-bottom: 10px;
  }

  .el-card {
    margin-bottom: 40px;
    border: none;
  }

  #add_button:focus {
    color: #606266;
    border-color: #dcdfe6;
    background-color: #ffffff;
  }

  #add_button:hover {
    color: #409EFF;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  #add_button:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: 0;
  }

  #fav-button:focus {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }

  #fav-button:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }

  #fav-button:active {
    outline: 0;
  }

  .item-img {
    display: flex;
    justify-content: center;

    background: url("/static/item_default.png") no-repeat 0 0;
  }
</style>
