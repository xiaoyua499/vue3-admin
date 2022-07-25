<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <!-- 头部组件 -->
        <Header />
      </el-header>
      <el-container>
        <!-- 侧边栏组件 -->
        <Aside />
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Aside from "../components/Aside.vue"

export default {
  components: {
    Header,
    Aside
  }
}
</script>

<style>


.common-layout {
  width: 100%;
}
.el-main{
  padding: 0;
  margin: 0;
}
.el-container{
  margin: 10px 10px;
}
</style>