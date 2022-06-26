<template>
  <LayoutDefault>
    <template #content>
      <Swappers />
    </template>
  </LayoutDefault>
</template>

<script setup lang="ts">
import LayoutDefault from '$layouts/Default.vue'

import Swappers from '$components/blocks/Swappers.vue'
</script>

<style scoped>
.layouts {
  justify-content: center;
}

.swappers {
  padding: 15px 0;
}
</style>
