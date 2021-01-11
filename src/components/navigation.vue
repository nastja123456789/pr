<template>
<div>
 <div class="cab-search">
      <div id="cab-search-form">
        <input type="text" id="cab-num" placeholder="Что вы ищете?" readonly>
        <button id="cab-keyboard-open"><i class="mdi mdi-keyboard"></i></button>
      </div>
      <div class="nav-keyboard"></div>
 </div>
  <div class="floor-change">
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group-vertical btn-group-toggle mr-2" role="group" aria-label="First group">
        <input type="button" value="9a" class="btn btn-secondary floor-num btn-lg">
        <input type="button" value="8a" class="btn btn-secondary floor-num btn-lg">
        <input type="button" value="7a" class="btn btn-secondary floor-num btn-lg">
        <div class="btn-group" role="group"><input type="button" value="6" class="btn btn-secondary floor-num btn-lg"><input type="button" value="6a" class="btn btn-secondary floor-num btn-lg"></div>
        <div class="btn-group" role="group"><input type="button" value="5" class="btn btn-secondary floor-num btn-lg"><input type="button" value="5a" class="btn btn-secondary floor-num btn-lg"></div>
        <div class="btn-group" role="group"><input type="button" value="4" class="btn btn-secondary floor-num btn-lg"><input type="button" value="4a" class="btn btn-secondary floor-num btn-lg"></div>
        <div class="btn-group" role="group"><input type="button" value="3" class="btn btn-secondary floor-num btn-lg"><input type="button" value="3a" class="btn btn-secondary floor-num btn-lg"></div>
        <div class="btn-group" role="group"><input type="button" value="2" class="btn btn-secondary floor-num btn-lg"><input type="button" value="2a" class="btn btn-secondary floor-num btn-lg"></div>
        <input type="button" value="1" class="btn btn-secondary floor-num btn-lg">
        <input type="button" value="0" class="btn btn-secondary floor-num btn-lg">
      </div>
    </div>
  </div>

  <button type="button" id="here-btn" class="btn btn-outline-dark btn-lg">Домой <i class="mdi mdi-map-marker"></i></button>
  <button type="button" id="stop-animation" class="btn btn-outline-dark btn-lg">Остановить</button>
  <div class="section" id="section3">
    <div id="news-slider-bg"></div>
    <div id="news-slides"></div>
  </div>
  <div id="sleep_menu">
    <div id="sleep_check"></div>
    <div class="info-menu">
      <div class="top-menu shadow">
        <div class="top-left-menu">
          <div id="time"><span id="time-node"></span> <i class="far fa-clock"></i> </div>
        </div>
        <div class="top-menu-content"><h2><i class="mdi mdi-gesture-tap h1"></i> чтобы начать работу</h2></div>
      </div>
      <div class="left-menu shadow">
        <div class="free-class-title">Свободные аудитории на 3 пару (12:10-13:30)</div>
        <ul class="free-classes" id="free-classes-sm">
          <li class="floar">
            <h6>1 ЭТАЖ</h6>
            <p>107 <small>(30)</small>, 121 <small>(16)</small></p>
          </li>
          <li class="floar">
            <h6>2 ЭТАЖ</h6>
            <p>208 <small>(50)</small>, 209 <small>(16)</small>, 212 <small>(16)</small>, 213 <small>(27)</small>, 228а <small>(16)</small>, 233а <small>(16)</small></p>
          </li>
          <li class="floar">
            <h6>3 ЭТАЖ</h6>
            <p>302 <small>(32)</small>, 309 <small>(16)</small>, 311 <small>(18)</small>, 313 <small>(28)</small></p>
          </li>
          <li class="floar">
            <h6>4 ЭТАЖ</h6>
            <p>409 <small>(12)</small>, 410 <small>(150)</small>, 411 <small>(16)</small>, 412 <small>(148)</small>, 413 <small>(100)</small>, 414 <small>(14)</small>, 424 <small>(32)</small>, 425 <small>(10)</small>, 427 <small>(12)</small>, 435 <small>(10)</small></p>
          </li>
          <li class="floar">
            <h6>5 ЭТАЖ</h6>
            <p>506 <small>(200)</small>, 512 <small>(12)</small>, 515 <small>(18)</small>, 520 <small>(18)</small>, 522 <small>(20)</small></p>
          </li>
          <li class="floar">
            <h6>6 ЭТАЖ</h6>
            <p>606 <small>(20)</small></p>
          </li>
          <li class="floar">
            <h6>7 ЭТАЖ</h6>
            <p>703 <small>(12)</small></p>
          </li>
          <li class="floar">
            <h6>8 ЭТАЖ</h6>
            <p>802 <small>(30)</small>, 807 <small>(10)</small>, 808 <small>(10)</small></p>
          </li>
          <li class="floar">
            <h6>9 ЭТАЖ</h6>
            <p>904 <small>(0)</small></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
name: "navigation"
}
</script>

<style scoped>

</style>