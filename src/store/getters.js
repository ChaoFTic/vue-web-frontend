export default {
  cart_items: state => state.cart.cart_items,
  cart_total_price: state => {
    let sum = 0.0;
    state.cart.cart_items.forEach(item => {
      if (item.item_selected === true) {
        sum += item['item_price'] * item['item_num'];
      }
    });
    return sum.toFixed(2);
  }
}
