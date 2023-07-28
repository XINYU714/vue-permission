<template>
  <div class="container my-120px">
    <h1 class="text-3xl text-center font-medium mb-20px">會員登入</h1>
    <div class="bg-white p-20px flex flex-col gap-20px rounded-2xl max-w-lg mx-auto">
      <div class="flex flex-col gap-2">
        <label for="account" class="text-gray-1">帳號</label>
        <input type="text" v-model="account" placeholder="請輸入帳號" class="px-16px py-8px outline outline-gray-4 outline-1 rounded-lg">
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-gray-1">密碼</label>
        <input type="text" v-model="password" placeholder="請輸入密碼" class="px-16px py-8px outline outline-gray-4 outline-1 rounded-lg">
      </div>
    </div>
    <button type="submit" v-on:click="login()" class="text-white py-8px px-16px bg-gray-1 rounded-2xl mx-auto block my-20px">登入</button>
    
  </div>
</template>

<script>
import { useAuthStore } from '../stores';
export default {
  data() {
    return {
      account: '',
      password: '',
    };
  },
  methods: {
    login() {
      // 假設帳號為 "abc"，密碼為 "123"
      if (this.account === 'abc' && this.password === '123') {
        // 登入成功，將使用者權限設定為管理員（這裡只是示例）
        useAuthStore().setAdmin(true);
        // 跳轉到目標頁面，這裡導向到dashboard
        this.$router.push('/about');
        alert('登入成功！');
      } else {
        alert('登入失敗，請檢查帳號密碼！');
      }
    },
  },
};
</script>