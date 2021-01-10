<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm" id="menu-header" role="tablist" style="background-color: #e3f2fd;">
      <img src="../../../public/unnamed.png" width="50" height="50" class="d-inline-block align-center" alt="">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active mr-3" data-menuanchor="РУЗ">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <router-link :to="{ name: 'RUS' }">Руз</router-link>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown" style="margin-left: 2vw;">

            <a class="dropdown-item h2" href="#РУЗ/Расписание"><router-link :to="{name: 'ruz' }">Расписание</router-link></a>
            <a class="dropdown-item h2" href="#РУЗ/Аудитории"><router-link :to="{name: 'freeaudit'}">Свободные аудитории</router-link></a>
        </div>
      </li>
      <li class="nav-item mr-3" data-menuanchor="Столовая">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <router-link :to="{ name: 'MENY' }">Меню</router-link>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown" style="margin-left: 10vw;">
          <a class="dropdown-item h2" href="#Столовая/Меню"><router-link :to="{name: 'menu' }">Меню</router-link></a>
          <a class="dropdown-item h2" href="#Столовая/Комплекс"><router-link :to="{name: 'complex'}">Комплекс</router-link></a>
        </div>
      </li>
      <li class="nav-item mr-3">
        <a class="nav-link" href="#Новости"><router-link :to="{ name: 'news' }">Новости</router-link>
        </a>
      </li>
      <li class="nav-item mr-3">
        <a class="nav-link" href="#Навигация"><router-link :to="{ name: 'navigation' }">Навигация</router-link>
        </a>
      </li>
    </ul>

  </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "Master"
}
</script>

<style scoped>

</style>