<template>
  <div class="wrapper container-wrapper">
    <el-row>
      <el-col :span="18">
        <el-row>
          <el-col :span="8">
            <div class="item-image">
              <img :src="item['image']" alt="商品图片" border width="330px" height="330px">
            </div>
          </el-col>
          <el-col :span="16">
            <div class="item-detail">
              <div class="item-title">
                {{ item['item_name'] }}
              </div>
              <div class="price-wrapper">
                <div class="price">
                  <span class="label price-label">惊 喜 价</span>
                  <span class="price-icon">￥</span>
                  <span class="price-number">{{ item['item_price'] }}</span>
                </div>
                <div class="discount">
                  <span class="label discount-label">享 优 惠</span>
                  <span>一堆优惠信息</span>
                </div>
              </div>
              <div class="item-navi">
                <el-breadcrumb separator="&gt;">
                  <el-breadcrumb-item>标志一</el-breadcrumb-item>
                  <el-breadcrumb-item>标志二</el-breadcrumb-item>
                  <el-breadcrumb-item>标志三</el-breadcrumb-item>
                  <el-breadcrumb-item>标志四</el-breadcrumb-item>
                  <el-breadcrumb-item>标志五</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <div class="wrapper navi-map-wrapper">

          </div>
        </el-row>
      </el-col>

      <el-col :span="6">
        <div class="recommend-list">
          推荐商品列表
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'Item',
    props: {
      id: {
        type: String,
        default: '',
        require: true
      }
    },

    data() {
      return {
        item: {},
      };
    },
    mounted() {
      // alert('item ' + this.id + '\'s page');
      this.$axios.get(`/item/${this.id}`, {})
        .then(res => {
          this.item = res.data;
        });
    }

  };
</script>

<style scoped>
  .item-detail {
    margin-left: 30px;
  }


  .item-navi {
    margin-top: 15px;
  }

  .el-row {
    margin-left: 30px;
    margin-right: 30px;
  }

  .wrapper {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .navi-map-wrapper {
    width: 100%;
    height: 600px;
    background: #000;
  }

  .item-title {
    font-weight: 700;
    font-size: 16px;
    font-height: 28px;
    color: #666;
    padding-top: 10px;
    line-height: 28px;
  }

  .price-wrapper {
    background-color: #f3f3f3;
    padding: 10px 0 15px;
    margin-top: 5px;
  }

  .price > .price-icon {
    font-size: 16px;
    color: #e4393c;
  }

  .price > .price-number {
    font-size: 22px;
    color: #e4393c;
  }

  .recommend-list {
    background: bisque;
    height: 800px;
    width: 100%;
    margin-bottom: 30px;
  }

  .item-image {
    display: flex;
    justify-content: center;

    background: url("/static/item_default.png") no-repeat 0 0;
    background-size: 330px 330px;
  }

  .label {
    font-size: 12px;
    width: 50px;
    padding-left: 10px;
    color: #999;
    line-height: 30px;
  }
</style>
