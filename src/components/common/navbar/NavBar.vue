<template>
  <div id="nav-bar">
    <div id="nav-left">
      <slot name="left"></slot>
    </div>
    <div id="nav-center">
      <slot name="center"></slot>
    </div>
    <div id="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "NavBar"
};
</script>


<style scoped>
#nav-var {
  position: relative;
  z-index: 10;

  display: flex;

  height: 44px;
  line-height: 44px;
  text-align: center;
}

.nav-left {
  width: 60px;
}

.nav-center {
  flex: 1;
}

.nav-rigth {
  width: 60px;
}
</style>
