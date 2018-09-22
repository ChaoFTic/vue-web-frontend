<template>
  <div class="copyright-wrapper">
    <div class="copyright-links">
      <p>
        <a href="javascript:void(0);">关于我们</a>
        <span class="copyright_split">|</span>
        <a href="javascript:void(0);">联系我们</a>
        <span class="copyright_split">|</span>
        <a href="javascript:void(0);">English Site</a>
      </p>
    </div>
    <div class="copyright-info">
      <p>
        <a href="javascript:void(0);">
          <fa-icon icon="github"/>
          <span>ChaoFTic</span>
        </a>
      </p>
    </div>
  </div>
</template>
<script>
  import FaIcon from '@/components/FaIcon';
  export default {
    name: 'Copyright',
    components: { FaIcon }
  };
</script>
<style scoped>


  .copyright-wrapper {
    text-align: center;
    background: inherit;
    padding-bottom: 30px;
  }

  .copyright-wrapper a {
    color: #666;
    text-decoration: none;
  }

  .copyright-wrapper a:hover {
    color: red;
    text-decoration: none;
  }

  .copyright-links p {
    border-top: solid 1px #dedede;
    padding-top: 18px;
    margin: 0;
  }
</style>
