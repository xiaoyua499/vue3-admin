<template>
  <div class="from-box">
    <!-- 头部 -->
    <div class="from-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <div class="from-box">
            <el-icon>
              <List />
            </el-icon>
            <span>表格/基本表单</span>
          </div>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 表单部分 -->
    <div class="from-container">
      <el-form :model="form" label-width="120px" :rules="rules" ref="fromRef">
        <el-form-item label="表单名称" class="name" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="选择器">
          <el-select v-model="form.region" placeholder="please select your zone">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="日期/时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%" />
          </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%" />
          </el-col>
        </el-form-item>
        <el-form-item label="选择开关">
          <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="多选框">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="Online activities" name="type" />
            <el-checkbox label="Promotion activities" name="type" />
            <el-checkbox label="Offline activities" name="type" />
            <el-checkbox label="Simple brand exposure" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="单选框">
          <el-radio-group v-model="form.resource">
            <el-radio label="Sponsor" />
            <el-radio label="Venue" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文本框">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">表单提交</el-button>
          <el-button @click="unSubmit">重置表单</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { ElMessage } from "element-plus";
export default {
  setup() {

    const rules = {
      name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
    }
    const fromRef = ref(null)
    const form = reactive({
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    })
    const onSubmit = () => {
      // console.log('submit!')
      fromRef.value.validate((valid) => {
        // console.log(valid);
        if (valid) {
          console.log(form);
          ElMessage.success("提交成功！");
        } else {
          console.log('提交失败');
          return false
        }

      })
    }
    //重置表单
    const unSubmit = () => {
      fromRef.value.resetFields()
    }

    return {
      form,
      onSubmit,
      rules,
      unSubmit,
      fromRef
    }
  }
}
</script>

<style lang="less" scoped>
.from-box {
  padding: 10px;
  ;
  background-color: #f0f0f0;

  .from-title {
    padding: 10px 0;
    width: 100%;
    height: 20px;

    .from-box {
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

  .from-container {
    width: 100%;
    background-color: #fff;

    .el-form {
      padding: 10px;
      margin: 10px;

      .el-form-item {
        margin: 30px;
      }

      .name {
        width: 500px;
        height: 30px;
      }
    }
  }
}
</style>