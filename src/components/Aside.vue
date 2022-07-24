<template>
  <el-col :span="15">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-menu-item :index="item.index" v-for="item in multilevelMenu" :key="item.index">
        <el-icon>
          <component :is="item.icon" />
        </el-icon>
        <span>{{ item.title }}</span>
      </el-menu-item>
      <el-sub-menu :index="item.index" v-for="item in onMultilevelMenu" :key="item.index">
        <template #title>
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item-group v-for="item2 in item.subs">
          <el-menu-item :index="item2.index">{{ item2.title }}</el-menu-item>
        </el-menu-item-group>
        <!-- <el-sub-menu :index="item2.index" v-for="item2 in item.subs">
          <template #title>{{ item2.title }}</template>
          <el-menu-item :index="item2.subs.index" v-for="item3 in item2.subs">{{ item3.title }}</el-menu-item>
        </el-sub-menu> -->
      </el-sub-menu>
    </el-menu>
  </el-col>
</template>

<script>
import { computed, onMounted } from 'vue';
export default {
  setup() {
    const items = [
      {
        icon: "HomeFilled",
        index: "/dashboard",
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
            subs: false
          },
          {
            index: "/upload",
            title: "文件上传",
            subs: false
          },
          {
            index: "4",
            title: "三级菜单",
            subs: [
              {
                index: "/editor",
                title: "富文本编辑器",
              },
              {
                index: "/markdown",
                title: "markdown编辑器",
              },
            ],
          },
        ],
      },
      {
        icon: "Orange",
        index: "/icon",
        title: "自定义图标",
      },
      {
        icon: "HelpFilled",
        index: "/charts",
        title: "schart图表",
      },
      {
        icon: "Basketball",
        index: "/i18n",
        title: "国际化功能",
      },
      {
        icon: "WarningFilled",
        index: "7",
        title: "错误处理",
        subs: [
          {
            index: "/permission",
            title: "权限测试",
            subs: false
          },
          {
            index: "/404",
            title: "404页面",
            subs: false
          },
        ],
      },
    ];
    const handleOpen = (key, keyPath) => {
      // console.log(key)
      // const item = items.filter(item => item.index === key)
      // console.log(item.subs);

    }
    const handleClose = (key, keyPath) => {
      // console.log(key, keyPath)
    }
    const multilevelMenu = computed(() => {
      return items.filter(item => !item.subs)
    })
    const onMultilevelMenu = computed(() => {
      return items.filter(item => item.subs)
    })
    return {
      items,
      handleOpen,
      handleClose,
      onMultilevelMenu,
      multilevelMenu,
    }
  },


}
</script>

<style scoped>
.el-col {
  margin: 10px;
}
</style>