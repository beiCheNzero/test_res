<template>
  <div class="common-layout">
    <el-container>
        <el-aside><!-- 左边的内容 -->
          <leftmenu :name="this.$route.query.user_name"></leftmenu>
        </el-aside>
        <el-container>
          <el-header><!-- 右-上 -->
            <!-- <p>用户名:{{this.$route.query.user_name}}</p> -->
            <el-col :span="6">
              <el-card shadow="hover">
                用户名:{{this.$route.query.user_name}}
              </el-card>
            </el-col>
          </el-header>
          <el-divider /><!-- 分割线 -->
          <el-main><!-- 右-下 --> 
            <indexmain></indexmain>
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
  import rightmenu from './right_menu.vue'
  import leftmenu from './left_menu.vue'
  import indexmain from './indexMain.vue'

  export default {
    components: {
      leftmenu,
      rightmenu,
      indexmain
    },
    data() {
      return {

      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>

</style>