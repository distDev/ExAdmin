<template>
  <VueCal
    locale="ru"
    :time-from="10 * 60"
    :time-to="21 * 60"
    :time-step="30"
    :events="events"
    :disable-views="['years']"
    today-button
    active-view="week"
    
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

const events = ref([
   {
        start: '2022-08-12 13:00',
        end: '2022-08-12 14:00',
        title: 'Reno Logan'
      },
      {
        start: '2022-08-11 15:30',
        end: '2022-08-11 16:15',
        title: 'Opel Astra'
      },
      {
        start: '2022-08-12 16:30',
        end: '2022-08-12 17:30',
        title: 'Lada Granta'
      },
])
</script>

<style>
.vuecal__now-line {
  color: #06c;
}
.vuecal {
  border-radius: 8px;
  box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}
.vuecal__menu {
  background: #8146ff;
  color: white;
 padding: 8px;
}
.vuecal__title-bar {
  background: #F6F7FB;
  color: #361f67;
  padding: 15px 10px;
  font-size: 18px;
  border-bottom: 1px solid #f0f1f1;
}
.vuecal__view-btn {
  background: none;
  border: none;
  padding: 0px 20px;
  height: 40px;
  font-size: 1.3em;
  border-bottom: 0 solid currentColor;
  cursor: pointer;
  color: inherit;
  box-sizing: border-box;
  transition: 0.2s;
  border-radius: 8px;
}

.vuecal__view-btn--active {
  /* background: #8146ff;
  color: white; */
  background: #f6f7fb;
  color: #8146ff;
  border: none;
}
.vuecal__heading {
 
}
.vuecal__weekdays-headings {
  background: white;
  color: #361f67;
}

.vuecal__cell::before {
  border: 1px solid #f0f1f1;
}
.vuecal__bg {
  background: white;
}
</style>
