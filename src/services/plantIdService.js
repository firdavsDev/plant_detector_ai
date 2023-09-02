// more: https://documenter.getpostman.com/view/24599534/2s93z5A4v2

import service from "./index.js";
//img top base64 convert function
async function convertImgToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // FileReader onload event will be triggered once the file is read.
    reader.onload = () => {
      resolve(reader.result); // This is the base64 encoded image data
    };

    // FileReader onerror event will be triggered if there's an error reading the file.
    reader.onerror = (error) => {
      reject(error);
    };

    // Read the file as a data URL (base64 encoded)
    reader.readAsDataURL(file);
  });
}

const PlantIdService = {
  async UploadImage(fileList) {
    let newFileList = [];
    for (let i = 0; i < fileList.value.length; i++) {
      let base64 = await convertImgToBase64(fileList.value[i]);
      newFileList.push(base64);
    }
    const formData = new FormData();
    formData.append("images", newFileList);
    // formData.append("latitude", "49.207");
    // formData.append("longitude", "16.608");
    formData.append("similar_images", true);
    formData.append("health", "all");
    const data = {
      images: newFileList,
      // latitude: "49.207",
      // longitude: "16.608",
      similar_images: true,
      health: "all",
    };
    const headers = {
      "Content-Type": "application/json",
      // get from .env file
      "Api-Key": "bJqxVawVK1OQwge30KwPtoUTea79woOu574GMeR6yQUt8jRCus",
    };
    return new Promise((resolve, reject) => {
      service
        .post("/identification", data, {
          headers: headers,
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default PlantIdService;
