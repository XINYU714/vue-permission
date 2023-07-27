<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <header>
    <div class="container">
      <nav class="flex items-center gap-16px py-20px justify-end">
        <RouterLink to="/" class="text-gray-2 hover:text-green-900 active:text-gray-1">首頁</RouterLink>
        <RouterLink to="/about"  class="text-gray-2 hover:text-green-900 active:text-gray-1">關於網站</RouterLink>
        <template v-if="isAdmin">
          <button type="submit" v-on:click="logout()" class="text-white py-8px px-16px bg-gray-1 rounded-2xl block my-20px">登出</button>
        </template>
        <RouterLink v-else to="/login" class="text-gray-2 hover:text-green-900 active:text-gray-1">會員登入</RouterLink>
      </nav>

    </div>
  </header>

  <RouterView :isAdmin="isAdmin" />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores';
export default {
  name: 'App',
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
<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */
/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
*/

nav a.router-link-exact-active {
  @apply text-gray-1 font-medium;
}

/*
nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } 

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
