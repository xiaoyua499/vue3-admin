<template>
  <div class="header">
    <div class="header-left">
      <!-- 侧边栏伸缩按钮 -->
      <el-button @click="stretching">
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
        <img src="../assets/img/img.jpg" alt="">
      </div>
      <div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link user-name">
            admin
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <a href="https://github.com/xiaoyua499/vue3-admin">
                <el-dropdown-item>项目仓库</el-dropdown-item>
              </a>
              <el-dropdown-item>
                个人中心
              </el-dropdown-item>
              <el-dropdown-item @click="goLogin">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
// import { useRoute } from 'vue-router';
import { mapMutations, mapState } from 'vuex';
import router from '../router';


export default {
  setup() {
    // const router = useRoute()
    const goLogin = () => {
      router.push('/login')
    }
    return {
      router,
      goLogin
    }
  },
  methods: {
    ...mapMutations('home', ['updataStretch']),
    stretching() {
      this.updataStretch()
    },


  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  padding: 0;
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

  .el-icon {
    color: #fff;
  }

  .user-name {
    color: #fff;
  }


  .block {
    margin: 5px;

    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
  }

}
</style>
