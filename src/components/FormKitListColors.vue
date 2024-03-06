<script setup lang="ts">
import { colors } from "@/types";
defineProps<{
  name?: string;
  label?: string;
}>();
</script>


<template>
    <FormKit :name="name" :label="label" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
        inner: { $el: null },
        decorator: { $el: null },
    }" input-class="peer sr-only" options-class="flex gap-4">

        <template #label="context">
            <div class="mt-2 mb-5 h-10 w-10 rounded-full border-[3px] peer-checked:border-cyan-300"
                :style="{ backgroundColor: context.option.value }"></div>
            <span class="sr-only">{{ context.option.label }}</span>
        </template>
    </FormKit>
</template>