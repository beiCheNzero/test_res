<template>
  <div>
    <el-button type="success" @click="getAllInfo()">获取所有人的信息</el-button>
    <el-table :data="worker.slice((currentPage-1)*pageSize, currentPage*pageSize)" style="width: 60%" max-height="450">
    <!--
      <el-table :data="worker" style="width: 60%" max-height="450">
    -->
      <el-table-column fixed prop="wid" label="id" width="200"></el-table-column>
      <el-table-column prop="worker_name" label="姓名" width="200"></el-table-column>
      <el-table-column label="照片"  width="200">
      <!--
        /*
          * vue2中可以使用slot-scope="scope"
          * 但是在vue3中是使用v-slot="scope"
          * 这是因为在vue2和vue3中很多语法都发生了改变，组件的用法也发生了改变
        */
      -->
        <template v-slot="scope">
          <el-avatar :src="scope.row.worker_image"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column prop="worker_salary" label="工资" width="200"></el-table-column>
      <el-table-column prop="worker_money" label="工资倍数" width="200"></el-table-column>
    </el-table>
    <!-- 分页器 -->
    <!-- 
      /*
        * 在以前/原本的`el-pagination`标签中
        * @size-change="handleSizeChange()"
        * @current-change="handleCurrentChange()"
        * 但是，在vue3中使用，需要写成这样
        * @size-change="(val) => handleSizeChange(val)"
        * @current-change="(val) => handleCurrentChange(val)"
        * 是需要加入val参数的，在elementui的官方文档上是写了这两个事件是有默认的参数就是val
        * 但是官方文档在最后给了我们一个警告-WARNING
        * 以上事件不推荐使用（但由于兼容的原因仍然支持，在以后的版本中将会被删除)
        * 如果要监听 current-page 和 page-size 的改变，使用 v-model 双向绑定是个更好的选择。
      */
    -->
    <el-pagination background 
                    align="center"
                    @size-change="(val) => handleSizeChange(val)"
                    @current-change="(val) => handleCurrentChange(val)"
                    :current-page.sync="currentPage"
                    :page-sizes="[1, 5, 10, 20]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper" 
                    :total="worker.length"
                    />
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        worker: [],
        currentPage: 1,//当前页数
        pageSize: 3,//每页显示条数
        total: 0,//总数据条数
      }
    },
    methods: {
      getAllInfo() {
        axios.get('/worker/getAllInfo').then(res => {
          console.log("-----");
          console.log(res.data);
          this.worker = res.data;
          this.total = res.data.total;
        }).catch(err => {
          console.log("getAllInfo错误" + err);
        })
      },
      //每页条数改变时触发，选择一页显示多少行
      handleSizeChange(val) {
        this.pageSize = val;
        this.currentPage = 1;
        console.log("每页"+ val);
        this.$options.methods.getAllInfo()
        // console.log(JSON.parse(JSON.stringify(this.worker)));
        this.worker = JSON.parse(JSON.stringify(this.worker));
      },
      //当前页改变时触发，跳转其他页
      handleCurrentChange(val) {
        this.currentPage = val
        console.log(`当前页: ${val}`)
        this.$options.methods.getAllInfo()
        this.worker = JSON.parse(JSON.stringify(this.worker));
      },
    }
  }
</script>

<style scoped>

</style>

/*
  * 事物的四大特征：
  * 一致性，隔离性，持久性，原子性
  
  * 事物的四大隔离特征：
  * 读已提交
  * 读未提交
  * 可重复读
  * 可串行化
*/

