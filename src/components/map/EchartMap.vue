<template>
  <div>
    <div id="echarts" ref="echart" style="width: 800px; height: 600px;"></div>
    <div id="my-chart" ref="myChart" style="width: 800px; height: 600px"></div>
  </div>
</template>

<script>
  import echart from 'echarts';
  import 'echarts-gl';

  export default {
    name: 'Guide',
    components: {  },
    data: function () {
      const buildingsGeoJSON = require('@/assets/buildings.json');
      const regions = buildingsGeoJSON.features.map(feature =>  ({
          name: feature.properties.name,
          value: Math.random(),
          height: feature.properties.height / 10,
        }));
      const myJson = require('@/assets/map');
      const myData = myJson.features.map(feature => ({
        name: feature.properties.name,
        value: Math.random(),
      }));
      return {
        option: {
          visualMap: {
            show: true,
            min: 0.4,
            max: 1,
            inRange: {
              color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
          },
          series: [{
            type: 'map3D',
            map: 'buildings',
            shading: 'realistic',
            environment: '#000',
            realisticMaterial: {
              roughness: 0.6,
              textureTiling: 20
            },
            postEffect: {
              enable: true,
              SSAO: {
                enable: true,
                intensity: 1.3,
                radius: 5
              },
              screenSpaceReflection: {
                enable: false
              },
              depthOfField: {
                enable: true,
                blurRadius: 4,
                focalDistance: 30
              }
            },
            light: {
              main: {
                intensity: 3,
                alpha: 40,
                shadow: true,
                shadowQuality: 'high'
              },
              ambient: {
                intensity: 0.
              },
              ambientCubemap: {
                texture: 'data-gl/asset/pisa.hdr',
                exposure: 1,
                diffuseIntensity: 0.5,
                specularIntensity: 1
              }
            },
            groundPlane: {
              show: false,
              color: '#333'
            },
            viewControl: {
              minBeta: -360,
              maxBeta: 360,
              alpha: 50,
              center: [50, 0, -10],
              distance: 30,
              minDistance: 5,

              panMouseButton: 'left',
              rotateMouseButton: 'middle',
              zoomSensitivity: 0.5
            },

            itemStyle: {
              areaColor: '#666'
            },

            label: {
              textStyle: {
                color: 'white'
              }
            },

            silent: true,

            instancing: true,

            boxWidth: 200,
            boxHeight: 1,

            data: regions
          }]
        },
        buildingsGeoJSON,
        myJson,
        myOption: {
          visualMap: {
            show: true,
            min: 0.4,
            max: 1,
            inRange: {
              color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
          },
          series: [{
            type: 'map3D',
            map: 'supermarket',
            shading: 'realistic',
            environment: '#000',
            realisticMaterial: {
              roughness: 0.6,
              textureTiling: 20
            },
            postEffect: {
              enable: true,
              SSAO: {
                enable: true,
                intensity: 1.3,
                radius: 5
              },
              screenSpaceReflection: {
                enable: false
              },
              depthOfField: {
                enable: true,
                blurRadius: 4,
                focalDistance: 30
              }
            },
            light: {
              main: {
                intensity: 3,
                alpha: 40,
                shadow: true,
                shadowQuality: 'high'
              },
              ambient: {
                intensity: 0.
              },
              ambientCubemap: {
                texture: 'data-gl/asset/pisa.hdr',
                exposure: 1,
                diffuseIntensity: 0.5,
                specularIntensity: 1
              }
            },
            groundPlane: {
              show: false,
              color: '#333'
            },
            viewControl: {
              minBeta: -360,
              maxBeta: 360,
              alpha: 50,
              center: [50, 0, -10],
              distance: 30,
              minDistance: 5,

              panMouseButton: 'left',
              rotateMouseButton: 'middle',
              zoomSensitivity: 0.5
            },

            itemStyle: {
              areaColor: '#666'
            },

            label: {
              textStyle: {
                color: 'white'
              }
            },

            silent: true,

            instancing: true,

            boxWidth: 200,
            boxHeight: 1,
            data: myData
          }]
        }
      }
    },

    mounted() {
      const chart = echart.init(this.$refs.echart);
      echart.registerMap('buildings', this.buildingsGeoJSON);
      chart.setOption(this.option);

      const myChart = echart.init(this.$refs.myChart);
      echart.registerMap('supermarket', this.myJson);
      myChart.setOption(this.myOption);
    }
  }
</script>

<style scoped>

</style>
