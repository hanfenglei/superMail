<template>
  <div class="tab-bar-item">
    <div class="item-icon" v-show="!isActive">
      <slot name="icon"></slot>
    </div>

    <div class="item-active-icon" v-show="isActive">
      <slot name="active-icon"></slot>
    </div>

    <div class="item-text" :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",

  props: {
    link: {
      type: String,
      required: true
    }
  },

  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },

    activeStyle() {
      return this.isActive ? { color: "red" } : {};
    }
  },

  methods: {
    itemClick() {
      this.$router.replace(this.link);
    }
  }
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
