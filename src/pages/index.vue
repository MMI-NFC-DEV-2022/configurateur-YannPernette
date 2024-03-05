<script setup lang="ts">
import BasketProfil from "../components/BasketProfil.vue";
import type { Basket } from "../types";

// const exemple0: Basket = {
//   semelle: "#FFFF00",
//   empeigne: "#FFFFFF",
//   pointe: "#FFFFFF",
//   oeillet: "#FFFFFF",
//   bande: "#00FF00",
//   languette: "#FFFFFF",
//   lacet: "#00FF00",
//   trimestre: "#FFFFFF",
// };
const exemples: Basket[] = [
  {
    semelle: "#FFFF00",
    empeigne: "#FFFFFF",
    pointe: "#FFFFFF",
    oeillet: "#FFFFFF",
    bande: "#00FF00",
    languette: "#FFFFFF",
    lacet: "#00FF00",
    trimestre: "#FFFFFF",
  },
  {
    semelle: "#FFFFFF",
    empeigne: "#FFFF00",
    pointe: "#FFFFFF",
    oeillet: "#FFFFFF",
    bande: "#00FF00",
    languette: "#FFFFFF",
    lacet: "#00FFFF",
    trimestre: "#FFFFFF",
  },
  {
    semelle: "#FFFFFF",
    empeigne: "#FF0000",
    pointe: "#00FFFF",
    oeillet: "#FFFFFF",
    bande: "#00FF00",
    languette: "#FFFFFF",
    lacet: "#00FFFF",
    trimestre: "#FFFFFF",
  }
];
</script>




<template>
  <section>
    <h1 class="text-2xl">Exemples de Baskets</h1>
    <div class="flex flex-wrap gap-2">
      <div class="w-64" v-for="exemple0 in exemples">
        <RouterLink :to="{
        name: '/basket/exemple/[data]',
        params: { data: JSON.stringify(exemple0) },
      }">
          <BasketProfil class="w-64" v-bind="exemple0" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>