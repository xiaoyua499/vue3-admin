<template>
  <div class="editor-box">
    <!-- 头部 -->
    <div class="editor-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <div class="editor-box">
            <el-icon>
              <List />
            </el-icon>
            <span>富文本编辑器</span>
          </div>
        </el-breadcrumb-item>
      </el-breadcrumb>

    </div>
    <div class="editor-container">
      <div style="border: 1px solid #ccc" class="editor">
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
          :mode="mode" />
        <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
          :mode="mode" @onCreated="handleCreated" />
      </div>
    </div>
  </div>
</template>

<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default {
  components: { Editor, Toolbar },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()

    // 内容 HTML
    const valueHtml = ref('<p>hello</p>')

    // 模拟 ajax 异步获取内容
    onMounted(() => {
      setTimeout(() => {
        valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
      }, 1500)
    })

    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容...' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value
      if (editor == null) return
      editor.destroy()
    })

    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }

    return {
      editorRef,
      valueHtml,
      mode: 'default', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated
    };
  }
}
</script>

<style lang="less" scoped>
.editor-box {
  padding: 10px;
  ;
  background-color: #f0f0f0;

  .editor-title {
    padding: 10px 0;
    width: 100%;
    height: 20px;

    .editor-box {
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

  .editor-container {
    width: 100%;
    background-color: #fff;

    .editor {
      padding: 10px;
      margin: 10px;
    }
  }
}
</style>