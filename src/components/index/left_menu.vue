<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon><location /></el-icon>
        <template #title>
          <!--
            <span>客户管理</span>
          -->
          <rightmenu :username="userName"></rightmenu>
        </template>
      </el-menu-item>

      <el-sub-menu index="2">
        <template #title>
          <el-icon><Share /></el-icon>
          <span>员工列表</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="2-4">
          <template #title>
            <span>item four</span>
          </template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3">
        <el-icon><Share /></el-icon>
        <template #title>住房记录</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>房间列表</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import rightmenu from './right_menu.vue'

  export default {
    inheritAttrs: false,
    props: {
      name: String,
    },
    setup() {
      const isCollapse = ref(true)
    },
    components: {
      rightmenu
    },
    data() {
      return {
        isCollapse: true,
        userName: this.name
      }
    },
    methods: {
      handleOpen() {
        console.log('handleOpen');
      },
      handleClose() {
        console.log('handleClose');
      }
    }
  }
</script>

<style scoped>

</style>