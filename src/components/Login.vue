<template>
  <div>
    <group title="用户登录">
      <x-input title="账号:" v-model="phone" :max="13" ></x-input>
     
      <x-input title="密码:" type='password' v-model="password" :max="13"></x-input>
    </group>
      <x-button type="primary" @click.native="Login">登陆</x-button>
    
  </div>
</template>
<script>
import { AlertModule, Alert, XInput, Group, XButton, Cell } from 'vux'

export default {
  components: {
    AlertModule,
    Alert,
    XInput,
    XButton,
    Group,
    Cell
  },
  data () {
    return {
      phone: '1465196826',
      password: '123465'
    }
  },
  methods: {
    Login () {
      if (this.password === '123456') {
        this.$router.push({ path: '/' })
      } else {
        AlertModule.show({
          title: '登陆失败',
          content: '密码错误'
        })
      }
    }
  }
}
</script>
