<template>
  <div class="tabs-box">
    <!-- 头部 -->
    <div class="tabs-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <div class="title-box">
            <el-icon>
              <DocumentCopy />
            </el-icon>
            <span>tab选项卡</span>
          </div>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- tabs部分 -->
    <div class="tabs-container">
      <el-tabs tab-position="top" class="demo-tabs">
        <el-tab-pane :label="`未读消息(${state.unread.length})`">
          <div class="unread" v-for="(item, index) in state.unread" :key="index">
            <div class="unread-left">
              <a href="javascript:;">{{ item.data }}</a>
            </div>
            <div class="unread-right">
              <span>{{ item.time }}</span>
              <el-button @click="isUnread(index)">标记为已读</el-button>
            </div>
          </div>
          <el-divider />
          <el-button type="primary" @click="AllisUnread">全部标记为已读</el-button>
        </el-tab-pane>
        <el-tab-pane :label="`已读消息(${state.read.length})`">
          <div class="unread" v-for="(item, index) in state.read" :key="index">
            <div class="unread-left">
              <a href="javascript:;">{{ item.data }}</a>
            </div>
            <div class="unread-right">
              <span>{{ item.time }}</span>
              <el-button type="danger" @click="isRead(index)">删除</el-button>
            </div>
          </div>
          <el-divider />
          <el-button type="danger" @click="AllisRead">全部删除</el-button>
        </el-tab-pane>
        <el-tab-pane :label="`回收站(${state.recycled.length})`">
          <div class="unread" v-for="(item, index) in state.recycled" :key="index">
            <div class="unread-left">
              <a href="javascript:;">{{ item.data }}</a>
            </div>
            <div class="unread-right">
              <span>{{ item.time }}</span>
              <el-button @click="isRecycled(index)">还原</el-button>
            </div>
          </div>
          <el-divider />
          <el-button type="danger" @click="AllisRecycled">清空回收站</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
export default {
  setup() {
    const state = reactive({
      unread: [
        {
          data: '今晚12点整发大红包，先到先得',
          time: '2018-04-19 21:00:00',
        },
        {
          data: '今晚12点整发大红包，先到先得2',
          time: '2018-04-19 21:00:00',
        },
        {
          data: '今晚12点整发大红包，先到先得3',
          time: '2018-04-19 21:00:00',
        },
      ],
      read: [
        {
          data: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
          time: '2018-04-19 21:00:00',
        },
      ],
      recycled: [
        {
          data: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
          time: '2018-04-19 21:00:00',
        },
      ],
    })

    //点击将对应的消息添加到已读
    const isUnread = (index) => {
      const item = state.unread.splice(index, 1);
      // console.log(item);
      state.read = item.concat(state.read);
    }
    //清空未读
    const AllisUnread = () => {
      state.unread.forEach((item) => {
        state.read.push(item)
      })
      state.unread.splice(0, state.unread.length)
    }
    //点击将对应的消息添加到回收站
    const isRead = (index) => {
      const item = state.read.splice(index, 1);
      // console.log(item);
      state.recycled = item.concat(state.recycled);
    }
    //清空已读
    const AllisRead = () => {
      state.read.forEach((item) => {
        state.recycled.push(item)
      })
      state.read.splice(0, state.read.length)
    }
    //点击将对应的消息还原
    const isRecycled = (index) => {
      const item = state.recycled.splice(index, 1);
      // console.log(item);
      state.read = item.concat(state.read);
    }
    //清空已读
    const AllisRecycled = () => {
      state.recycled.forEach((item) => {
        state.read.push(item)
      })
      state.recycled.splice(0, state.read.length)
    }
    return {
      isUnread,
      AllisUnread,
      isRead,
      AllisRead,
      isRecycled,
      AllisRecycled,
      state
    }
  }
}
</script>

<style lang="less" scoped>
.tabs-box {
  padding: 10px;
  ;
  background-color: #f0f0f0;

  .tabs-title {
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

  .tabs-container {
    width: 100%;
    // margin: 10px;
    background-color: #fff;

    .demo-tabs {
      padding: 20px;

      .unread {
        padding: 10px;
        // width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:hover {
          background-color: #f5f7fa;
        }

        .unread-right {
          display: flex;
          align-items: center;

          span {
            margin-right: 20px;
          }

          .el-button {
            margin-right: 20px;
          }
        }
      }

    }
  }
}
</style>