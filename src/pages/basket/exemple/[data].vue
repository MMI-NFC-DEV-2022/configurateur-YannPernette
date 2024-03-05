<script setup lang="ts">
import formBasket from '@/components/formBasket.vue';
import { useRoute } from 'vue-router/auto';

const route = useRoute('/basket/exemple/[data]');
</script>
<template>
  <formBasket :data="JSON.parse(route.params.data)" />
</template>