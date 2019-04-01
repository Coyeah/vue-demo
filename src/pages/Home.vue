<template>
  <div>
    <HeaderComponent />
    <div id="container" :style="style">
      <div class="nav">
        <NavItem v-for="(item, index) in dataSource" :key="index" :name="item.name" :isCheck="index === navIndex" @onClick="navClick(index)" />
      </div>
      <div class="list">
        <ListItem v-for="(item, index) in dataSource[navIndex].children" :key="index" :target="item" :index="index" :parentIndex="navIndex" @onChange="onTargetChange"/>
      </div>
    </div>
    <FooterComponent :isEmpty="cartList.length === 0" :total="totalPrice"  @onClick="cartClick()" />
    <div v-if="screenOpen" v-on:click="cartClick()" class="screen" :style="screenSytle"></div>
    <MenuPanel :isOpen="screenOpen" :list="menuList" @onChange="onTargetChange" @onClear="onCartClear"/>
  </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import NavItem from '../components/NavItem.vue'
import ListItem from '../components/ListItem.vue'
import MenuPanel from '../components/MenuPanel.vue'
import config from '../common/config';
export default {
  name: 'home',
  components: {
    FooterComponent,
    HeaderComponent,
    NavItem,
    ListItem,
    MenuPanel,
  },
  data: function () {
    return {
      style: {},
      screenSytle: {},
      navIndex: 1,
      cartList: [],
      menuList: [],
      totalPrice: 0,
      dataSource: config.dataSource,
      screenOpen: false,
    }
  },
  mounted: function () {
    this.style = {'min-height': `${document.documentElement.clientHeight}px`};
    this.screenSytle = {
      'height': `${document.documentElement.clientHeight}px`,
      'width': `${document.documentElement.clientWidth}px`,
    }
  },
  watch: {
    navIndex(newValue) {
      this.$forceUpdate();
    },
    cartList(newValue) {
      // console.log(newValue);
    },
    totalPrice(newValue) {
      // console.log(newValue)
    },
    screenOpen(newValue) {
      // console.log(newValue)
    }
  },
  methods: {
    navClick(index) {
      this.navIndex = index;
    },
    onTargetChange(count, index, parentIndex) {
      let data = this.dataSource;
      data[parentIndex].children[index].cnt = count;
      this.dataSource = data;
      let key = `${parentIndex}-${index}`;
      if (count === 0) {
        this.cartList = this.cartList.filter(value => value !== key);
      } else if (this.cartList.filter(value => value === key).length === 0) {
        this.cartList = [...this.cartList, `${parentIndex}-${index}`]
      }

      let temp = 0;
      if (this.cartList.length !== 0) {
        this.cartList.forEach(value => {
          let arr = value.split('-');
          temp += (this.dataSource[arr[0]].children[arr[1]].cnt * this.dataSource[arr[0]].children[arr[1]].price);
        });
      }
      this.totalPrice = temp;
      if (this.screenOpen) this.cartListMaker() 
    },
    cartClick() {
      this.screenOpen = !this.screenOpen;
      if (this.screenOpen) {
        this.cartListMaker();
      } else {
        this.menuList = [];
      }
    },
    onCartClear() {
      this.cartList.forEach(value => {
        let arr = value.split('-');
        this.dataSource[arr[0]].children[arr[1]].cnt = 0;
      });
      this.totalPrice = 0;
      this.cartList = [];
      this.screenOpen = !this.screenOpen;
    },
    cartListMaker() {
      let temp = [];
      this.cartList.forEach(value => {
        let arr = value.split('-');
        temp.push({
          ...this.dataSource[arr[0]].children[arr[1]],
          index: arr[1],
          parentIndex: arr[0],
        });
      });
      this.menuList = temp;
    }
  },
}
</script>

<style lang="scss">
#container {
  box-sizing: border-box;
  padding-top: 48px;
  margin: 0;
  width: 100%;
  background-color: #eee;
  display: flex;
  justify-content: center;

  .nav {
    width: 24.5%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    padding-bottom: 78.5px;
  }

  .list {
    background-color: #fff;
    width: 75.5%;
    padding-bottom: 78.5px;
  }
}

.screen {
  z-index: 80;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.4);
}
</style>
