<template>
  <div>

    <div class="split left">

      <Slider id="slider"
          animation="fade"
          v-model="sliderValue"
          :duration="5000"
          :speed="1000"
      >
        <SliderItem
            v-for="(i, index) in list.data"
            :key="index"
            @click="changeIndex(1);"
            :style="i"
        >
<!--            <h6 v-for="i in news.data" :key="i"></h6>-->
          <div>
            <p >{{i["text"]}}</p>
          </div>
          <h2>{{i["title"]}}</h2>
          <div >
            <img  v-bind:src="i['img']" >
          </div>
          <a v-bind:href="i['link']">{{i["link"]}}</a>



        </SliderItem>
      </Slider>
      </div>
<!--      <br/>-->
<!--      <h6 v-for="i in news.data" :key="i">-->


<!--        <div class="news-slides-content">-->

<!--          <p >{{i["text"]}}</p>-->
<!--        </div>-->
<!--        <h2>{{i["title"]}}</h2>-->
<!--        <div class="slider-element">-->
<!--          <img class="slider-img" v-bind:src="i['img']" >-->
<!--        </div>-->
<!--        <a v-bind:href="i['link']">{{i["link"]}}</a>-->
<!--      </h6>-->


    <div class="split right">

      <time class="clock">
    <span class="clock__hour">{{ hours }}</span
    ><!--
    --><span
          class="clock__colon"
          :style="{
        visibility: !blink || seconds % 2 === 0 ? 'visible' : 'hidden'
      }"
      >:</span
      ><!--
    --><span class="clock__minutes">{{ minutes }}</span
      ><!--
    --><span
          class="clock__colon"
          v-if="displaySeconds"
          :style="{
        visibility: !blink || seconds % 2 === 0 ? 'visible' : 'hidden'
      }"
      >:</span
      ><!--
    --><span v-if="displaySeconds" class="clock__seconds">{{ seconds }}</span
      ><!--
    --><span v-if="twelveHour" class="clock__ampm">{{ amPm }}</span>
      </time>
      <div class="free-class-title">Свободные аудитории на {{this.i}}ю пару</div>
      <div v-if="floors.length > 0" >
        <div class="free-classes" v-for="floor in floors" :key="floor.floor">
          <h6 class="floar">
            {{ floor.floor }} Этаж
          </h6>
          <div class="classes" v-for="number in floor.rooms" :key="number">
            {{ number}}

          </div>

        </div>
      </div>
      </div>
  </div>
          </template>

          <script>
          function padZero(number) {
            if (number < 10) {
              return "0" + number;
            }
            return number;
          }
          const getDate = () => new Date();
          const getSeconds = () => padZero(getDate().getSeconds());
          const getMinutes = () => padZero(getDate().getMinutes());
          const getHour = twelveHour => {
            let hours = getDate().getHours();
            if (twelveHour && hours > 12) {
              hours = hours - 12;
            }
            return padZero(hours);
          };
          const getAmPm = () => (getDate().getHours() > 12 ? "pm" : "am");
          import { Slider, SliderItem } from "vue-easy-slider";
           // import VueClock from '@dangvanthanh/vue-clock';
          import axios from "axios";

          export default {
          name: "sleepmenu",
            props: ["blink", "displaySeconds", "twelveHour"],
            components: {
            // VueClock,
              Slider,
              SliderItem,

            },
            data(){
            return {
              ticker: null,
              minutes: getMinutes(),
              hours: getHour(this.twelveHour),
              seconds: getSeconds(),
              amPm: getAmPm(),
              list: [],
              sliderValue: 0,
              news:[],
              i:1,
              audit: [],
              map: {},
              rooms: {},
              floors: [],
              capacities:[],
            }
            },
            methods: {
              changeIndex(index) {
                this.sliderValue = index;
              },
              created() {
                this.ticker = setInterval(() => {
                  this.minutes = getMinutes();
                  this.hours = getHour(this.twelveHour);
                  this.seconds = getSeconds();
                }, 1000);
              },
              destroyed() {
                clearInterval(this.ticker);
              },
            },

          mounted() {

            setTimeout(
                () =>
                    (this.list.data = [
                      {i:0},{i:1},{i:2},{},{},{},{},{}
                      // {
                      //
                      //   backgroundColor: "#3f51b5",
                      //   width: "100%",
                      //   height: "100%"
                      // },
                      // {
                      //   backgroundColor: "#eee",
                      //   width: "100%",
                      //   height: "100%"
                      // },
                      // {
                      //   backgroundColor: "#f44336",
                      //   width: "100%",
                      //   height: "100%"
                      // },
                      // {
                      //   backgroundColor: "#eee",
                      //   width: "100%",
                      //   height: "100%"
                      // }
                    ]),
                5000
            );

            axios
                .get('http://192.168.255.133/api/news')
                .then(response => (this.list = response));
            axios
          .get('https://api.hseapp.ru/gateway/ruz/rooms/2211?classes=' + this.i)
                .then(response => {
                  response.data.rooms.forEach(room => {
                    if (room.floor) {
                      let index = this.floors.map(floor => floor.floor).indexOf(room.floor)
                      if (index == -1) {
                        this.floors.push({
                          floor: (room.floor),
                          rooms: [room["number"],room["capacity"]],
                        })
                      } else {
                        this.floors[index].rooms.push(room["number"],room["capacity"])
                      }
                    }
                  })
                });
          }
          }

          </script>

          <style >


          .c {
            color: #A3A3A3;
            size: B5;
          }
          .split {
            height: 100%;
            width: 50%;
            position: fixed;
            z-index: 1;
            top: 0;
            overflow-x: hidden;
            padding-top: 20px;
          }

          /* Control the left side */
          .left {
            left: 0;

          }
          #slider {
            position:relative;
            overflow: visible;
            margin-top: 15px;
          }

          /* Control the right side */
          .right {
            right: 0;

          }

          /* If you want the content centered horizontally and vertically */


          /* Style the image inside the centered container, if needed */
          .centered img {
            width: 150px;
            border-radius: 50%;
          }
          .clock{
            margin-top: 15px;
            float: right;
          }
          </style>
