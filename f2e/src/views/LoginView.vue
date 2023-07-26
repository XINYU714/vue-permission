<template>
  <div class="container py-60px">
    <h1 class="text-3xl text-center font-medium mb-20px">會員登入</h1>
    <div class="bg-white p-20px flex flex-col gap-20px rounded-2xl max-w-7xl mx-auto">
      <div class="flex flex-col gap-2">
        <label for="account" class="text-gray-1">帳號</label>
        <input type="text" placeholder="請輸入帳號" class="px-16px py-8px outline outline-gray-4 outline-1 rounded-lg">
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-gray-1">密碼</label>
        <input type="text" placeholder="請輸入密碼" class="px-16px py-8px outline outline-gray-4 outline-1 rounded-lg">
      </div>
    </div>
    <button class="text-white py-8px px-16px bg-gray-1 rounded-2xl mx-auto block my-20px">登入</button>
    
  </div>
</template>