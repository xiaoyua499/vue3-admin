<template>
  <div class="table-box">
    <!-- 头部 -->
    <div class="table-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <div class="title-box">
            <el-icon>
              <Grid />
            </el-icon>
            <span>基础表格</span>
          </div>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 表格 -->
    <div class="table-container">
      <div class="table-top">
        <el-select v-model="value" class="m-2 table-select" placeholder="地址" size="large">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-input v-model="input2" class="table-input" placeholder="用户名" :prefix-icon="Search" />
        <el-button type="primary" class="table-buttom">
          <el-icon>
            <Search />
          </el-icon>搜索
        </el-button>
        <el-button type="success" text @click="handleDelet(scope.$index)">
          <el-icon>
            <CirclePlusFilled />
          </el-icon>
          添加
        </el-button>
      </div>
      <div class="table">
        <el-table :data="tableData" border style="width: 100%;">
          <el-table-column label="ID" type="index" />
          <el-table-column prop="name" label="用户名" width="100" />
          <el-table-column prop="balance" label="账户余额" width="100">
            <template #default="scope">
              ￥{{ scope.row.balance }}
            </template>
          </el-table-column>
          <el-table-column prop="address" label="头像" />
          <el-table-column prop="address" label="地址" />
          <el-table-column prop="address" label="状态" width="100">
            <template #default="scope">
              <el-tag class="ml-2"
                :type="scope.row.state === '成功' ? 'success' : scope.row.state === '失败' ? 'danger' : ''">
                {{ scope.row.state }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="time" label="注册时间" width="150" />
          <el-table-column label="操作">
            <template #default="scope">
              <el-button type="primary" icon="Edit" text @click="handleEdit(scope.$index, scope.row)">
                编辑
              </el-button>
              <el-button type="danger" icon="Delete" text @click="handleDelet(scope.$index)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 提示框 -->
    <el-dialog v-model="dialogVisible" title="编辑" width="30%" :before-close="handleClose">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="from.name" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="from.address" placeholder="请输入地址" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="getEdit">确 认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
import { mapMutations, mapState } from 'vuex'
import { ElMessage, ElMessageBox } from "element-plus";
export default {
  setup() {
    const value = ref('')
    const input2 = ref('')
    const dialogVisible = ref(false)
    let from = reactive({
      name: "",
      address: ""
    })
    let idx = -1;

    const options = [
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
    ]
    return {
      value,
      options,
      input2,
      dialogVisible,
      from,
      idx
    }
  },
  computed: {
    ...mapState('table', ['tableData'])
  },
  methods: {
    ...mapMutations('table', ['updataTableData']),
    //删除对应行的数据
    handleDelet(index) {
      this.tableData.splice(index, 1)
    },
    //获取编辑按钮对应的行与数据
    handleEdit(index, row) {
      this.idx = index
      Object.keys(this.from).forEach((item) => {
        this.from[item] = row[item]
      })
      // console.log(this.from);
      this.dialogVisible = true;
    },
    //提交from表单
    getEdit() {
      Object.keys(this.from).forEach((item) => {
        this.tableData[this.idx][item] = this.from[item]
      })

      this.updataTableData(this.tableData)
      // console.log(this.from);
      this.dialogVisible = false

    }
  }
}
</script>

<style lang="less" scoped>
.table-box {
  padding: 10px;
  ;
  background-color: #f0f0f0;

  .table-title {
    padding: 10px 0;
    width: 100%;
    height: 20px;

    .title-box {
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

  .table-container {
    width: 100%;
    background-color: #fff;

    .table-top {
      padding: 10px;

      .table-select {
        width: 100px;
      }

      .table-input {
        width: 300px;
        height: 40px;
      }

      .table-buttom {
        height: 40px;
      }
    }

    .table {
      padding: 10px;
    }
  }
}
</style>