import { defineStore } from "pinia";
import PlantIdService from "../services/plantIdService.js";
// import router from "../router/index.js";
import router from "@/router/index.js";

export const UsePlantIDStore = defineStore("plantId", {
  //state
  state: () => ({
    collapsed: false,
    response_images: {},
    is_loading: false,
  }),
  // getters
  getters: {
    getCollapsed: (state) =>
      //get from localstorage if not exist return false
      localStorage.getItem("collapsed") || state.collapsed,
    // getResponseImages: (state) => localStorage.getItem("response_images"),
    getResponseImages: (state) => state.response_images,
  },

  // actions
  actions: {
    setCollapsed() {
      //set to localstorage
      this.collapsed = !this.collapsed;
      localStorage.setItem("collapsed", !this.collapsed);
    },

    set_loading(value) {
      this.is_loading = value;
    },

    async UploadImage(fileList) {
      PlantIdService.UploadImage(fileList)
        .then((res) => {
          //save to store response_images
          this.response_images = res.data;
          //clear localstorage response_images
          localStorage.removeItem("response_images");
          //save to localstorage response_images
          localStorage.setItem("response_images", JSON.stringify(res.data));
          //redirect to response page
          router.push({ name: "response" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
