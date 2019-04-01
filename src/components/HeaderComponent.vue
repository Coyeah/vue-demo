<template>
  <div id="header" class="flex">
    <img src="../assets/left.svg" />
    <div>订餐</div>
    <img src="../assets/more.svg" />
  </div>
</template>

<script>
export default {
  name: 'header-component',
}
</script>

<style lang="scss">
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 18px;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
}
</style>
