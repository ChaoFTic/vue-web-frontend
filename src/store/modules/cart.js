export default {
  state: {
    cart_items: [],
  },
  mutations: {
    ADD_TO_CART(state, item) {
      let item_idx = state.cart_items.findIndex(_item => item.id === _item.id);
      if (item_idx === -1) {
        state.cart_items.push({
          ...item,
          'item_num': 1,
          'item_selected': true
        });
      } else {
        state.cart_items[item_idx].item_num++;
      }
    },

    REMOVE_FROM_CART(state, item) {
      // console.log('mutation', item);
      let item_idx = state.cart_items.findIndex(_item => item.id === _item.id);
      if (item_idx !== -1) {
        state.cart_items.splice(item_idx, 1);
      } else {
        console.error(item, 'not exist in cart items');
      }
    },

    CLEAR_CART(state) {
      state.cart_items = [];
    },

    CART_SELECT(state, selected_items) {
      if (selected_items.length > 0) {
        selected_items.forEach(selected => {
          let matched_idx = state.cart_items.findIndex(item => item.id === selected.id);
          state.cart_items[matched_idx].item_selected = true;
        });
      } else {
        for (let i in state.cart_items) {
          if (state.cart_items.hasOwnProperty(i)) {
            state.cart_items[i].item_selected = false
          }
        }
      }
    }
  },


  actions: {
      add_to_cart({ commit }, item) {
        commit('ADD_TO_CART', item);
      },
      remove_from_cart({ commit }, item) {
        commit('REMOVE_FROM_CART', item);
      },
      clear_cart({ commit }) {
        commit('CLEAR_CART');
      },

      cart_select({ commit }, selected_items) {
        console.log('select change');
        commit('CART_SELECT', selected_items);
      }
    }
};

