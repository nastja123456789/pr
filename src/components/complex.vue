<template>
<div class="complex-list">
  <div class="text-uppercase text-center h1">Комплексный обед - 120 рублей</div>
    <div class="mb-3 text-center h2">С 11:30 до 16:00</div>

  <ul v-for="i in complex" :key="i" class="list-group col-md-4 m-auto" id="complex-ul">

      <li class="list-group-item d-flex justify-content-between align-items-center h1">{{i.weight}}</li>
        <span class="badge badge-dark badge-pill h3">{{i.name}}</span>
  </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "complex",
  data() {
    return {
      data: [],
      complex:""
    }
  },
  mounted() {
    axios
        .get('http://192.168.255.133/api/food')
    //    .then(response => (this.data = response.data.menu));
        .then(response => (this.complex = response.data.complex));
        //.then(response => (this.data = response.data.complex));
  },
}
</script>

<style>
#complex-ul{
  width: 70%;
  max-width: 70%;
}
#complex-list{
  display: table-cell;
  width: 100vw;
  padding-top: 10vh;
}

</style>