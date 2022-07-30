<template>
  <div class="user-box">
    <el-row>
      <el-col :span="12">
        <div class="user-left">
          <el-card shadow="hover">
            <h1 class="title">基本信息</h1>
            <div class="user-top">
              <img src="../assets/img/img.jpg" alt="">
              <h1 class="name">{{ user.name }}</h1>
              <h2>{{ user.About }}</h2>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="user-right">
          <el-card shadow="hover">
            <h1 class="title">账户编辑</h1>
            <div class="user-from">
              <el-form :model="users" label-position="right" label-width="100px" >
                <el-form-item label="用户名">
                  <el-input v-model="users.name" clearable placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item label="旧密码">
                  <el-input v-model="users.oldPassword" type="password" show-password placeholder="请输入旧密码" />
                </el-form-item>
                <el-form-item label="新密码">
                  <el-input v-model="users.newPassword" type="password" show-password placeholder="请输入新密码" />
                </el-form-item>
                <el-form-item label="个人简介">
                  <el-input v-model="users.About" clearable />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="store">保存</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { mapMutations, mapState } from 'vuex'
export default {
  setup() {
    const users = reactive({
      name: '',
      oldPassword: '',
      newPassword: '',
      About: ''
    })
    
    return {
      users,
    }
  },
  computed: {
    ...mapState('login', ['user'])
  },
  methods: {
    ...mapMutations('login', ['updataUser']),
    //更新用户信息
    store() {
      if (this.users.name !== '') {
        this.updataUser(this.users)
      } else {
        alert('用户名不能为空！！')
        // this.updataUser(this.user)
      }
      

  }

  }
}
</script>

<style lang="less" scoped>
.user-box {
  // width: 100%;
  margin: 20px;

  .user-left {
    margin-right: 10px;

    .title {
      margin: 0;
      padding-bottom: 20px;
      font-size: 20px;
      border-bottom: 1px solid #ccc;
    }

    .user-top {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin: 10px 10px;

      img {
        border-radius: 50%;
      }

      .name {
        font-size: 30px;
        font-weight: 400;
        margin: 0;
      }

      h2 {
        font-size: 14px;
        color: #999999;
      }
    }
  }

  .user-right {
    .title {
      margin: 0;
      padding-bottom: 20px;
      font-size: 20px;
      border-bottom: 1px solid #ccc;
    }

    .user-from {
      margin: 10px;
    }
  }
}
</style>