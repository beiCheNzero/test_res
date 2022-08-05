import {
  createApp
} from 'vue'
import router from './router'
import App from './App.vue'
// 国内的elementui
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// org
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
// 引入图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 加密
// import md5 from 'js-md5'
import axios from 'axios'


const app = createApp(App).use(router).use(ElementPlus);
/*
 * 只是vue组件创建的位置要放到vue对象挂载之间
 * 相当于说是先建立vue对象，然后创建vue组件，最后再挂载，然后才能正常渲染
 * 否则就会报错
 */
/* 
 * 解决vue+element-plus使用<el-icon><Menu /></el-icon>报警告的问题
 */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  // 新增名为Menu的判断
  if ("menu" != key) {
    app.component(key, component);
  } else {
    app.component(key + "Icon", component);
  }
}

axios.defaults.baseURL = "http://159.75.136.33:5000/"
// app.prototype.$axios = axios;

app.mount('#app');