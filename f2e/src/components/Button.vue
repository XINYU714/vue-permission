<template>
  <div class="text-white py-8px px-20px rounded-2xl block" :class="bgColor" >
    {{ text }}
  </div>
</template>
<script>
  export default {
    props:{
      text: { type: String, default: "" },
      bgColor: { type: String, default: "bg-gray-1" }
    },
  }
</script>