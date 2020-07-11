<template>
  <ul :class="$style.list">
    <li v-for="(item, i) in works" :key="i" :class="$style.item">
      <WorkCard v-bind="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    works: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style lang="scss" module>
.list {
  list-style: none;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 400px));
  gap: var(--spacing);
  padding: 0 var(--spacing);
}

.item {
  position: relative;
  width: 100%;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  > * {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
