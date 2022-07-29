<script setup lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="relative">
    <Sidebar />
    <div class="ml-[90px] p-10">
      <RouterView />
    </div>
  </div>
</template>

<style>
body {
  background: #fafafd;
}
</style>
