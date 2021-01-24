<template>
  <div>
    <table class="table mb-3">
      <thead style="background-color:#FFF8E3;">
                        <tr>
      <td colspan="4" align="center">
        <h2>Меню  </h2>
      </td>
      </tr>
      <tr>
        <th scope="col">гр.</th>
        <th scope="col">Наименование</th>
        <th scope="col">Цена</th>
        <th scope="col">Калории</th>
      </tr>

                        <th class="">ХОЛОДНЫЕ ЗАКУСКИ К ОБЕДУ</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <tr v-for="type in data['ХОЛОДНЫЕ ЗАКУСКИ К ОБЕДУ']" :key="type" style="background-color:#4A7FA4;color:white;">
                          <th >{{type.weight}}
                          </th>
                          <th>{{type.name}}</th>
                          <th>{{type.price}}</th>
                          <th>{{type.calories}}</th>
                        </tr>
                        <th>ПЕРВЫЕ БЛЮДА</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <tr v-for="type in data['ПЕРВЫЕ БЛЮДА']" :key="type" style="background-color:#4A7FA4;color:white;">
                          <th >{{type.weight}}
                          </th>
                          <th>{{type.name}}</th>
                          <th>{{type.price}}</th>
                          <th>{{type.calories}}</th>
                        </tr>
                        <th>ВТОРЫЕ БЛЮДА</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <tr v-for="type in data['ВТОРЫЕ БЛЮДА']" :key="type" style="background-color:#4A7FA4;color:white;">
                          <th >{{type.weight}}
                          </th>
                          <th>{{type.name}}</th>
                          <th>{{type.price}}</th>
                          <th>{{type.calories}}</th>
                        </tr>
                        <th>ГАРНИР</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <tr v-for="type in data['ГАРНИР']" :key="type" style="background-color:#4A7FA4;color:white;">
                          <th >{{type.weight}}
                          </th>
                          <th>{{type.name}}</th>
                          <th>{{type.price}}</th>
                          <th>{{type.calories}}</th>
                        </tr>
                        <th>СЛАДКИЕ БЛЮДА И ВЫПЕЧЕНЫЕ ИЗДЕЛИЯ</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <tr v-for="type in data['СЛАДКИЕ БЛЮДА И ВЫПЕЧЕНЫЕ ИЗДЕЛИЯ']" :key="type" style="background-color:#4A7FA4;color:white;">
                          <th >{{type.weight}}
                          </th>
                          <th>{{type.name}}</th>
                          <th>{{type.price}}</th>
                          <th>{{type.calories}}</th>
                        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "MENY",
  data() {
  return {
    data: []
  }
  },
  mounted() {
    axios
        .get('http://192.168.255.133/api/food')
        .then(response => (this.data = response.data.menu));

    },

  /*method: function () {

    axios
        .get(`/api/food`)
        .then(response => (this.data = response));

  },*/
}
</script>

<style>

</style>