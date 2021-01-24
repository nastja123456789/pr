<template>

  <div >

    <h v-for="i in news.data" :key="i">
      <p class="news-slides-content">{{i["title"]}}</p>

    <img class="slider-img" v-bind:src="i['img']" >
      <br/>
      <a v-bind:href="i['link']">{{i["link"]}}</a>
      <p class="news-slides-content">{{i["text"]}}</p>

    </h>
    <p></p>

  </div>


</template>

<script>
import axios from "axios";

export default {
name: "news",
  data() {
    return {
      news: []
    }
  },
  mounted() {
    axios
        .get('http://192.168.255.133/api/news')
        .then(response => (this.news = response));

  },
}
</script>

<style>

</style>