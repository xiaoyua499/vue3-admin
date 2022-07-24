<script setup>

</script>

<template>
  <div class="header">
    <div class="header-left">
      <el-button>
        <el-icon>
          <Menu />
        </el-icon>
      </el-button>
      <h1 class="title">后台管理系统</h1>
    </div>
    <div class="heder-right">
      <el-icon>
        <Bell />
      </el-icon>
      <div class="block">
        <el-avatar :size="50" :src="circleUrl" />
      </div>
      <span class="user-name">admin</span>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 10px; */
  width: 100%;
  height: 70px;
  background-color: #242f42;
}

.title {
  display: inline;
  font-size: 20px;
  color: #fff;
}

.header-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}

.header-left .el-button {
  margin: 10px;
}

.heder-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}

.heder-right .el-icon {
  color: #fff;
}

.heder-right .user-name {
  color: #fff;
}

.heder-right .block {
  margin: 5px;
}
</style>
