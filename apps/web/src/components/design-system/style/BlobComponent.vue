<script setup lang="ts">
export interface Props {
  color?: 'blue' | 'red';
  // TODO: add responsivity
}

const props = withDefaults(defineProps<Props>(), {
  color: 'blue',
});
</script>

<template>
  <template v-if="props.color == 'blue'">
    <img
      src="@/assets/background/blue-blob.svg"
      class="blob"
      :alt="'blue background blob'"
    />
  </template>
  <template v-else>
    <img
      src="@/assets/background/red-blob.svg"
      class="blob"
      :alt="'red background blob'"
    />
  </template>
</template>

<style scoped lang="scss">
.blob {
  filter: blur(32px);
  z-index: -1;
}
</style>
