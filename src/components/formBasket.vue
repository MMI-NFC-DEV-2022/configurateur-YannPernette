<script setup lang="ts">
import type { Basket } from "@/types";
import { ref } from "vue";
import SvgProfil from "../components/BasketProfil.vue";
import SvgDessus from "../components/BasketDessus.vue";
import { couleursNoms } from "@/types-images";
import { colors, materiaux } from "@/types";

const props = defineProps<{
    data?: Basket;
    id?: string;
}>();

const chaussure = ref<Basket>(props.data ?? {});
</script>



<template>
    <div class="pl-60">
        <div class="carousel w-64">
            <SvgProfil class="carousel-item w-64" v-bind="chaussure" id="profil" />
            <SvgDessus class="carousel-item w-64" v-bind="chaussure" id="dessus" />
        </div>
        <ul class="flex gap-40 underline">
            <li><a href="#profil">Profil</a></li>
            <li><a href="#dessus">Dessus</a></li>
        </ul>
    </div>

    <div class="p-8 mt-10">
        <FormKit type="form" v-model="chaussure">

            <FormKit name="materiaux" label="Matériaux" value="#FFFFFF" type="radio" :options="materiaux" :sections-schema="{
                inner: { $el: null },
                decorator: { $el: null },
            }" input-class="peer sr-only" options-class="flex gap-4">

                <template #label="context">
                    <div class="mt-2 mb-5 h-10 w-10 rounded-full border-[3px] peer-checked:border-cyan-300"
                        :style="{ backgroundImage: `url(${context.option.value})` }"></div>
                    <span class="sr-only">{{ context.option.label }}</span>
                </template>
            </FormKit>

            <FormKit name="semelle" label="Semelle" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
                inner: { $el: null },
                decorator: { $el: null },
            }" input-class="peer sr-only" options-class="flex gap-4">

                <template #label="context">
                    <div class="mt-2 mb-5 h-10 w-10 rounded-full border-[3px] peer-checked:border-cyan-300"
                        :style="{ backgroundColor: context.option.value }"></div>
                    <span class="sr-only">{{ context.option.label }}</span>
                </template>
            </FormKit>

            <FormKit name="empeigne" label="Empeigne" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
                inner: { $el: null },
                decorator: { $el: null },
            }" input-class="peer sr-only" options-class="flex gap-4">

                <template #label="context">
                    <div class="mt-2 mb-5 h-10 w-10 rounded-full border-[3px] peer-checked:border-cyan-300"
                        :style="{ backgroundColor: context.option.value }"></div>
                    <span class="sr-only">{{ context.option.label }}</span>
                </template>
            </FormKit>

            <FormKit name="pointe" label="Pointe" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
                inner: { $el: null },
                decorator: { $el: null },
            }" input-class="peer sr-only" options-class="flex gap-4">

                <template #label="context">
                    <div class="mt-2 mb-5 h-10 w-10 rounded-full border-[3px] peer-checked:border-cyan-300"
                        :style="{ backgroundColor: context.option.value }"></div>
                    <span class="sr-only">{{ context.option.label }}</span>
                </template>
            </FormKit>

            <FormKit name="oeillet" label="Oeillet" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
                inner: { $el: null },
                decorator: { $el: null },
            }" input-class="peer sr-only" options-class="flex gap-4">

                <template #label="context">
                    <div class="mt-2 mb-5 h-10 w-10 rounded-full border-[3px] peer-checked:border-cyan-300"
                        :style="{ backgroundColor: context.option.value }"></div>
                    <span class="sr-only">{{ context.option.label }}</span>
                </template>
            </FormKit>

            <FormKit name="bande" label="Bande" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
                inner: { $el: null },
                decorator: { $el: null },
            }" input-class="peer sr-only" options-class="flex gap-4">

                <template #label="context">
                    <div class="mt-2 mb-5 h-10 w-10 rounded-full border-[3px] peer-checked:border-cyan-300"
                        :style="{ backgroundColor: context.option.value }"></div>
                    <span class="sr-only">{{ context.option.label }}</span>
                </template>
            </FormKit>

            <FormKit name="languette" label="Languette" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
                inner: { $el: null },
                decorator: { $el: null },
            }" input-class="peer sr-only" options-class="flex gap-4">

                <template #label="context">
                    <div class="mt-2 mb-5 h-10 w-10 rounded-full border-[3px] peer-checked:border-cyan-300"
                        :style="{ backgroundColor: context.option.value }"></div>
                    <span class="sr-only">{{ context.option.label }}</span>
                </template>
            </FormKit>

            <FormKit name="lacet" label="Lacet" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
                inner: { $el: null },
                decorator: { $el: null },
            }" input-class="peer sr-only" options-class="flex gap-4">

                <template #label="context">
                    <div class="mt-2 mb-5 h-10 w-10 rounded-full border-[3px] peer-checked:border-cyan-300"
                        :style="{ backgroundColor: context.option.value }"></div>
                    <span class="sr-only">{{ context.option.label }}</span>
                </template>
            </FormKit>

            <FormKit name="trimestre" label="Trimestre" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
                inner: { $el: null },
                decorator: { $el: null },
            }" input-class="peer sr-only" options-class="flex gap-4">

                <template #label="context">
                    <div class="mt-2 mb-5 h-10 w-10 rounded-full border-[3px] peer-checked:border-cyan-300"
                        :style="{ backgroundColor: context.option.value }"></div>
                    <span class="sr-only">{{ context.option.label }}</span>
                </template>
            </FormKit>

        </FormKit>
    </div>
</template>