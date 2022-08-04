<template>
  <div class="w-full bg-white rounded-lg">
    <table class="w-full text-sm text-left">
      <!-- шапка таблицы -->
      <thead class="text-xs text-textSecond uppercase border-b border-border">
        <tr>
          <th scope="col" class="p-4">
            <input id="checkbox-all-search" type="checkbox" class="w-4 h-4" />
          </th>
          <th scope="col" class="py-3 px-6">Марка</th>
          <th scope="col" class="py-3 px-6">Модель</th>
          <th scope="col" class="py-3 px-6">VIN</th>
          <th scope="col" class="py-3 px-6">Имя</th>
          <th scope="col" class="py-3 px-6">Телефон</th>
        </tr>
      </thead>
      <!-- тело таблицы -->
      <tbody>
        <!-- колонна -->
        <tr class="text-base border-b border-border">
          <!-- чекбокс -->
          <td class="p-4 w-4">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              class="w-4 h-4"
            />
          </td>
          <!-- данные таблицы -->
          <td class="py-4 px-6">Opel</td>
          <td class="py-4 px-6">Astra</td>
          <td class="py-4 px-6">482FGSJ78WHFYW943</td>
          <td class="py-4 px-6">Олег</td>
          <td class="py-4 px-6">+7 925 389 25 33</td>
        </tr>

        <!-- колонна -->
        <tr class="text-base border-b border-border">
          <!-- чекбокс -->
          <td class="p-4 w-4">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              class="w-4 h-4"
            />
          </td>
          <!-- данные таблицы -->
          <td class="py-4 px-6">Opel</td>
          <td class="py-4 px-6">Astra</td>
          <td class="py-4 px-6">482FGSJ78WHFYW943</td>
          <td class="py-4 px-6">Олег</td>
          <td class="py-4 px-6">+7 925 389 25 33</td>
        </tr>

        <!-- колонна -->
        <tr class="text-base border-b border-border">
          <!-- чекбокс -->
          <td class="p-4 w-4">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              class="w-4 h-4"
            />
          </td>
          <!-- данные таблицы -->
          <td class="py-4 px-6">Opel</td>
          <td class="py-4 px-6">Astra</td>
          <td class="py-4 px-6">482FGSJ78WHFYW943</td>
          <td class="py-4 px-6">Олег</td>
          <td class="py-4 px-6">+7 925 389 25 33</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
