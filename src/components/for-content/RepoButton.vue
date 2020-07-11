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
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  background: #f0f0f5;
  padding: 8px 16px;
  box-shadow: $blur $blur $blur2 rgba(#ccccd0, 0.5), #{-$blur} #{-$blur} $blur2 rgba(#fff, 0.5),
    inset $blur $blur $blur2 rgba(#ccccd0, 0), inset #{-$blur} #{-$blur} $blur2 rgba(#fff, 0);
  transition: box-shadow 0.1s ease-out;
  color: inherit;
  text-decoration: none;
  font-size: 0.8em;

  &:hover {
    box-shadow: $blur $blur $blur2 rgba(#ccccd0, 0), #{-$blur} #{-$blur} $blur2 rgba(#fff, 0),
      inset $blur $blur $blur2 rgba(#ccccd0, 0.5), inset #{-$blur} #{-$blur} $blur2 rgba(#fff, 0.5);
    transition: box-shadow 0.2s ease-out;
  }

  &[data-type='github'] {
    color: #24292e;
  }
}

.icon {
  height: 1em;
  width: 1em;
  margin-right: 0.5em;
}
</style>
