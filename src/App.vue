<template>
  <div id="app">
    <TabBar>
      <TabBarItem>
        <img src="~assets/img/tabbar/home.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/home_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">首页</div>
      </TabBarItem>

      <TabBarItem>
        <img src="~assets/img/tabbar/category.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/category_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">分类</div>
      </TabBarItem>

      <TabBarItem>
        <img src="~assets/img/tabbar/cart.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/cart_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">购物车</div>
      </TabBarItem>

      <TabBarItem>
        <img src="~assets/img/tabbar/profile.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/profile_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
const TabBar = () => import("components/common/tabbar/TabBar.vue");
const TabBarItem = () => import("components/common/tabbar/TabBarItem.vue");

export default {
  name: "app",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style lang="">
</style>
