<template>
  <div class="menu" :style="style">
    <div class="menu-header flex">
      <div class="menu-header-text">已选商品</div>
      <div class="menu-header-clear flex" v-on:click="onClear()"><img src="../assets/reset.svg" />清空</div>
    </div>
    <div class="menu-list">
      <MenuItem v-for="(item, index) in list" :key="index" :target="item" :index="item.index" :parentIndex="item.parentIndex" @onChange="onChange"/>
      <div style="height: 30px;"></div>
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue';
export default {
  name: 'menu-panel',
  props: ['isOpen', 'list'],
  components: {
    MenuItem,
  },
  data: function () {
    return {
      style: {
        'bottom': '-400px',
      },
    }
  },
  watch: {
    isOpen(newValue) {
      this.style = {
        'bottom': newValue ? '0px' : '-400px',
      }
    },
  },
  methods: {
    onChange(count, index, parentIndex) {
      this.$emit('onChange', count, index, parentIndex);
    },
    onClear() {
      this.$emit('onClear');
    }
  },
}
</script>


<style lang="scss">
.menu {
  z-index: 90;
  position: fixed;
  left: 0;
  background-color: #fff;
  height: 400px;
  width: 100%;
  transition: 0.5s all;

  &-list {
    height: 300px;
    overflow: auto;
  }

  &-header {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 16px;
    margin: 0;
    border-bottom: 3px solid #eee;

    &-text {
      font-size: 18px;
      color: #454545;
    }

    &-clear {
      font-size: 15px;
      color: #999;

      img {
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>
