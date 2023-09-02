import axios from "axios";
import { message } from "ant-design-vue";
import { UsePlantIDStore } from "../store/plantId";

const service = axios.create({
  baseURL: "https://plant.id/api/v3",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

service.interceptors.response.use((response) => {
  if (response.status === 200 || response.status === 201) {
    message.success("Muvaffaqiyatli bajarildi!");
  } else {
    message.error("Xatolik yuz berdi!");
  }
  return response;
});

// set loading true before request is sent and false after response is received or error
service.interceptors.request.use((config) => {
  UsePlantIDStore().set_loading(true);
  return config;
});

service.interceptors.response.use((response) => {
  UsePlantIDStore().set_loading(false);
  return response;
});
export default service;
