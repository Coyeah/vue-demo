<template>
  <div class="menu-item flex">
    <div class="menu-item-info">
      <div class="menu-item-info-title">{{target.name}}</div>
      <div class="menu-item-info-subtitle">{{target.intro}}</div>
    </div>
    <div class="menu-item-price">{{target.price * this.countValue}}</div>
    <div class="menu-item-select">
      <NumSelect :count="this.target.cnt" :index="index" @onChange="countChange" :parentIndex="parentIndex" />
    </div>
  </div>
</template>

<script>
import NumSelect from './NumSelect.vue';
export default {
  name: 'menu-item',
  props: ['target', 'index', 'parentIndex'],
  data: function () {
    return {
      countValue: 0,
    }
  },
  created() {
    this.countValue = this.target.cnt;
  },
  components: {
    NumSelect
  },
  watch: {
    target(newValue) {
      this.target = newValue;
    },
    index(newValue) {
      this.index = newValue;
    },
    parentIndex(newValue) {
      this.parentIndex = newValue;
    }
  },
  methods: {
    countChange(count, index, parentIndex) {
      this.countValue = count;
      this.$emit('onChange', count, +index, +parentIndex)
    }
  },
}
</script>

<style lang="scss">
.menu-item {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 8px 16px;
  margin: 0;

  &-info {
    width: 60%;
    &-title {
      font-size: 15px;
      color: #454545;
      margin-bottom: 5px;
    }
    &-subtitle {
      font-size: 12px;
      color: #999;
    }
  }
  &-price {
    width: 10%;
    font-size: 15px;
    color: #EF5350;

    &:before {
      content: '￥';
      font-size: 12px;
    }
  }
}
</style>
