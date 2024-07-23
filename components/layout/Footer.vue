<script setup lang="ts">
const items = ref([
  [
    {
      label: "Notre expertise",
      icon: "mdi mdi-certificate",
    },
    {
      label: "Realisations",
      icon: "mdi mdi-certificate",
    },
    {
      label: "Contact",
      icon: "mdi mdi-certificate",
    },
  ],
  [
    {
      label: "Notre expertise",
      icon: "mdi mdi-certificate",
    },
    {
      label: "Realisations",
      icon: "mdi mdi-certificate",
    },
    {
      label: "Contact",
      icon: "mdi mdi-certificate",
    },
  ],
  [
    {
      label: "Notre expertise",
      icon: "mdi mdi-certificate",
    },
    {
      label: "Realisations",
      icon: "mdi mdi-certificate",
    },
    {
      label: "Contact",
      icon: "mdi mdi-certificate",
    },
  ],
]);
</script>

<template>
  <div class="bg-primary py-12">
    <div class="flex flex-wrap md:justify-center">
      <div
        class="basis-1/2 md:basis-1/5 p-4 md:p-0"
        v-for="(item, index) in items"
        :key="index"
      >
        <div
          v-for="(i, index) in item"
          :key="index"
          class="p-4 text-white flex items-center"
        >
          <i :class="[i.icon, 'text-3xl']" class="mr-2"></i>{{ i.label }}
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="mt-20 text-white">Copyright © 2024. All rights reserved.</div>
    </div>
  </div>
</template>
