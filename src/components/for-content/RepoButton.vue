<template>
  <a :class="$style.button" :href="href" target="_blank" rel="noopener" :data-type="type">
    <IconGitHub v-if="type === 'github'" :class="$style.icon" />
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: true,
      validator: (type) => ['twitter', 'github'].includes(type),
    },
    href: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" module>
$blur: 4px;
$blur2: 7px;

.button {
  @include button-small();
  @include shadow(8px);

  display: inline-flex;
  align-items: center;
}

.icon {
  height: 1em;
  width: 1em;
  margin-right: 0.5em;

  .button[data-type='github'] & {
    color: $github-color;
  }
}
</style>
