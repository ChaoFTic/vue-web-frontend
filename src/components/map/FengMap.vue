<template>
  <div id="myMap" ref="myMap"></div>
</template>

<script>
  // import fengmap from 'fengmap';
  const fengmap = require('fengmap');
  const fmapId = '90873';

  export default {
    name: 'FengMap',
    mounted() {
      console.log(this.$refs.myMap);
      const map = new fengmap.FMMap({
        container: this.$refs.myMap,
        appName: 'spmkt',
        key: '33b63aa0b5dc023b5689e61c5b52387c'
      });
      map.openMapById(fmapId);
    }

  };
</script>

<style scoped>
 #myMap {
   height: 600px;
 }
</style>
