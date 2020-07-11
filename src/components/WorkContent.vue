<template>
  <section :class="$style.wrapper">
    <nuxt-content :class="$style.content" :document="document" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" module>
.wrapper {
  margin: auto;
  max-width: calc(640px + var(--spacing) * 2);
  padding: 0 var(--spacing);
}

.content {
  line-height: 1.5;

  > * + * {
    margin-top: 2rem;
  }

  > * + h2 {
    margin-top: 4rem;
  }

  > * + h3 {
    margin-top: 3rem;
  }

  > h2 + h3 {
    margin-top: 2rem;
  }

  ul,
  ol {
    padding-left: 2em;
  }

  li {
    margin-top: 0.4em;
  }
}
</style>
