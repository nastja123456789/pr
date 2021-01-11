<template>
  <div class="slide" id="slide1" data-anchor="Расписание">
    <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups" style="margin-top: 1em;">
      <div class="input-group autocomplete-wrapper col-md-4 mt-3 mr-3">
        <input id="ruz-search" type="text" class="form-control form-control-lg" placeholder="Поиск..." aria-label="Input group example" aria-describedby="btnGroupAddon">
        <div class="input-group-append">
          <span class="input-group-text text-muted" id="ruz-search-icon"><i class="fa fa-times"></i></span>
        </div>
        <div id="search-advice-wrapper"><table></table></div>
      </div>
      <div class="input-group input-date mt-3 mr-3" style='margin-left: 100px;'>
        <input id="ruz-datepicker" class="form-control form-control-lg">
      </div>
      <div class="input-group mt-2 mr-2" style='margin-left: 200px;'>
        <div class="btn-group week-changer">
          <button id="prev-week-btn" class="btn btn-outline-secondary btn-lg" type="button" title="Предыдущая неделя">
            <i class="fa fa-arrow-left"></i>
          </button>
          <button id="next-week-btn" class="btn btn-outline-secondary btn-lg" type="button" title="Следующая неделя">
            <i class="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <!-- <button id="reset-btn" class="btn btn-outline-danger clear-filter mt-3 mr-3" type="button">
        <i class="fa fa-times fa-fw"></i>
      </button> -->
    </div>
    <div class="list" id="ruz-content"></div>
  </div>

</template>

<script>
export default {
  name: "ruz"
}
</script>

<style scoped>

</style>