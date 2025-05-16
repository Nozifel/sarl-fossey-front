<script setup lang="ts">
onMounted(() => {
  console.log('toto');
})

const edit = ref<boolean>(false);
</script>

<template>
  <div class="callout">
    <Button severity="secondary" class="p-button-sm" @click="edit = !edit">
      <template #icon>
        <Icon name="mdi:pencil" v-if="edit"/>
        <Icon name="mdi:content-save" v-else/>
      </template>
    </Button>
    <h2 v-if="$slots.title" class="text-4xl" :class="{ 'border-amber-300 border-2 rounded-xl': edit }">
      <slot name="title" mdc-unwrap="p" />
    </h2>
    <p class="text-2xl text-orange-500">
      <slot mdc-unwrap="p" />
    </p>
  </div>
</template>
