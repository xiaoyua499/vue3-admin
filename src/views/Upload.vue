<template>
  <div class="upload-box">
    <!-- 头部 -->
    <div class="upload-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <div class="upload-box">
            <el-icon>
              <List />
            </el-icon>
            <span>表格/文件上传</span>
          </div>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="upload-container">
      <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple>
        <el-icon class="el-icon--upload">
          <upload-filled />
        </el-icon>
        <div class="el-upload__text">
          将文件拖到此处，或<em>点击上传</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            只能上传 jpg/png 文件，且不超过 500kb
          </div>
        </template>
      </el-upload>
    </div>
  </div>
</template>

<script>
import { UploadFilled } from '@element-plus/icons-vue'
export default {

}
</script>

<style lang="less" scoped>

.upload-box {
  padding: 10px;
  ;
  background-color: #f0f0f0;

  .upload-title {
    padding: 10px 0;
    width: 100%;
    height: 20px;

    .upload-box {
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

  .upload-container {
    width: 100%;
    background-color: #fff;
    .upload-demo{
      padding: 10px;
      margin: 10px;
    }
  }
}
</style>