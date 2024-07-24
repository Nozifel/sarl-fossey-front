<script lang="ts" setup>
type Props = {
  isPrimary?: boolean;
  columns?: number;
};

const props = withDefaults(defineProps<Props>(), {
  isPrimary: true,
  columns: 1,
});
</script>

<template>
  <div :class="{ 'bg-primary': props.isPrimary }">
    <div class="container py-16 mx-auto">
      <div class="grid gap-20" :class="`grid-cols-${props.columns}`">
          <slot />
      </div>
    </div>
  </div>
</template>
