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
$blur: 4px;
$blur2: 7px;

.button {
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  background: #f0f0f5;
  padding: 16px 64px;
  box-shadow: $blur $blur $blur2 rgba(#ccccd0, 0.5), #{-$blur} #{-$blur} $blur2 rgba(#fff, 0.5),
    inset $blur $blur $blur2 rgba(#ccccd0, 0), inset #{-$blur} #{-$blur} $blur2 rgba(#fff, 0);
  transition: box-shadow 0.1s ease-out;
  color: inherit;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    box-shadow: $blur $blur $blur2 rgba(#ccccd0, 0), #{-$blur} #{-$blur} $blur2 rgba(#fff, 0),
      inset $blur $blur $blur2 rgba(#ccccd0, 0.5), inset #{-$blur} #{-$blur} $blur2 rgba(#fff, 0.5);
    transition: box-shadow 0.2s ease-out;
  }
}

.icon {
  height: 1em;
  width: 1em;
  margin-right: 0.5em;
}
</style>
