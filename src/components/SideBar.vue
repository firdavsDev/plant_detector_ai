<template>
  <a-layout-sider
    width="200"
    :style="{ background: '#fff' }"
    v-model:collapsed="collapsed"
    :trigger="null"
    collapsible
  >
    <a-menu
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      mode="inline"
      :style="{ borderRight: 0, marginTop: '16px' }"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <MenuFoldOutlined />
          Menyu
        </template>
        <a-menu-item key="1">
          <router-link to="/">
            <qrcode-outlined />
            O'simlikni aniqlash
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/help">
            <paper-clip-outlined />
            Yo'riqnomalar
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import {
  MenuFoldOutlined,
  QrcodeOutlined,
  PaperClipOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import { UsePlantIDStore } from "@/store/plantId";

export default defineComponent({
  name: "SideBar",
  components: {
    MenuFoldOutlined,
    QrcodeOutlined,
    PaperClipOutlined,
  },
  data() {
    return {
      selectedKeys: ref(["1"]),
      openKeys: ref(["sub1"]),
    };
  },
  computed: {
    collapsed: {
      get() {
        return UsePlantIDStore().collapsed;
      },
    },
  },
});
</script>
