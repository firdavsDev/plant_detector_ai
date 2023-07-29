<template>
  <div style="display: grid; place-content: center">
    <h1>Videoda barcha tushuntirilgan! <YoutubeOutlined /></h1>
    <!-- // youtube video link here -->
    <iframe
      width="800"
      height="500"
      src="https://www.youtube-nocookie.com/embed/Peg7k_OvH2o"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script>
//import youtube icon from ant design
import { YoutubeOutlined } from "@ant-design/icons-vue";
export default {
  name: "Help",
  components: {
    YoutubeOutlined,
  },
};
</script>
