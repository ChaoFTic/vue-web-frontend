<template>
  <el-container>
    <el-header style="background: #eaeaea;"></el-header>
    <router-view/>
    <el-footer>
      <slogan/>
      <copyright/>
    </el-footer>
    <div class="tool-bar">
      <el-button :circle="true" @click="back_to_top">
        <fa-icon icon="caret-up"/>
      </el-button>
      <br/>
      <el-button :circle="true" @click="scan_QR">
        <fa-icon icon="camera"/>
      </el-button>
    </div>
  </el-container>
</template>

<script>
  import Slogan from '@/components/Slogan';
  import Copyright from '@/components/Layout/Copyright';
  import Home from '@/views/Home';
  import FaIcon from '@/components/FaIcon';

  export default {
    name: 'Index',
    components: { FaIcon, Home, Copyright, Slogan },

    methods: {
      back_to_top() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      },
      scan_QR() {
        alert('open the camera');
      }
    }
  };
</script>

<style scoped>
  .el-footer {
    width: 100%;
    padding: 0;
    background: #eaeaea;
  }

  .tool-bar {
    position: fixed;
    bottom: 100px;
    right: 100px;

    display: flex;
    flex-direction: column;
  }

  .el-button:focus{
    color: #606266;
    border-color: #dcdfe6;
    background-color: #ffffff;
  }
  .el-button:hover{
    color: #409EFF;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  .el-button:active{
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: 0;
  }
</style>
