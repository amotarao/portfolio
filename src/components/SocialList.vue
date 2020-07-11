<template>
  <ul :class="$style.list">
    <li v-for="(item, i) in items" :key="i">
      <SocialButton v-bind="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    items() {
      return [
        { type: 'twitter', href: 'https://twitter.com/amotarao' },
        { type: 'github', href: 'https://github.com/amotarao' },
      ];
    },
  },
});
</script>

<style lang="scss" module>
.list {
  list-style: none;
  display: grid;
  justify-content: center;
  gap: $spacing-small;
  grid-template-columns: repeat(auto-fit, 64px);
  margin: 64px 0;
  padding: 0 var(--spacing);
}
</style>
