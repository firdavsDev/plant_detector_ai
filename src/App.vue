<template>
  <router-view></router-view>
  <BaseLoading />
</template>
<script>
import BaseLoading from "./components/BaseLoading.vue";
export default {
  name: "App",
  components: {
    BaseLoading,
  },
};
</script>
