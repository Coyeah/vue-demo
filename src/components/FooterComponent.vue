<template>
  <div id="footer">
    <div class="cart-btn flex-center" :style="bgColor">
      <img src="../assets/cart.svg" v-on:click="onClick()" />
    </div>
    <div :class="cartText">{{this.total === 0 ? '您还未选购商品' : this.total}}</div>
    <div class="buy-btn" :style="bgColor">去下单</div>
  </div>
</template>

<script>
import {primaryColor} from '../common/config';
export default {
  name: 'footer-component',
  props: ['isEmpty', 'total'],
  data: function () {
    return {
      isCheck: false,
      bgColor: {
        'background-color': this.isEmpty ? '#5B5B5B' : primaryColor,
      },
      cartText: 'cart-text'
    }
  },
  watch: {
    isEmpty(newValue) {
      this.bgColor = {
        'background-color': newValue ? '#5B5B5B' : primaryColor,
      }
    },
    total(newValue) {
      this.total = newValue;
      this.cartText = newValue === 0 ? 'cart-text' : 'cart-total';
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
#footer {
  z-index: 100;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 78.5px;
  font-size: 15px;
  background-image: url('../assets/buttom-bg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  .cart-btn {
    position: absolute;
    top: 12px;
    left: 22px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #5B5B5B;

    img {
      width: 30px;
      height: 30px;
    }
  }

  .cart-text {
    color: #C1C1C1;
    position: absolute;
    left: 25%;
    bottom: 22.5px;
  }

  .cart-total {
    position: absolute;
    left: 25%;
    bottom: 12.5px;
    font-size: 24px;
    color: #fff;

    &:before {
      content: '￥';
      font-size: 16px;
    }
  }

  .buy-btn {
    color: #fff;
    position: absolute;
    right: 4.3%;
    bottom: 10px;
    width: 105px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 8px;
  }
}
</style>
