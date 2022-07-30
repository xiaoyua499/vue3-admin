<template>
  <div class="err-box">
    <!-- 头部 -->
    <div class="err-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <div class="err-box">
            <el-icon>
              <WarningFilled />
            </el-icon>
            <span>404</span>
          </div>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="err-container">
      <div class="err">
        <h1 class="title">4<span>0</span>3</h1>
        <p>啊哦~~，你没有访问权限访问该页面！！</p>
        <router-link to="/">
          <el-button type="primary">返回首页</el-button>
        </router-link>
        <el-button type="primary" @click="goBack">返回上一页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.go(-1);
    };
    return {
      goBack,
    };
  },
};
</script>

<style lang="less" scoped>
.err-box {
  padding: 10px;
  ;
  background-color: #f0f0f0;

  .err-title {
    padding: 10px 0;
    width: 100%;
    height: 20px;

    .err-box {
      display: flex;
      align-items: center;

      span {
        font-size: 16px;
      }

      .el-icon {
        font-size: 20px;
      }
    }
  }

  .err-container {
    width: 100%;
    background-color: #fff;

    .err {
      padding: 10px;
      margin: 10px;
      text-align: center;

      .title {
        margin: 0;
        font-size: 200px;
        color: #2d8cf0;

        span {
          color: #00a854;
        }
      }

      p {
        font-size: 30px;
        color: #777777;
      }

      .el-button {
        width: 100px;
        height: 40px;
        margin: 20px;
      }
    }
  }
}
</style>