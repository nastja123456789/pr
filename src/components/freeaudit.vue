<template>
  <div class="slide" id="slide2" data-anchor="Аудитории">
    <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
						<span class="col-3" id="amount" style="line-height: 38px; font-size: 17pt;">Интервал:
							<span id="lesson-num"></span>
							<span id="lesson-count"></span>
							<span id="lesson-time"></span>
							<span id="lesson-load" style="display: none;"><i class='fa fa-spinner fa-pulse fa-fw'></i></span>
						</span>
      <div class="m-auto col-3">
        <div id="slider-range"></div>
      </div>
      <div class="input-group input-date m-auto">
        <input id="classrooms-datepicker" class="form-control form-control-lg">
      </div>
      <div class="input-group m-auto">
        <div class="btn-group week-changer">
          <button id="prev-day-btn" class="btn btn-outline-secondary btn-lg" type="button" title="Предыдущий день">
            <i class="fa fa-arrow-left"></i>
          </button>
          <button id="next-day-btn" class="btn btn-outline-secondary btn-lg" type="button" title="Следующий день">
            <i class="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <button id="classrooms-clear" class="btn btn-outline-danger clear-filter m-auto btn-lg" type="button">
        <i class="fa fa-times fa-fw"></i>
      </button>
    </div>
    <div class="col-sm-11" id="free-classes-ruz">

    </div>
  </div>

</template>

<script>
export default {
  name: "freeaudit"
}
</script>

<style scoped>

</style>