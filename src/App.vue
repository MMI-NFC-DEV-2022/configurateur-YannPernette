<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { supabase, user } from '@/supabase';
</script>

<template>
  <header>
    <nav class="flex gap-10 justify-center uppercase bg-gray-600 text-white py-10 text-xl">
      test
    </nav>
  </header>


  <Suspense>
    <RouterView />

  </Suspense>


</template>
