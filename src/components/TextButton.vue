<template>
  <a :class="$style.button" :href="href" target="_blank" rel="noopener"><IconLink :class="$style.icon" /><slot /></a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    href: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" module>
.button {
  @include button-medium();
  @include shadow(8px);

  display: inline-flex;
  align-items: center;
}

.icon {
  height: 1em;
  width: 1em;
  margin-right: 0.5em;
}
</style>
