<template>
  <el-container>
    <el-header height="auto">
      <el-row>
        <el-col :span="12">
          <logo/>
        </el-col>
        <el-col :span="12">
          <search-bar/>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-card>
        <el-table :data="cart_items" :show-summary="true" :summary-method="summaryHandler"
                  @selection-change="cart_select">
          <el-table-column :value="true" width="50" property="item_selected">
            <template slot-scope="{ row }">
              <el-checkbox v-model="row.item_selected"/>
            </template>
          </el-table-column>
          <el-table-column property="id" label="id"/>
          <el-table-column :show-overflow-tooltip="true" property="item_name" label="商品名称"/>
          <el-table-column :show-overflow-tooltip="true" property="item_company" label="公司名称"/>
          <el-table-column width="100" property="item_price" label="商品单价"/>
          <el-table-column width="120px" property="item_num" label="商品数量" class-name="cart-table-input">
            <template slot-scope="{ row }" class="el-input-number-wrapper">
              <el-input-number v-model="row.item_num" :min="1" controls-position="right" style="width: auto"/>
            </template>
          </el-table-column>
          <el-table-column label="小计" property="item_price_sum">
            <template slot-scope="{ row }">
              {{ (row['item_num'] * row['item_price']).toFixed(2) }}
            </template>
          </el-table-column>
          <el-table-column width="100" label="操作" property="item_operator" fixed="right">
            <template slot-scope="{ row }">
              <el-button type="text" size="small" @click="remove_from_cart(row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row style="margin-top: 30px">
          <el-col :span="6" :offset="18">
            <el-button :round="true" type="warning" style="width: 100%">
              去支付
            </el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
  import Logo from '@/components/Logo';
  import SearchBar from '@/components/SearchBar';

  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Pay',
    components: { SearchBar, Logo },

    computed: {
      ...mapGetters([
        'cart_items',
        'cart_total_price'
      ]),
    },

    methods: {
      ...mapActions([
        'remove_from_cart',
        'clear_cart',
        'cart_select'
      ]),

      // TODO: reformat code
      summaryHandler({ columns, data }) {
        const sum = Array.apply(null, Array(columns.length))
          .map(item => ``);

        let selected_idx = columns.findIndex(col => col.property === 'item_selected');
        let num_idx = columns.findIndex(col => col.property === 'item_num');
        let sum_idx = columns.findIndex(col => col.property === 'item_price_sum');

        let t_num = 0;
        let t_sum = 0.0;
        data.forEach(item => {
          t_num += item['item_num'];
          t_sum += item['item_num'] * item['item_price'];
        });
        sum[selected_idx] = `总计`;
        sum[num_idx] = `共 ` + t_num + ` 件`;
        sum[sum_idx] = t_sum.toFixed(2) + `元`;

        return sum;
      }
    },


  };
</script>

<style scoped>
  .el-header .el-col {
    margin-top: 30px;
  }

  .cart-table-input {
    height: 20px;
  }
</style>
