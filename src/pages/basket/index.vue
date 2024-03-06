<script setup lang="ts">
import BasketProfil from "../../components/BasketProfil.vue";
// import type { Basket } from "../../types";

import { supabase } from "@/supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const { data: Basket, error } = await supabase
    .from('Basket')
    .select('*')
</script>




<template>
    <section>
        <h1 class="text-2xl">Baskets appelées à Supabase</h1>
        <div class="flex flex-wrap gap-2">
            <RouterLink class="w-64" v-for="basket in Basket" :key="basket.id" :to="{
                name: '/basket/exemple/[data]',
                params: { data: JSON.stringify(basket) },
            }">
                <BasketProfil class="w-64" v-bind="basket" />
            </RouterLink>
        </div>
    </section>
</template>