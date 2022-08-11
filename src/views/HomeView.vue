<template>
  <div class="flex flex-col gap-[30px]">
    <div class="flex gap-[30px]">
      <div
        class="bg-white shadow-mainShadow rounded-[14px] h-[220px] basis-1/3"
      ></div>
      <div
        class="bg-white shadow-mainShadow rounded-[14px] h-[220px] basis-1/3"
      ></div>
      <div
        class="bg-white shadow-mainShadow rounded-[14px] h-[220px] basis-1/3"
      ></div>
    </div>
    <div class="flex gap-[30px]">
      <div
        class="bg-white borde overflow-hidden shadow-mainShadow rounded-[14px] w-full h-[500px] basis-3/3"
      >
        <Calendar />
      </div>
    </div>
    <div class="bg-white shadow-mainShadow h-[400px] rounded-[14px]"></div>
    <div class="bg-white shadow-mainShadow h-[400px] rounded-[14px]"></div>
  </div>
</template>

<script setup lang="ts">
import Calendar from '../components/calendar/Calendar.vue';
</script>

<style scoped></style>
