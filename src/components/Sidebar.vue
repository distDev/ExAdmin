<template>
  <div
    class="fixed top-0 w-[90px] h-full flex flex-col items-center justify-between p-6 bg-white"
  >
    <div><RouterLink :to="{ name: 'home' }">EX</RouterLink></div>
    <nav class="flex flex-col gap-3">
      <RouterLink active-class="text-green-500" :to="{ name: 'home' }">Главная</RouterLink>
      <RouterLink active-class="text-green-500" :to="{ name: 'users' }">Юзеры</RouterLink>
      <RouterLink active-class="text-green-500" :to="{ name: 'services' }">Услуги</RouterLink>
      <RouterLink active-class="text-green-500" :to="{ name: 'cars' }">Авто</RouterLink>
      <RouterLink active-class="text-green-500" :to="{ name: 'calendar' }">Записи</RouterLink>
    </nav>
    <div></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
