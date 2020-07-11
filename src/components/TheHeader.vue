<template>
  <header :class="$style.header">
    <h1><slot /></h1>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" module>
.header {
  font-size: 24px;
  text-align: center;
  padding: 64px var(--spacing);
}
</style>
