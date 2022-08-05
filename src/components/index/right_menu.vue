<template>
  <div>
    <span @click="visible = true;getData()">客户管理</span>
      <el-drawer v-model="visible" :show-close="false" size="50%">
        <template #header="{ close, titleId, titleClass }">
          <h4 :id="titleId" :class="titleClass">员工个人信息</h4>
          <el-button type="danger" @click="close">
            <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
            Close
          </el-button>
        </template>
        <el-table :data="customer">
          <el-table-column prop="cid" label="CId" width="150"></el-table-column>
          <el-table-column prop="cust_name" label="姓名" width="150"></el-table-column>
          <el-table-column prop="cust_mobile" label="电话" width="150"></el-table-column>
          <el-table-column prop="cust_address" label="地址" width="150"></el-table-column>
          <el-table-column prop="cust_ticket" label="价格"></el-table-column>
        </el-table>
      </el-drawer>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: {
      username: {
        type: String,
        require: true,
        default: '北辰'
      },
    },
    components: {

    },
    data() {
      return {
        visible: false,
        id: '1',
        cust_name: this.username,
        customer: [],
      }
    },
    methods: {
      getData () {
        axios.get('customer/getInfo',{
          params: {
            cust_name: this.cust_name || this.username,
          }
        }).then(res => {
          this.customer = res.data
          console.log(this.cust_name);//beichen
          console.log(this.customer); // 获取到的数据
          // ElMessage({
          //   message: "查询成功",
          //   type: 'success'
          // })
        }).catch(err => {
          console.log("查询失败" + err);
        })
      }
    }
  }
</script>

<style scoped>

</style>