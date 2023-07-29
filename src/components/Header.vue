<template>
  <a-layout-header class="header">
    <!-- logo and text  -->
    <a href="/" rel="noopener noreferrer">
      <div class="left">
        <img src="../assets/logo.svg" alt="logo" class="logo-img" />
        <h1>
          O‘ZBEKISTON RESPUBLIKASI QISHLOQ XO‘JALIGI VAZIRLIGI HUZURIDAGI
          O‘SIMLIKLAR KARANTINI VA HIMOYASI AGENTLIGI.
        </h1>
      </div>
    </a>
    <!-- center text  -->
    <div class="header-center">
      <p>
        <WarningOutlined class="warning-icon" />
        Sayt test rejimida ishlamoqda.
      </p>
    </div>
    <!-- collacase icon -->
    <div class="menu-icon-wrap" @click="onCollapse()">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        class="menu-icon"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
      </svg>
    </div>
    <!-- logout button -->
    <div class="right">
      <div class="langs">
        <div class="active-lan">UZ</div>
      </div>
      <div class="user">
        <div class="bg"></div>
        <div class="text">
          <div><h2>Plant.Id</h2></div>
        </div>
      </div>
    </div>
  </a-layout-header>
</template>
<script>
//import warning and logout icon from ant design
import { WarningOutlined } from "@ant-design/icons-vue";
import { UsePlantIDStore } from "@/store/plantId";
export default {
  name: "Header",
  components: {
    WarningOutlined,
  },
  methods: {
    // save collapsed state to local storage
    onCollapse() {
      //call setCollapsed from pinia store
      UsePlantIDStore().setCollapsed();
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.header .left {
  width: 320px;
  display: flex;
  align-items: center;
}
.header .left .logo-img {
  margin-right: 12px;
  width: 68px;
}
.header .left h1 {
  color: #036323;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 18px;
  margin: 0;
  text-transform: uppercase;
  width: 240px;
}

.header .header-center {
  align-items: center;
  display: flex;
}
.header .warning-icon {
  color: #d71b1b;
  font-size: 24px;
  margin-right: 5px;
  margin-top: -2px;
}
.header .header-center p {
  color: #d71b1b;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 100%;
  margin: 0;
}

.header .menu-icon-wrap {
  border-radius: 8px;
  cursor: pointer;
  display: grid;
  height: 36px;
  left: 350px;
  place-content: center;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  transition: 0.3s;
  width: 36px;
}
.header .menu-icon-wrap:hover {
  background-color: #f0f0f0;
}
.header .menu-icon {
  color: #036323;
  font-size: 32px;
}
.header .right {
  align-items: center;
  display: flex;
}
.header .right .langs {
  display: flex;
  margin-right: 46px;
}
.header .right .user {
  align-items: center;
  cursor: pointer;
  display: flex;
}
.header .right .user .bg {
  background-image: url("https://cabinet.karantin.uz/static/media/user-circle.111cd76460df049b09fd.svg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 36px;
  margin-right: 5px;
  width: 36px;
}
.header .right .user .text {
  color: #036323;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  letter-spacing: 0.02em;
  line-height: 100%;
  margin: 0;
}
</style>
