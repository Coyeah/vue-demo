<template>
  <div class="num-select">
    <span v-if="countValue !== 0" class="btn" v-on:click="oper('sub')" :style="subStyle">-</span>
    <span v-if="countValue !== 0" class="text">{{this.countValue}}</span>
    <span class="btn" v-on:click="oper('add')" :style="addStyle">+</span>
  </div>
</template>

<script>
import {primaryColor} from '../common/config';
export default {
  name: 'num-select',
  props: ['count', 'index', 'parentIndex'],
  data: function () {
    return {
      countValue: 0,
      addStyle: {
        'color': '#fff',
        'background-color': primaryColor,
        'border': `1px solid ${primaryColor}`,
      },
      subStyle: {
        'color': primaryColor,
        'background-color': '#fff',
        'border': `1px solid ${primaryColor}`,
      }
    }
  },
  created: function () {
    this.countValue = this.count
  },
  watch: {
    count(newValue) {
      this.countValue = newValue;
    },
    index(newValue) {
      this.countValue = this.count;
    },
    parentIndex(newValue) {
      this.countValue = this.count;
    }
  },
  methods: {
    oper(flag) {
      if (flag === 'sub') {
        this.countValue = this.countValue - 1;
      } else {
        this.countValue = this.countValue + 1;
      }
      this.$emit('onChange', this.countValue, this.index, this.parentIndex)
    }
  }
}
</script>

<style lang="scss">
.num-select {

  &>span {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
  }

  .btn {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 4px;
  }

  .text {
    margin: 0 10px
  }
}
</style>
