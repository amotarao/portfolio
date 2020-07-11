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
.header {
  @include shadow(16px, false);

  height: fit-content;
  padding: 120px var(--spacing) 0;
  margin-bottom: 120px;
  display: grid;
  grid-template-areas:
    'head'
    'introduction'
    'image';
  grid-template-columns: fit-content(1200px);
  grid-template-rows: auto auto fit-content(480px);
  gap: var(--spacing);
  justify-content: center;
}

.head {
  font-size: 32px;
  grid-area: head;
  text-align: center;
}

.introduction {
  grid-area: introduction;
  text-align: center;
  white-space: pre-line;

  p {
    margin-bottom: $spacing;

    @include larger-than($medium) {
      margin-bottom: $spacing-large;
    }
  }
}

.imageWrapper {
  grid-area: image;
  overflow: hidden;
  text-align: center;

  img {
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
