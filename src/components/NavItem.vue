<template>
  <div class="nav-item flex-center" :style="itemStyle" v-on:click="onClick()">
    <span :style="textStyle">{{this.name}}</span>
  </div>
</template>

<script>
import {primaryColor} from '../common/config';
export default {
  name: 'nav-item',
  props: ['name', 'isCheck'],
  data: function () {
    return {
      itemStyle: {
        'background-color': this.isCheck ? '#fff' : '',
        'color': this.isCheck ? primaryColor : '',
      },
      textStyle: {
        'border-left': this.isCheck ? `4px solid ${primaryColor}` : '',
      },
    }
  },
  watch: {
    isCheck (newValue) {
      this.itemStyle = {
        'background-color': newValue ? '#fff' : '',
        'color': newValue ? primaryColor : '',
      };
      this.textStyle = {
        'border-left': newValue ? `4px solid ${primaryColor}` : '',
      };
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    }
  }
}
</script>

<style lang="scss">
.nav-item {
  width: 100%;
  height: 59px;
  font-size: 15px;
  text-align: center;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: 0.2s all;

  span {
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    margin: 0;
    transition: 0.2s all;
  }
}
</style>
