<script setup lang="ts">
import formBasket from '@/components/formBasket.vue';
import { useRoute } from 'vue-router/auto';

const route = useRoute('/basket/edit/[id]');
</script>
<template>
  <formBasket :id="route.params.id" />
</template>