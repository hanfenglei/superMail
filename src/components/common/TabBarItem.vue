<template>
  <div class="tab-bar-item">
    <slot v-if="!isActive" name="item-icon" />
    <slot v-else name="item-icon-active" />
    <div :class="{ active: isActive }"><slot name="item-text" /></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24;
  margin-top: 3px;
  vertical-align: middle;
}

.active {
  color: red;
}
</style>
