<script lang="ts" setup>
import DefaultBreadcrumb from "../../components/layout/DefaultBreadcrumb.vue";
</script>

<template>
  <div class="container mx-auto">
    <DefaultBreadcrumb />

    <h1>Realisations</h1>

    <Splitter style="height: 300px" class="my-10">
      <SplitterPanel class="flex items-center justify-center relative">
        <img src="/logo.png" alt="" class="absolute top-0 left-0">
      </SplitterPanel>
      <SplitterPanel class="flex items-center justify-center relative">
        <img src="/logo.png" alt="" class="absolute top-0 left-0">
      </SplitterPanel>
    </Splitter>
  </div>
</template>
