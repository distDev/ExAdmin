<template>
  <div
    class="fixed top-0 h-full flex flex-col items-center justify-between p-6 bg-white"
  >
    <div class="flex flex-col items-center">
      <div>
        <RouterLink
          :to="{ name: 'home' }"
          class="text-2xl font-bold text-primary"
          >Ex</RouterLink
        >
      </div>
      <nav class="flex flex-col gap-4 mt-14">
        <RouterLink
          v-for="item in sidebarLinks"
          :key="item.name"
          class="px-3 py-[10px] text-textSecond rounded-lg flex items-center justify-center text-xl"
          active-class="text-violet-500 bg-lightGrey"
          :to="{ name: item.name }"
        >
          <font-awesome-icon :icon="item.icon" />
        </RouterLink>
      </nav>
    </div>
    <div
      class="px-3 py-[10px] text-textSecond rounded-lg flex items-center justify-center text-xl hover:text-primary cursor-pointer"
    >
      <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const sidebarLinks = ref([
  { name: 'home', path: 'home', icon: 'fa-solid fa-house fa-xl' },
  { name: 'users', path: 'users', icon: 'fa-solid fa-user fa-xl' },
  { name: 'services', path: 'services', icon: 'fa-solid fa-wrench fa-xl' },
  { name: 'cars', path: 'cars', icon: 'fa-solid fa-car fa-xl' },
  { name: 'calendar', path: 'calendar', icon: 'fa-solid fa-calendar fa-xl' },
]);
</script>

<style lang="scss" scoped></style>
