<template>
  <div>
      <x-header :right-options="{showMore: true}" :left-options="{showBack: false}" @on-click-more="Login">需求宝</x-header>
      <swiper loop auto :list="demo06_list" :index="demo06_index" ></swiper>
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
    <panel :header="'需求广场'" :footer="footer" :list="list" @on-img-error="onImgError"></panel>
  </div>
</template>

<script>
import { Panel, Radio, AlertModule, Grid, GridItem, XButton, Tabbar, TabbarItem, Group, Cell, XHeader, Swiper } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'https://img1.xuanruanjian.com/images/article/major/114/289/01d11ebd73316a0debfc88c28b58a2a2_B.jpg',
  title: '满足你的一切需求'
}, {
  url: 'javascript:',
  img: 'http://i.ce.cn/ce/cysc/zgjd/wgsv/201403/06/W020140306298913980701.jpg',
  title: '有求必应'
}, {
  url: 'javascript:',
  img: 'http://www.easiu.com/text/webupimg/2018/2/20182231041099274.jpg',
  title: '使命必达',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]
const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `(可点击)${item.title}`
}))

export default {
  components: {
    Panel,
    Radio,
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
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  created () {
    let _this = this
    this.$http.get('http://localhost:3000/api/Need').then(({data}) => {
      console.log(data)
      var newData = data.map((item, index) => ({
        title: item.Name,
        src: item.Gender,
        desc: item.Need
      }))
      console.log(newData)
      _this.list = newData
    })
  },
  data () {
    return {
      type: '1',
      list: [{
        src: '',
        fallbackSrc: '',
        title: '需求一',
        desc: '请个人帮我去二期楚才菜鸟驿站取一个快递，联系电话：133333333333',
        url: '/component/cell'
      }, {
        src: '',
        title: '需求二',
        desc: '下午两点，帮忙在二期篮球场，占一个场子。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      footer: {
        url: 'http://vux.li'
      },
      demo06_list: urlList,
      demo06_index: 0
    }
  }
}
</script>