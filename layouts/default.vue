<script setup lang="ts">
import DefaultHeader from "~/components/layout/DefaultHeader.vue";
import Footer from "~/components/layout/Footer.vue";
</script>

<template>
  <div>
    <div id="main">
      <DefaultHeader />
      <slot />
      <Footer />
    </div>
  </div>
</template>
