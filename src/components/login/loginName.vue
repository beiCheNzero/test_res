<template>
  <login>
    <div class="demo-input-suffix">
      <h1>login</h1>
      <el-row :gutter="20">
        <el-col :span="6">
          <span class="ml-2 w-20 text-gray-600 inline-flex items-center">
            用户名
          </span>
        </el-col>
        <el-col :span="15">
          <el-input v-model="user_name"
                    class="w-100 m-2"
                    placeholder="write your username">
            <template #prefix>
              <el-icon class="el-input__icon"><Sunny /></el-icon>  
            </template>
          </el-input>
        </el-col>
      </el-row>
    </div>

    <div class="demo-input-suffix">
      <el-row :gutter="20">
        <el-col :span="6">
          <span class="ml-4 w-10 text-gray-600 inline-flex items-center">
            密&nbsp;&nbsp;&nbsp;&nbsp;码
          </span>
        </el-col>
        <el-col :span="15">
          <el-input v-model="user_pwd"
                    class="w-100 m-2"
                    placeholder="write your username"
                    type="password"
                    show-password>
            <template #prefix>
              <el-icon class="el-input__icon"><Unlock /></el-icon>  
            </template>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <!-- 验证码 -->
    <div class="checkbox">
      <div class="login-code">
        <el-row :span="24">
          <el-col :span="10" :offset="1">
            <!-- 验证码组件 -->
            <sldentify :identifyCode="identifyCode" @click="refreshCode"></sldentify>
          </el-col>
          <el-col :span="8">
            <el-form class="demo-ruleForm">
              <el-form-item>
                <el-input v-model="checkCode" 
                          placeholder="请输入验证码"
                          maxlength="4"
                          show-word-limit
                          @change="check"
                          >
                </el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-alert title="验证码错误" type="error" class="el-alert" v-if="isCheck"/>
        </el-row>
        <el-row :span="20">
          <el-col :span="10" :offset="5">
          </el-col>
        </el-row>
      </div>
    </div>

      <!-- 按钮 -->
    <el-row class="bt">
      <el-button type="success" round @click="loginCheck()">登录</el-button>
      <el-button type="warning" round @click="register()">注册</el-button>
      <el-button type="info" round class="last-bt">忘记密码？</el-button>
    </el-row>
  </login>

  <router-view></router-view>
</template>

<script>
  import axios from "axios"
  import md5 from 'js-md5'
  import Sldentify from './sIdentify.vue'
  import login from '../common/login.vue'

  export default {
    name: "loginName",
    components: {
      Sldentify,
      login
    },
    data() {
      return {
        user_name: 'beichen',
        user_pwd: '123456',
        checkCode: '',
        isCheck: false,
        identifyCodes: '1234567890abcdefjhijklinopqrsduvwxyz',//随机串内容
        identifyCode: '',
        account: []
      }
    },
    mounted () {
      // 初始化验证码
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    methods: {
      refreshCode () {
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
        console.log(this.identifyCode);
      },
      makeCode (o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
        }
      },
      randomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      loginCheck () {
        if(this.checkCode === this.identifyCode){
          axios.get('list/login', {
            params: {
              user_name: this.user_name,
              user_pwd: md5(this.user_pwd + ''),
              checkCode: this.checkCode
            }
          }).then(res=> {
            this.account = res.data
            // 密码123456
            console.log(this.user_pwd);
            // console.log(this.account);
            this.$router.push({
              path: '/index', 
              query: {user_name: this.user_name}
            });
          }).catch(err=> {
            console.log("登录失败" + err);
          })
        }

      },
      register () {
        this.$router.push('/register')
      },
      check () {
        console.log(this.checkCode);
        console.log(this.identifyCode);
        if(this.checkCode == this.identifyCode)
        {
          this.isCheck = false;
        }else{
          this.isCheck = true;
        }
      }

    },
  }
</script>

<style scoped>
  .demo-input-suffix {
    width: 80%;
    margin-left: 10%;
    margin-top: 20px;
  }

  .bt {
    width: 330px;
    margin: 20px 100px;
  }
  .bt button {
    margin-left: 20px;
  }
  .bt .last-bt {
    background: rgb(145, 140, 140);
    margin-left: 40px;
  }

  .checknode {
    width: 300px;
    height: 50px;
    background: gray;
    margin: 0 auto;
  }

  .login-code{
    margin-top: 20px;
  }

  .el-alert {
    width: 65%;
    margin: 0 auto;
  }
</style>