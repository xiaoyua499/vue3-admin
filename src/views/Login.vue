<template>
  <div class="login-box">
    <div class="login-main">
      <div class="login-title">后台管理系统</div>
      <div class="login-center">
        <el-form :model="formLabelAlign" :rules="rules">
          <el-form-item>
            <div class="from-box">
              <el-icon>
                <User />
              </el-icon>
              <el-input v-model="formLabelAlign.name" clearable placeholder="请输入用户名" />
            </div>
          </el-form-item>
          <el-form-item prop="password">
            <div class="from-box">
              <el-icon>
                <Lock />
              </el-icon>
              <el-input v-model="formLabelAlign.password" type="password" show-password placeholder="请输入密码" />
            </div>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="isLogin">登录</el-button>
      </div>
      <div class="login-bottom">Tips : 用户名和密码随便填。</div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import router from '../router'
import { mapMutations, mapState } from 'vuex'
export default {
  setup() {
    const formLabelAlign = reactive({
      name: 'admin',
      password: '123456',
    })

    return {
      formLabelAlign,
    }
  },
  methods: {
    ...mapMutations('login', ['updataUser']),
    isLogin() {
      if (this.formLabelAlign.name !== '' && this.formLabelAlign.password !== '') {
        sessionStorage.setItem('name', this.formLabelAlign.name)
        this.updataUser(this.formLabelAlign)
        router.push('/')
      } else {
        alert('用户名或密码不能为空！！')
      }
    }
  },

}
</script>

<style lang="less" scoped>
.login-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;

  .login-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 350px;
    height: 350px;
    background: rgba(255, 255, 255, 0.3);

    .login-title {
      padding-bottom: 20px;
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 20px;
      border-bottom: 1px solid #fff;
    }

    .login-center {
      .el-button {
        width: 100%;
        height: 35px;
      }

      .el-form-item {

        .from-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .el-icon {
          width: 70px;
          height: 35px;
          background-color: #f5f7fa;
          border-radius: 3px;
        }

        .el-input {
          height: 35px;
          width: 220px;
        }
      }
    }

    .login-bottom {
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>