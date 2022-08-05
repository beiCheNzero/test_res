<template>
  <div>
    <div class="affix-container">
      <el-affix target=".affix-container" :offset="300" class="login">
        <!-- 
          <login-name></login-name>
        -->
        <slot></slot>
      </el-affix> 
    </div>
  </div>
</template>

<script>
  // import loginName from '../login/loginName.vue'

  export default {
    name: "login",
    components: {
      // loginName
    },
    data() {
      return {
        loginBg: 'url(' + require('../../assets/login/Summer.jpg') + ')',
      }
    },
    // 周期函数钩子
    mounted() {
      document.body.style.backgroundSize = '100%',
      document.body.style.backgroundImage = this.loginBg
    },
    // 离开时vue调用的钩子函数
    beforeUnmount () {
      // 清除背景图片
      document.body.style.backgroundImage = ''
    }
  }
</script>

<style scoped>
  .affix-container {
    text-align: center;
    height: 100%;
    width: 100%;
    margin-top: 250px;
  }

  .login {
    background: rgb(255, 255, 255);
    border-radius: 50px;
    width: 500px;
    height: 350px;
    margin: 0 auto;
    
  }
</style>