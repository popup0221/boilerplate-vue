<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-6xl font-bold text-red-600">404</h1>
    <p class="mt-4 text-lg text-gray-700">이런! 찾고 있는 페이지가 없습니다.</p>
    <router-link
      to="/"
      class="mt-6 text-blue-500 hover:underline">
      집으로 돌아가기
    </router-link>
  </div>
</template>
