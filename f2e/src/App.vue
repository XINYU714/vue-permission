<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <header>
    <div class="container">
      <!-- <HelloWorld msg="You did it!" /> -->
      <nav class="flex items-center gap-16px py-20px">
        <RouterLink to="/" class="text-gray-2 hover:text-green-900 active:text-gray-1">首頁</RouterLink>
        <RouterLink to="/about"  class="text-gray-2 hover:text-green-900 active:text-gray-1">關於網站</RouterLink>
        <RouterLink to="/login" class="text-gray-2 hover:text-green-900 active:text-gray-1">讀者登入</RouterLink>
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
  beforeRouteEnter(to, from, next) {
    // 權限檢查
    if (to.matched.some((record) => record.meta.requiresAdmin)) {
      const isAdmin = useAuthStore().isAdmin;
      if (isAdmin) {
        // alert('你登入了！')
        next();
      } else {
        // next('/'); // 未登入，導向到其他頁
      }
    } else {
      next();
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
