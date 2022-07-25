<template>
  <div class="home-box">
    <el-row :gutter="20" class="el-row-top" style="margin-left: 0; margin-right: -10px;">
      <el-col :span="8" class="el-top-left">
        <el-card shadow="hover" class="user">
          <div class="user-top">
            <img src="../assets/img/img.jpg" alt="">
            <div class="user-top-right">
              <h1 class="name">admin</h1>
              <span>超级管理员</span>
            </div>
          </div>
          <div class="user-bottom">
            <p><span>上次登录时间：</span> <span>2022-7-25</span></p>
            <p><span>上次登录地点：</span> <span>沈阳</span></p>
          </div>
        </el-card>
        <el-card shadow="hover" class="Language">
          <template #header>
            <div>
              <span>语言详情</span>
            </div>
          </template>
          Vue
          <el-progress :percentage="71.3" color="#42b983"></el-progress>JavaScript
          <el-progress :percentage="24.1" color="#f1e05a"></el-progress>CSS
          <el-progress :percentage="13.7"></el-progress>HTML
          <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16" class="el-top-right">
        <el-row :gutter="20" class="el-top-right-top">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <div class="grid-box">
              <div class=" icon">
                <el-icon :size="50" color="#fff">
                  <UserFilled />
                </el-icon>
              </div>
              <div class="grid">
                <h2>1234</h2>
                <span>用户访问量</span>
              </div>
            </div>
          </el-card>
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <div class="grid-box">
              <div class=" icon">
                <el-icon :size="50" color="#fff">
                  <BellFilled />
                </el-icon>
              </div>
              <div class="grid">
                <h2>321</h2>
                <span>系统消息</span>
              </div>
            </div>
          </el-card>
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <div class="grid-box">
              <div class=" icon">
                <el-icon :size="50" color="#fff">
                  <GoodsFilled />
                </el-icon>
              </div>
              <div class="grid">
                <h2>5000</h2>
                <span>数量</span>
              </div>
            </div>
          </el-card>
        </el-row>
        <el-row :gutter="20" class="el-top-right-bottom">
          <el-card shadow="hover">
            <template #header>
              <div class="clearfix">
                <span>待办事项</span>
                <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
              </div>
            </template>
            <el-table :show-header="false" :data="tableData" style="width: 100%">
              <el-table-column width="55">
                <template #default="scope">
                  <el-checkbox v-model="scope.row.status"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column>
                <template #default="scope">
                  <div class="todo-item" :class="{
                    'todo-item-del': scope.row.status,
                  }">{{ scope.row.address }}</div>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="el-row-bottom" style="margin-left: 0; margin-right: -10px;">
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <div class="about" id="main"></div>
      </el-card>
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <div class="about" id="main2"></div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  setup() {
    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        status: false
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        status: false
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        status: false
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        status: false
      },
    ]

    return {
      tableData,
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = this.$echarts.init(document.getElementById("main"));
    // 绘制图表
    myChart.setOption({
      title: {
        text: "最近一周各品类销售图",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
    var myChart2 = this.$echarts.init(document.getElementById("main2"));
    // 绘制图表
    myChart2.setOption({
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {},
      series: [
        {
          data: [10, 22, 28, 43, 49],
          type: 'line',
          stack: 'x'
        },
        {
          data: [5, 4, 3, 5, 10],
          type: 'line',
          stack: 'x'
        }
      ]
    });
  },
}
</script>

<style lang="less" scoped>
#main {
  margin-top: 50px;
  margin-left: 10px;
  background-color: #fff;
  width: 100%;
  height: 230px;
}

#main2 {
  margin-top: 50px;
  margin-left: 10px;
  background-color: #fff;
  width: 100%;
  height: 230px;
}

.home-box {
  background-color: #f0f0f0;
  box-sizing: border-box;

  .el-row-top {
    height: 528px;

    .el-top-left {
      .user {
        margin-bottom: 10px;
        // height: 250px;
        background-color: #fff;

        .user-top {
          display: flex;
          // justify-content: space-around;
          align-items: center;
          width: 95%;
          height: 150px;
          border-bottom: 2px solid #cccccc;
          margin: 0 10px;

          img {
            border-radius: 50%;
            margin: 0 50px 0 20px;
          }

          .user-top-right {
            display: flex;
            flex-direction: column;
            // align-items: center;
            justify-content: center;


            .name {
              font-size: 30px;
              font-weight: 400;
              margin: 0;
            }

            span {
              font-size: 14px;
              color: #999999;
            }
          }

        }

        .user-bottom {
          display: flex;
          flex-direction: column;
          justify-content: center;
          // align-items: center;
          margin-left: 25px;
          height: 100px;
          width: 100%;
          // text-align: center;
          // line-height: 100px;

          p {
            margin: 0;

            span {
              margin-right: 70px;
              color: #999999;
              font-size: 14px;
            }
          }
        }
      }

      .Language {
        height: 250px;
        background-color: #fff;
      }
    }

    .el-top-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .el-top-right-top {
        .grid-box {
          display: flex;
          align-items: center;

          .icon {
            width: 100px;
            height: 100px;
            background-color: #2d8cf0;
            text-align: center;

            .el-icon {
              margin: 25px;
            }
          }


          .grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 170px;

            h2 {
              display: inline-block;
              margin: 0;
              font-size: 30px;
              color: #2d8cf0;
            }

            span {
              font-size: 14px;
              color: #999999;
            }
          }
        }

        .el-card:nth-child(2) {
          .grid-box {
            .icon {
              background-color: #64d572;
            }

            h2 {
              color: #64d572;
            }
          }
        }

        .el-card:nth-child(3) {
          .grid-box {
            .icon {
              background-color: #f25e43;
            }

            h2 {
              color: #f25e43;
            }
          }
        }

      }

      .el-top-right-bottom {
        .el-card {
          height: 425px;
          width: 100%;
        }

      }
    }
  }

  .el-row-bottom {
    display: flex;
    justify-content: space-between;

    .el-card {
      background-color: #fff;
      width: 600px;
      // height: 500px;
      // height: 270px;
      margin: 50px 20px 20px 10px;
    }
  }
}

.el-row {
  margin-left: 0;
  width: 100%;
  // margin-bottom: 10px;
}

.el-col {
  padding: 10px;
}



.el-row-bottom {
  height: 342px;
}



.el-top-right .el-top-right-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
}

.el-top-right .el-top-right-top .el-card {
  height: 100px;
  width: 270px;
  background-color: #fff;
}

.el-top-right-bottom .el-col {
  margin-top: 20px;
  height: 434px;
  background-color: #fff;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}
</style>