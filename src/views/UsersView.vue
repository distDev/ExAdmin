<template>
<div class="flex flex-col gap-[15px]">
 <div class="w-full">
    <div
      class="flex justify-between items-center w-full p-[30px] bg-white rounded-lg shadow-mainShadow px-5 py-5"
    >
      <div class="flex gap-4">
        <div
          class="bg-lightGrey text-textSecond rounded-lg flex items-center justify-center text-sm font-medium px-6 py-3"
        >
          Автомобили
        </div>
        <button
          class="bg-primary text-white rounded-lg flex items-center justify-center text-sm font-medium px-6 py-3 hover:opacity-75"
        >
          Добавить
        </button>
      </div>
      <div class="flex gap-4">
        <div
          class="bg-lightGrey cursor-pointer rounded-lg h-10 w-10 flex items-center justify-center text-textSecond hover:text-primary"
        >
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
        <div
          class="bg-lightGrey cursor-pointer rounded-lg h-10 w-10 flex items-center justify-center text-textSecond hover:text-primary"
        >
          <font-awesome-icon icon="fa-solid fa-filter" />
        </div>
        <div
          class="bg-lightGrey cursor-pointer rounded-lg h-10 w-10 flex items-center justify-center text-textSecond hover:text-primary"
        >
          <font-awesome-icon icon="fa-solid fa-trash" />
        </div>
      </div>
    </div>
  </div>
  <TabelLarge />
</div>
 
</template>

<script setup lang="ts">
import TabelLarge from '../components/table-large/TabelLarge.vue';
</script>

<style scoped></style>
