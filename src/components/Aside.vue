<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="stretch" @open="handleOpen" @close="handleClose">
    <div v-for="item in items" :key="items.index">
      <el-menu-item :index="item.index" v-if="!item.subs" @click="goRouter(item.index)">
        <el-icon>
          <component :is="item.icon" />
        </el-icon>
        <span v-show="!stretch">{{ item.title }}</span>
      </el-menu-item>
      <div v-else>
        <el-sub-menu :index="item.index">
          <template #title>
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span v-show="!stretch">{{ item.title }}</span>
          </template>
          <div v-for="item2 in item.subs" :key="item2.index">
            <el-menu-item-group v-if="!item2.subs" @click="goRouter(item2.index)">
              <el-menu-item :index="item2.index" v-if="!item2.subs">{{ item2.title }}</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu :index="item2.index" v-else>
              <template #title>{{ item2.title }}</template>
              <el-menu-item :index="item3.index" v-for="item3 in item2.subs" @click="goRouter(item3.index)">{{
                item3.title }}</el-menu-item>
            </el-sub-menu>
          </div>
        </el-sub-menu>
      </div>
    </div>
  </el-menu>
</template>

<script>
import { computed, onMounted } from 'vue';
import { mapState, useStore } from 'vuex';
import router from '../router';
export default {
  setup() {
    const items = [
      {
        icon: "HomeFilled",
        index: "/",
        title: "系统首页",
      },
      {
        icon: "Grid",
        index: "/table",
        title: "基础表格",
      },
      {
        icon: "DocumentCopy",
        index: "/tabs",
        title: "tab选项卡",
      },
      {
        icon: "List",
        index: "3",
        title: "表单相关",
        subs: [
          {
            index: "/form",
            title: "基本表单",
          },
          {
            index: "/upload",
            title: "文件上传",
          },
          {
            index: "4",
            title: "三级菜单",
            subs: [
              {
                index: "/editor",
                title: "富文本编辑器",
              },
            ],
          },
        ],
      },
      {
        icon: "WarningFilled",
        index: "7",
        title: "错误处理",
        subs: [
          {
            index: "/permission",
            title: "权限测试",
          },
          {
            index: "/404",
            title: "404页面",
          },
        ],
      },
    ];
    const goRouter = (index)=>{
      router.push(index)
      // console.log(index);
    }
    const handleOpen = (key, keyPath) => {
      // console.log(key)
      // const item = items.filter(item => item.index === key)
      // console.log(item.subs);

    }
    const handleClose = (key, keyPath) => {
      // console.log(key, keyPath)
    }
    return {
      items,
      handleOpen,
      handleClose,
      goRouter
    }
  },
  computed: {
    ...mapState('home', ['stretch'])
  }

}
</script>

<style scoped>
.el-menu {
  margin-top: 10px;
}
span{
  margin-right: 70px;
}
</style>