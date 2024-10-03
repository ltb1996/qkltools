<script setup lang="ts">
import { useStyleStore } from '@/stores/style.store';

const styleStore = useStyleStore();
const { isMenuCollapsed, isSmallScreen } = toRefs(styleStore);
const siderPosition = computed(() => (isSmallScreen.value ? 'absolute' : 'static'));
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="0"
      :width="240"
      :collapsed="isMenuCollapsed"
      :show-trigger="false"
      :native-scrollbar="false"
      :position="siderPosition"
    >
      <slot name="sider" />
    </n-layout-sider>
    <n-layout class="content">
      <div class="name">
        <div>
          <span class="xueyuanname">三亚学院盛宝金融科技商学院-------区块链工程</span>
          <span class="word">-------IT-tools</span>
        </div>
        <img src="../assets/logo1.png" alt="" class="logo">
      </div>
      <slot name="content" />
      <div v-show="isSmallScreen && !isMenuCollapsed" class="overlay" @click="isMenuCollapsed = true" />
    </n-layout>
  </n-layout>
</template>

<style lang="less" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  cursor: pointer;
}

.content {
  // background-color: #f1f5f9;
  ::v-deep(.n-layout-scroll-container) {
    padding: 26px;
  }
  .name {
    // width: 1500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .xueyuanname {
      font-size: 24px;
      color:dimgrey;
      font-weight: bold;
      // margin-right: 30px;
    }
    .word {
      font-size: 24px;
      color:dimgrey;
      font-weight: bold;
    }
    .logo {
      width: 300px;
    }
  }
}

.n-layout {
  height: 100vh;
}
</style>
