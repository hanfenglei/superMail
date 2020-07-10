const getters = {
  cartList(state) {
    return status.cartList;
  },

  cartCount(stats, getters) {
    return getters.cartList.length;
  }
}

export default getters;
