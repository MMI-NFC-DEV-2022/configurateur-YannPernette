<script setup lang="ts">
import type { ChaussureImage } from "@/types-images";

withDefaults(defineProps<ChaussureImage>(), {
    orientation: "cote",
    bandes: "bleu",
    cuir: "bleu",
    mousse: "bleu",
});
</script>




<template>
    <div class="relative">
        <img :src="`/images/${orientation}/base.png`" class="h-auto w-full" alt="Image de la chaussure" />
        <img :src="`/images/${orientation}/bandes-${bandes}.png`" class="absolute top-0 left-0 h-auto w-full" v-if="orientation !== 'derriere'" />
        <img :src="`/images/${orientation}/cuir-${cuir}.png`" class="absolute top-0 left-0 h-auto w-full" v-if="orientation !== 'derriere'" />
        <img :src="`/images/${orientation}/mousse-${mousse}.png`" class="absolute top-0 left-0 h-auto w-full" />
    </div>
</template>