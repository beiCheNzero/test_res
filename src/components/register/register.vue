<template>
  <div>
    <login>
      <h1>register</h1>
      <el-form
        :model="reg"
        status-icon
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Username">
          <el-input v-model="reg.user_name" label-width="70%" autocomplete="off" autofocus/>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="reg.user_pwd" type="password" autocomplete="off" show-password/>
        </el-form-item>
        <el-form-item label="Confirm">
          <el-input
            v-model="reg.checkbox"
            type="password"
            @blur="check()"
            show-password
          />
        </el-form-item>
        <el-alert title="两次密码不一致" type="error" class="el-alert" v-if="reg.isCheck"/>
        <!-- 
        <el-alert title="密码相同" type="success" class="el-alert" v-else="!reg.isCheck"/>
        -->
        <el-form-item>
          <el-button type="primary" @click="register()" :plain="true" 
            >Submit
          </el-button>
          <el-button type="warning" @click="Reset()">Reset</el-button>
          <el-button type="info" @click="login()">Back Login</el-button>
        </el-form-item>
      </el-form>
    </login>
  </div>
</template>

<script>
  import axios from "axios"
  import login from "../common/login.vue"
  import md5 from "js-md5"
  import { ElMessage } from 'element-plus'

  export default {
    components: {
      login
    },
    data() {
      return {
        reg: {
          user_name: '北辰',
          user_pwd: '123',
          checkbox: '123',
          isCheck: false,
        }
      }
    },
    methods: {
      // 确认密码
      check() {
        if( this.reg.user_pwd != this.reg.checkbox ){
          this.reg.isCheck = true;
        }else{
          this.reg.isCheck = false;
        }
        console.log(this.reg.isCheck);
      },
      // 清空数据
      Reset() {
        Object.keys(this.reg).forEach(key => (this.reg[key] = ''));
      },
      login () {
        this.$router.push('/login')
      },
      // 注册
      register () {
        if(!this.reg.isCheck) {
          axios.get('/list/register', {
            params: {
              user_name: this.reg.user_name,
              user_pwd: md5(this.reg.user_pwd + ''),
            }
          }).then(res => {
            ElMessage({
              message: "注册成功",
              type: 'success'
            })
            this.$router.push('/login');
          }).catch(err => {
            console.log("注册失败!" + err);
            history.back;
          })
        }
      }
    }
  }

</script>

<style scoped>
  .demo-ruleForm .el-input {
    width: 90%;
  }

  .el-alert {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .el-button {
    border-radius: 20px;
  }
</style>>