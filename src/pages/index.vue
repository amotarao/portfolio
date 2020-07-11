<template>
  <div>
    <TheHeader>あもん ポートフォリオ</TheHeader>
    <WorkList :works="works" />
    <SocialList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async asyncData({ $content }) {
    const works = await $content('works').fetch();
    return { works };
  },
});
</script>
