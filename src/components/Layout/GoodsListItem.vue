<template>
  <el-col :span="4" class="goods-list-item">
    <div class="item-wrapper">
      <div class="item-img">
        <a href="javascript:void(0);">
          <img src="./../../assets/logo.png">
        </a>
      </div>
      <div class="item-price">
        <strong>
          <em>￥</em>
          <i>1399.00</i>
        </strong>
      </div>
      <div class="item-title">
        <a title="title hover to see" href="javascript:void(0);" class="hover">
          <span>
            title to be see
          </span>
        </a>
      </div>
      <div class="item-company">
        <span>
          <a href="javascript:void(0)" title="link to company">item's company</a>
          <!--<el-button type="text" icon="el-icon-service"></el-button>-->
          <a href="javascript:void(0);" title="chat with server">
            <el-icon name="service"></el-icon>
          </a>
        </span>
      </div>
      <div class="item-tags">
        <el-tag size="mini">标签一</el-tag>
        <el-tag size="mini">标签二</el-tag>
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
            <el-button size="mini">
              <v-icon name="cart-arrow-down" scale="1"></v-icon>
              加入购物车
            </el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-col>
</template>
<script>
  import ElSlPanel from 'element-ui/packages/color-picker/src/components/sv-panel';
  export default {
    name: 'GoodsListItem',
    components: { ElSlPanel }
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
