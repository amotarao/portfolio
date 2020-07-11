<template>
  <a :class="$style.button" :href="href" target="_blank" rel="noopener" :data-type="type">
    <IconTwitter v-if="type === 'twitter'" />
    <IconGitHub v-else-if="type === 'github'" />
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
.button {
  display: block;
  border-radius: 8px;
  background: #f0f0f5;
  height: 64px;
  width: 64px;
  padding: 16px;
  box-shadow: 9px 9px 16px rgba(#ccccd0, 0.5), -9px -9px 16px rgba(#fff, 0.5), inset 9px 9px 16px rgba(#ccccd0, 0),
    inset -9px -9px 16px rgba(#fff, 0);
  transition: box-shadow 0.1s ease-out;

  &:hover {
    box-shadow: 9px 9px 16px rgba(#ccccd0, 0), -9px -9px 16px rgba(#fff, 0), inset 9px 9px 16px rgba(#ccccd0, 0.5),
      inset -9px -9px 16px rgba(#fff, 0.5);
    transition: box-shadow 0.2s ease-out;
  }

  &[data-type='twitter'] {
    color: #1da1f2;
  }

  &[data-type='github'] {
    color: #24292e;
  }
}
</style>
