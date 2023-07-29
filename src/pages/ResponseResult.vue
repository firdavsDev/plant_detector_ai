<template>
  <!-- response images -->
  <div style="margin-top: 30px" v-if="response_images['input']">
    <a-button type="primary" @click="$router.push('/')">
      <LeftOutlined />
      Orqaga
    </a-button>
    <!-- center image here -->
    <div style="display: flex; justify-content: center">
      <img
        :src="response_images['input']['images'][0]"
        alt="plant"
        style="width: 30%; height: 30%"
      />
    </div>
    <!-- Uxshash rasmlar -->
    <div style="padding: 20px">
      <h1 style="font-size: 20px">O'xshashlik (nomlari):</h1>
      <a-row :gutter="12">
        <a-col
          :span="4"
          :key="image.id"
          v-for="image in response_images['result']['classification'][
            'suggestions'
          ]"
        >
          <a-card hoverable style="width: 200px">
            <template #cover>
              <a-image-preview-group>
                <a-image
                  alt="example"
                  :src="s_img['url']"
                  :key="s_img.id"
                  v-for="s_img in image['similar_images']"
                />
              </a-image-preview-group>
            </template>
            <a-card-meta
              :title="
                'O\'xshashlik: ' + Math.round(image['probability'] * 100) + '%'
              "
              :description="'Nomi: ' + image['name']"
            >
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <!-- Kassaliklar rasmlar -->
    <div style="padding: 20px">
      <h1 style="font-size: 20px">Kassaliklar (nomlari):</h1>
      <a-row :gutter="12">
        <a-col
          :span="4"
          :key="disease.id"
          v-for="disease in response_images['result']['disease']['suggestions']"
        >
          <a-card hoverable style="width: 200px">
            <!-- <template #cover>
              <img
                alt="example"
                :src="image."
              />
            </template> -->
            <a-card-meta
              :title="
                'O\'xshashlik: ' +
                Math.round(disease['probability'] * 100) +
                '%'
              "
              :description="'Tavsif: ' + disease['name']"
            >
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>

  <div style="margin-top: 50px display: flex; justify-content: center" v-else>
    <a-button type="primary" @click="$router.push('/')">
      <LeftOutlined />
      Orqaga
    </a-button>
    <div style="display: grid; place-content: center">
      <h1 style="font-size: 20px">
        Rasm yuklashni tugatib, natijani ko'rish uchun yana bir rasm yuklang!
      </h1>
    </div>
  </div>
</template>
<script>
import { UsePlantIDStore } from "@/store/plantId";
// import back icon from ant design
import { LeftOutlined } from "@ant-design/icons-vue";
export default {
  name: "ResponseResult",
  data() {
    return {
      response_images: UsePlantIDStore().getResponseImages,
    };
  },
  components: {
    LeftOutlined,
  },
};
</script>
