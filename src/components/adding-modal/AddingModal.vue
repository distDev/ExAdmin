<template>
  <div
    class="w-full h-full bg-black bg-opacity-40 flex items-center justify-center fixed top-0 left-0"
  >
    <div class="w-[50%] h-[60%] rounded-lg bg-white p-5 opacity-1" ref="target">
      <h2 v-if="storeModal.variant === 'Пользователи'">
        Добавление пользователя
      </h2>
      <h2 v-else-if="storeModal.variant === 'Автомобили'">
        Добавление автомобиля
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modal';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

const target = ref(null);
const storeModal = useModalStore();

onClickOutside(target, () => storeModal.closeModal());
</script>

<style scoped></style>
