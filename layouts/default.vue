<script setup lang="ts">
import DefaultHeader from "~/components/layout/DefaultHeader.vue";
import Footer from "~/components/layout/Footer.vue";
</script>

<template>
  <div id="main">
    <DefaultHeader />
    <slot />
    <Footer />

    <ScrollTop target="window" :buttonProps="{ severity: 'contrast', raised: true, rounded: true }" />
  </div>
</template>

<style scoped>
#main {
  margin-top: 115px;
}

.p-scrolltop {
  position: fixed !important;
}
</style>
