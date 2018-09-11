<template>
  <div class="slogan-wrapper">
    <el-row class="slogan">
      <el-col :span="6" class="fore1">
        <i>多</i>品类齐全，轻松购物
      </el-col>
      <el-col :span="6" class="fore2">
        <i>快</i>多仓直发，急速配送
      </el-col>
      <el-col :span="6" class="fore3">
        <i>好</i>正品行货，精致服务
      </el-col>
      <el-col :span="6" class="fore4">
        <i>省</i>天天低价，畅选无忧
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'Slogan'
  };
</script>
<style scoped>
  .slogan-wrapper {
    background: inherit;
  }

  .slogan {
    font-size: 18px;
    font-weight: 700;
    text-indent: 46px;
    line-height: 42px;
    padding: 30px 0 30px 55px;
    overflow: hidden;
  }

  .slogan i {
    display: block;
    position: absolute;
    width: 36px;
    height: 42px;

    text-indent: -9999px;
    background: url("/static/slogan.png") no-repeat 0 0;
  }

  .slogan .fore2 i {
    background-position: 0 -43px;
  }

  .slogan .fore3 i {
    background-position: 0 -86px;
  }

  .slogan .fore4 i {
    background-position: 0 -129px;
  }

</style>
