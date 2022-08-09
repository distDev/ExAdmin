<template>
  <div class="w-full">
    <div
      class="flex justify-between items-center w-full p-[30px] bg-white rounded-lg shadow-mainShadow px-5 py-5"
    >
      <div class="flex gap-4">
        <div
          class="bg-lightGrey text-textSecond rounded-lg flex items-center justify-center text-sm font-medium px-6 py-3"
        >
          {{ props.title }}
        </div>
        <button
          class="bg-primary text-white rounded-lg flex items-center justify-center text-sm font-medium px-6 py-3 hover:opacity-75"
          @click="openModal"
        >
          Добавить
        </button>
        <Teleport to="body">
          <AddingModal v-if="storeModal.$state.isOpen" />
        </Teleport>
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
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modal';
import AddingModal from '../adding-modal/AddingModal.vue';

const props = defineProps<{
  title: string;
}>();

const storeModal = useModalStore();

const openModal = () => {
  storeModal.openModal();
  storeModal.changeVariant(props.title);
};
</script>
