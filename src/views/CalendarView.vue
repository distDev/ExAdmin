<template>
  <div class="w-full flex flex-col gap-[15px]">
    <CalendarControls />
    <div class="h-[80vh] shadow-mainShadow">
      <Calendar />
    </div>
  </div>
</template>

<script setup lang="ts">
import Calendar from '../components/calendar/Calendar.vue';
import CalendarControls from '../components/calendar-controls/CalendarControls.vue';
</script>
