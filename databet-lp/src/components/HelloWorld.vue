<script setup>

defineProps({
  msg: String,
  desc: String
})
</script>

<template>
  
  <h1>{{ msg }}</h1>
  
  <button>
    Teste Grátis por 7 Dias
  </button>
  <button class="link-btn">
    <a href="#"> O que é o Databett</a>
  </button>

</template>

