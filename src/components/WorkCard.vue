<template>
  <nuxt-link :class="$style.wrapper" :to="`/works/${slug}/`">
    <div :class="$style.imageWrapper">
      <img :class="$style.image" :src="thumbnailUrl" width="640" height="640" loading="lazy" />
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  inheritAttrs: true,
  props: {
    slug: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" module>
.wrapper {
  @include shadow(16px);

  display: block;
  border-radius: 32px;
  background: $accent-color;
  height: 100%;
  width: 100%;
  padding: $spacing-small;
}

.imageWrapper {
  border-radius: 16px;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.image {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
