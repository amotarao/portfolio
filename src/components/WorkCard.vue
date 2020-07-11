<template>
  <nuxt-link :class="$style.wrapper" :to="`/works/${slug}`">
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
$blur: 9px;
$blur2: 16px;

.wrapper {
  display: block;
  border-radius: 32px;
  background: #f0f0f5;
  height: 100%;
  width: 100%;
  padding: 16px;
  box-shadow: $blur $blur $blur2 rgba(#ccccd0, 0.5), #{-$blur} #{-$blur} $blur2 rgba(#fff, 0.5),
    inset $blur $blur $blur2 rgba(#ccccd0, 0), inset #{-$blur} #{-$blur} $blur2 rgba(#fff, 0);
  transition: box-shadow 0.1s ease-out;

  &:hover {
    box-shadow: $blur $blur $blur2 rgba(#ccccd0, 0), #{-$blur} #{-$blur} $blur2 rgba(#fff, 0),
      inset $blur $blur $blur2 rgba(#ccccd0, 0.5), inset #{-$blur} #{-$blur} $blur2 rgba(#fff, 0.5);
    transition: box-shadow 0.2s ease-out;
  }
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
