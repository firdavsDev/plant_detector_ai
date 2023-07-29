<template>
  <a-layout :style="{ minHeight: '100vh', marginTop: '110px' }">
    <!-- header -->
    <Header />
    <!-- sidebar -->
    <SideBar />
    <!-- content -->
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Rasm yuklash</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import SideBar from "../components/SideBar.vue";
import Header from "../components/Header.vue";
export default {
  name: "HomeView",
  components: {
    SideBar,
    Header,
  },
};
</script>
