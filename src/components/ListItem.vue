<template>
  <div class="list-item">
    <img :src="target.image" />
    <div class="item">
      <div class="list-item-title">{{this.target.name}}</div>
      <div class="list-item-subtitle">{{this.target.intro}}</div>
      <div class="list-item-price">{{this.target.price}}</div>
      <div class="list-item-select">
        <NumSelect :count="this.target.cnt" :index="index" @onChange="countChange" :parentIndex="parentIndex" />
      </div>
    </div>
  </div>
</template>

<script>
import NumSelect from './NumSelect.vue';
export default {
  name: 'list-item',
  props: ['target', 'index', 'parentIndex'],
  components: {
    NumSelect,
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
      this.$emit('onChange', count, index, parentIndex)
    }
  },
}
</script>

<style lang="scss">
.list-item {
  width: 100%;
  height: 110px;
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: flex-start;

  img {
    width: 90px;
    height: 90px;
    border-radius: 8px;
  }

  .item {
    position: relative;
    box-sizing: border-box;
    padding: 5px;
    margin: 0;
    width: calc(100% - 90px);
  }

  &-title {
    font-size: 15px;
    margin-bottom: 3px;
    color: #454545;
  }

  &-subtitle {
    font-size: 11px;
    color: #999999;
  }

  &-price {
    position: absolute;
    left: 7.5px;
    bottom: 7.5px;
    font-size: 15px;
    color: red;
    &:before {
      content: '￥';
      font-size: 7.5px;
    }
  }

  &-select {
    position: absolute;
    right: 7.5px;
    bottom: 7.5px;
  }
}
</style>
