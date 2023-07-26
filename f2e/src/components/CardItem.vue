<script setup>
import { ref } from 'vue';
const cardList = ref([
  { title:'titile1', content:'content1' }, 
  { title:'titile2', content:'content2' }, 
])
</script>
<template>
  <div v-for="item in cardList">
    <p class="">{{ item.title }}</p>
    <p>{{ item.content }}</p>
  </div>
</template>