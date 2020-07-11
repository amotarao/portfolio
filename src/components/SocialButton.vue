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
  @include square-button-medium();
  @include shadow(8px);

  display: block;

  &[data-type='twitter'] {
    color: $twitter-color;
  }

  &[data-type='github'] {
    color: $github-color;
  }
}
</style>
