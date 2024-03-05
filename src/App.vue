<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex gap-10 justify-center uppercase bg-gray-600 text-white py-10 text-xl">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/basket/new">Basket SVG</RouterLink>
      <RouterLink to="/basketImage">Basket Image</RouterLink>
    </nav>
  </header>


  <Suspense>
    <RouterView />

  </Suspense>


</template>
