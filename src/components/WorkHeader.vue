<template>
  <header :class="$style.header">
    <h1 :class="$style.head">{{ title }}</h1>
    <div :class="$style.introduction">
      <p>{{ introduction }}</p>
      <TextButton v-if="url" :href="url">{{ title }}を開く</TextButton>
    </div>
    <div :class="$style.imageWrapper">
      <img :src="imageSrc" />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      default: null,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" module>
$blur: 9px;
$blur2: 16px;

.header {
  height: fit-content;
  padding-top: 80px;
  margin-bottom: 120px;
  box-shadow: $blur $blur $blur2 rgba(#ccccd0, 0.5), #{-$blur} #{-$blur} $blur2 rgba(#fff, 0.5);
  display: grid;
  grid-template-areas:
    'head'
    'introduction'
    'image';
  grid-template-columns: fit-content(1200px);
  grid-template-rows: auto auto fit-content(480px);
  gap: 32px;
  justify-content: center;
}

.head {
  font-size: 32px;
  grid-area: head;
  text-align: center;
  padding: 0 32px;
}

.introduction {
  grid-area: introduction;
  text-align: center;
  padding: 0 32px;
  white-space: pre-line;

  p {
    margin-bottom: 32px;
  }
}

.imageWrapper {
  grid-area: image;
  overflow: hidden;
  text-align: center;
  padding: 0 32px;

  img {
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
