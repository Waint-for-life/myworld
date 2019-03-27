<template>
  <div>
      <x-header :left-options="{showMore: true}" :right-options="{showMore: false}">需求宝</x-header>
    <tabbar style position="fixed">
      <tabbar-item badge="2" selected link="/Login" >
        <img slot="icon" src="../assets/首页.png">
        <span slot="label">需求广场</span>
      </tabbar-item>
      <tabbar-item selected link="/Post">
        <img slot="icon" src="../assets/发布.png">
        <span slot="label">发布</span>
      </tabbar-item>
      <tabbar-item >
        <img slot="icon" src="../assets/我的.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
     <grid :show-lr-borders="false">
      <grid-item :label="('需求分类')" v-for="i in 6" :key="i">
        <img slot="icon" src="/src/assets/需求.png">
      </grid-item>
    </grid>
    <group :title="('发布需求')">
      <x-textarea :max="150" :placeholder="('请在此处输入你的需求（限150字以内）')"  @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
     </group>
      <x-button type="primary" @click.native="Login">发布</x-button>
  </div>
</template>

<script>
import { XTextarea, AlertModule, Grid, GridItem, XButton, Tabbar, TabbarItem, Group, Cell, XHeader, Swiper } from 'vux'
export default {
  components: {
    XTextarea,
    AlertModule,
    Grid,
    GridItem,
    XButton,
    Swiper,
    XHeader,
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  methods: {
    Login () {
      this.$router.push({ path: '/Login' })
    },
    onEvent (event) {
      console.log('on', event)
    }
  }
}
</script>