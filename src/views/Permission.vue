<template>
  <div class="permission-box">
    <!-- 头部 -->
    <div class="permission-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <div class="permission-box">
            <el-icon>
              <WarningFilled />
            </el-icon>
            <span>权限测试</span>
          </div>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="permission-container">
      <div class="permission">
        <h1 class="permission-title">管理员权限测试页面</h1>
        <p>只有用 admin 账号登录的才拥有管理员权限，才能进到这个页面，其他账号想进来都会跳到403页面，重新用管理员账号登录才有权限。</p>
        <p>想尝试一下，请 <router-link to="/login">退出登录</router-link>，随便输入个账号名，再进来试试看。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

.permission-box {
  padding: 10px;
  ;
  background-color: #f0f0f0;

  .permission-title {
    padding: 10px 0;
    width: 100%;
    height: 20px;

    .permission-box {
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

  .permission-container {
    width: 100%;
    background-color: #fff;

    .permission {
      padding: 10px;
      margin: 10px;
      .permission-title{
        text-align: center;
        font-size: 30px;
      }
    }
  }
}
</style>