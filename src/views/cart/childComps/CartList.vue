<template>
  <div>
    <scroll>
      <div>
        <caft-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></caft-list-item>
      </div>
    </scroll>
  </div>
</template>


<script>
import Scroll from "common/scroll/Scroll";
import CartListItem from "./CartListIetm";

export default {
  name: "CartList",

  components: {
    Scroll,
    CartListItem
  },

  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>


<style scoped>
</style>
