const mutations = {
  addCart(state, info) {
    const oldInfo = stats.cartList.find(item => item.iid === info.iid);

    if (oldInfo) {
      oldInfo.count += 1;
    } else {
      info.count = 1;
      info.checked = true;
      stats.cartList.push(info);
    }
  }
}

export default mutations;
