<template>
  <div class="cartButton-wrapper">
    <el-popover placement="bottom" trigger="hover" @show="update_select_status(cart_items)">
      <el-table ref="cartButtonTable" :data="cart_items" @selection-change="cart_select">
        <el-table-column width="50" type="selection"/>
        <el-table-column :show-overflow-tooltip="true" width="100" property="item_name" label="商品名称"/>
        <el-table-column width="100" property="item_price" label="商品单价"/>
        <el-table-column width="100" property="item_num" label="商品数量">
          <template slot-scope="{ row }" class="el-input-number-wrapper">
            <el-input-number v-model="row.item_num" :min="1" controls-position="right" style="width: 80px;"/>
          </template>
        </el-table-column>
        <el-table-column width="100" label="操作" fixed="right">
          <template slot-scope="{ row }">
            <el-button type="text" size="small" @click="remove_from_cart(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row type="flex" justify="space-around" style="margin-top: 15px">
        <el-col :span="6">
          <el-popover placement="top" trigger="click">
            <p>确定清空购物车?</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text">取消</el-button>
              <el-button type="primary" size="mini" @click="clear_cart">确定</el-button>
            </div>
            <template slot="reference">
              <el-button :disabled="cart_total_price <= 0" type="danger">清空购物车</el-button>
            </template>
          </el-popover>
        </el-col>
        <el-col :span="6">
          <router-link to="cart">
            <el-button :disabled="cart_total_price <= 0" type="success">￥{{ cart_total_price }}&nbsp;去结算</el-button>
          </router-link>
        </el-col>
      </el-row>
      <template slot="reference">
        <el-badge :value="cart_items.length">
          <el-button icon="el-icon-goods">
            我的购物车
          </el-button>
        </el-badge>
      </template>
    </el-popover>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'CartButton',

    data() {
      return {
        test: true,

      };
    },
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

      update_select_status(rows) {
        console.log('update');
        if (rows) {
          rows.forEach(row => {
            this.$refs.cartButtonTable.toggleRowSelection(row, row.item_selected);
          });
        }
      },
      /*confirm_clear_cart() {
        this.$confirm('确定清空购物车?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$store.dispatch('clear_cart')
              .then(() =>
                this.$message({
                  type: 'success',
                  message: '清空成功'
                }));
          }).catch(() => {
            // cancel clear cart
          });
      },*/

    }
  };
</script>

<style scoped>

</style>

<style>
  .el-input-number__decrease, .el-input-number__increase {
    width: 18px;
  }
</style>
