<script setup lang="ts">
import type { ChaussureSvg } from "@/types-svg";
import { ref } from "vue";
import SvgProfil from "./svgProfil.vue";
import SvgDessus from "./svgDessus.vue";

const chaussure = ref<ChaussureSvg>({});
</script>



<template>
    <div class="p-2">
        <ul class="flex gap-1 underline">
            <li><a href="#profil">Profil</a></li>
            <li><a href="#dessus">Dessus</a></li>
        </ul>
        <div class="carousel w-64 mb-40">
            <SvgProfil class="carousel-item w-64" v-bind="chaussure" id="profil" />
            <SvgDessus class="carousel-item w-64" v-bind="chaussure" id="dessus" />
        </div>
        <FormKit type="form" v-model="chaussure">
            <FormKit name="semelle" label="semelle" value="#FFFFFF" type="color" />
            <FormKit name="empeigne" label="empeigne" value="#FFFFFF" type="color" />
            <FormKit name="pointe" label="empeigne" value="#FFFFFF" type="color" />
            <FormKit name="oeillet" label="empeigne" value="#FFFFFF" type="color" />
            <FormKit name="bande" label="empeigne" value="#FFFFFF" type="color" />
            <FormKit name="languette" label="empeigne" value="#FFFFFF" type="color" />
            <FormKit name="lacet" label="empeigne" value="#FFFFFF" type="color" />
            <FormKit name="trimestre" label="empeigne" value="#FFFFFF" type="color" />
        </FormKit>
    </div>
</template>