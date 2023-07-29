import axios from "axios";
import { message } from "ant-design-vue";

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

export default service;
