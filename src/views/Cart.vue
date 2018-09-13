<template>
  <el-container>
    <el-header height="auto">
      <el-row>
        <el-col :span="12">
          <logo />
        </el-col>
        <el-col :span="12">
          <search-bar />
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-table :data="cart_items" @selection-change="cart_select">
        <el-table-column :value="true" width="50" type="selection"/>
        <el-table-column :show-overflow-tooltip="true" width="100" property="item_name" label="商品名称"/>
        <el-table-column width="100" property="item_price" label="商品单价"/>
        <el-table-column width="100" property="item_num" label="商品数量">
          <template slot-scope="scope" class="el-input-number-wrapper">
            <el-input-number v-model="scope.row.item_num" :min="1" controls-position="right" style="width: 80px;"/>
          </template>
        </el-table-column>
        <el-table-column width="100" label="操作" fixed="right">
          <template slot-scope="{ row }">
            <el-button type="text" size="small" @click="remove_from_cart(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
  import Logo from '@/components/Logo';
  import SearchBar from '@/components/SearchBar';

  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'Pay',
    components: { SearchBar, Logo },

    computed: {
      ...mapGetters([
        'cart_items',
        'cart_total_price'
      ]),
    },

    mounted() {
      this.$store.getters.cart_items.forEach(item => {
        this.$refs.cartTable.toggleRowSelection(item, item.item_selected);
      })
    },

    methods: {
      ...mapActions([
        'remove_from_cart',
        'clear_cart',
        'cart_select'
      ]),

    },


  };
</script>

<style scoped>
  .el-header .el-col {
    margin-top: 30px;
  }
</style>
