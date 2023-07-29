<template>
  <div class="top">
    <div class="top-left">
      <div class="top-left-text">
        <h1 style="font-size: 20px">
          O'simlikni aniqlash
          <qrcode-outlined></qrcode-outlined>
        </h1>
      </div>
    </div>
    <div class="top-right">
      <div class="top-right-text">
        <img
          src="../assets/plant.webp"
          alt="plant"
          style="width: 100px; height: 100px; border-radius: 50%"
        />
      </div>
    </div>
  </div>
  <!-- uploader div  -->
  <div class="uploader">
    <a-upload
      :file-list="fileList"
      :before-upload="beforeUpload"
      @remove="handleRemove"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        Select File
      </a-button>
    </a-upload>
    <a-button
      type="primary"
      :disabled="fileList.length === 0"
      :loading="uploading"
      style="margin-top: 16px"
      @click="handleUpload"
    >
      {{ uploading ? "Uploading" : "Start Upload" }}
    </a-button>
  </div>
</template>

<script>
import { ref } from "vue";
import { UploadOutlined, QrcodeOutlined } from "@ant-design/icons-vue";
import { UsePlantIDStore } from "@/store/plantId";

const fileList = ref([]);
const uploading = ref(false);
const handleRemove = (file) => {
  const index = fileList.value.indexOf(file);
  const newFileList = fileList.value.slice();
  newFileList.splice(index, 1);
  fileList.value = newFileList;
};
const beforeUpload = (file) => {
  fileList.value = [...(fileList.value || []), file];
  return false;
};

const handleUpload = () => {
  uploading.value = true;
  //call funcion from pinia store
  UsePlantIDStore()
    .UploadImage(fileList)
    .then(() => {
      fileList.value = [];
      uploading.value = false;
    });
};

export default {
  name: "UploadImage",
  components: {
    UploadOutlined,
    QrcodeOutlined,
  },
  setup() {
    return {
      fileList,
      uploading,
      handleRemove,
      beforeUpload,
      handleUpload,
    };
  },
};
</script>

<style scoped>
.uploader {
  display: grid;
  place-content: center;
  margin-top: 50px;
}
.top {
  align-items: center;
  border-bottom: 2px solid #00000010;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
}
.top-left {
  display: flex;
  align-items: center;
}
.top-left-text {
  margin-left: 20px;
}
.top-right {
  display: flex;
  align-items: center;
}
.top-right-text {
  margin-right: 20px;
}
</style>
