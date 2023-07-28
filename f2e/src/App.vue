<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <header>
    <div class="container py-20px flex justify-between items-center">
      <!-- HEADER 左邊 -->
      <div class="logo">
        <RouterLink to="/">
          <img src="#" alt="" width="120" height="30">
        </RouterLink>
      </div>  
       <!-- HEADER 右邊 -->
      <nav class="flex items-center gap-16px justify-end">
        <RouterLink to="/about" class="text-gray-2 hover:text-gray-3 active:text-gray-2">網站導覽</RouterLink>
        <template v-if="isAdmin">
          <Button text="會員專區" class="bg-gray-2" type="submit" v-on:click="logout()"></Button>
        </template>
        <RouterLink v-else to="/login" class="text-gray-2 hover:text-green-900 active:text-gray-1">
          <Button text="登入"></Button>
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView :isAdmin="isAdmin" />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores';
import Button from './components/Button.vue'
export default {
  name: 'App',
  components: {
    'Button': Button
  },
  computed: {
    isAdmin() {
      return useAuthStore().isAdmin;
    }, //  回傳目前isAdmin 布林
  },
  // beforeRouteEnter(to, from, next) {
  //   // 權限檢查
  //   if (to.matched.some((record) => record.meta.requiresAdmin)) {
  //     const isAdmin = useAuthStore().isAdmin;
  //     if (isAdmin) {
  //       // alert('你登入了！')
  //       next();
  //     } else {
  //       next('/login'); // 未登入，導向到其他頁
  //     }
  //   } else {
  //     next();
  //   }
  // },
  methods: {
    logout() {
      useAuthStore().setAdmin(false);
      alert('你已登出!');
    }
  },
};
</script>
<style scoped lang="postcss">
nav a.router-link-exact-active {
  @apply font-medium;
}
</style>
