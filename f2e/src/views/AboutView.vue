<template>
  <div class="container py-60px">
    <h1 class="text-3xl text-center font-medium text-gray-1">關於網站</h1>
    <div class="mt-20px text-center">
      <p class="text-gray-2 text-base leading-5">此網站使用Vue3 + Tailwind</p>
      <p class="text-gray-2 text-base leading-5">XXXXXXXXXXXXX</p>
      <p>{{ isAdmin }}</p>
    </div>
    <div class="my-60px text-center">
      <p class="text-gray-3 text-center mb-40px" v-if="isAdmin">目前登入中</p>
      <p class="text-gray-3 text-center mb-40px" v-else>未登入狀態</p>
      <p class="text-red text-sm mb-20px">登入後，下方將會顯示button</p>
      <template v-if="isAdmin">
        <a href="https://vuejs.org/" class="mx-auto w-fit block text-white px-16px py-8px bg-gray-1 rounded-lg hover:opacity-25">點我看更多</a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  // 從app 頁面傳過值過來
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
</style>
