<template>
  <div>
    <TheHeader>{{ page.title }}</TheHeader>
    <section :class="$style.content">
      <nuxt-content :document="page" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

type WorkType = {
  title: string;
};

export default Vue.extend({
  async asyncData({ params, $content }) {
    const page = await $content('works', params.slug).fetch<WorkType>();
    return {
      page,
      title: page.title,
    };
  },
  head() {
    return {
      title: (this as any).title,
    };
  },
});
</script>

<style lang="scss" module>
.content {
  margin: auto;
  max-width: 702px;
  padding: 0 32px;
}
</style>
