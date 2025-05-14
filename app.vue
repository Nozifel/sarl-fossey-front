<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'dark:bg-surface-950 bg-surface-500'
  }
})
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
html{
  font-size: 16px;
  font-family: Roboto, sans-serif;
  font-weight: 300;
}

.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	transform: scale(0.9, 0.9) translateY(-100px);
	filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
	transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
	opacity: 0;
	transform: scale(0.9, 0.9);
	filter: blur(1rem);
}

// Animation for loading datas, alternate between skeleton and data
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-leave-to,
.fade-enter-from {
  opacity: 0;
  transform: scaleY(0);
}

// transition group

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
