<template>
  <div>
    <WorkHeader v-bind="headerAttrs">{{ page.title }}</WorkHeader>
    <WorkContent :document="page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

type WorkType = {
  title: string;
  introduction: string;
  url: string;
  thumbnailUrl: string;
};

export default Vue.extend({
  async asyncData({ params, $content }) {
    const page = await $content('works', params.slug).fetch<WorkType>();
    return {
      page,
      title: page.title,
      introduction: page.introduction,
      url: page.url,
      thumbnailUrl: page.thumbnailUrl,
    };
  },
  data() {
    return {
      title: '',
      introduction: '',
      url: '',
      thumbnailUrl: '',
    };
  },
  computed: {
    headerAttrs() {
      return {
        title: (this as any).title,
        introduction: (this as any).introduction,
        url: (this as any).url,
        imageSrc: (this as any).thumbnailUrl,
      };
    },
  },
  head() {
    return {
      title: (this as any).title,
    };
  },
});
</script>
