<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { supabase, user } from '@/supabase';
</script>

<template>
  <header>
    <nav class="flex gap-10 justify-center items-center uppercase bg-gray-600 text-white py-10 text-xl">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/basket/new">Basket SVG</RouterLink>
      <RouterLink to="/basketImage">Basket Image</RouterLink>
      <RouterLink to="/basket">Basket Supa</RouterLink>

      <RouterLink v-if="user" to="/login" class="hover:bg-white hover:text-gray-600 border-solid border-2 py-2 px-4 h-12">Se Déconnecter</RouterLink>
      <RouterLink v-else to="/login" class="hover:bg-white hover:text-gray-600 border-solid border-2 py-2 px-4 h-12">Se Connecter</RouterLink>
    </nav>
  </header>


  <Suspense>
    <RouterView />

  </Suspense>


</template>
