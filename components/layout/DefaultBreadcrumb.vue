<script setup lang="ts">

const route = useRoute();

const home = ref({
    icon: 'mdi mdi-home'
});
const items = ref([
    { label: route.fullPath }
]);
</script>

<template>
    <div class="card flex my-5">
        <Breadcrumb :home="home" :model="items" />
    </div>
</template>


