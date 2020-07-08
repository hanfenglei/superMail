<template>
  <div class="tab-bar-item">
    <slot slot="item-icon" />
    <slot slot="item-text" />
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
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
}
</style>
