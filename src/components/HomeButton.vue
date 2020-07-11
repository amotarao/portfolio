<template>
  <div :class="$style.wrapper">
    <nuxt-link :class="$style.button" to="/"> <IconTwitter /></nuxt-link>
    <p :class="$style.text">あもん ポートフォリオ</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend();
</script>

<style lang="scss" module>
.wrapper {
  position: sticky;
  top: 16px;
  margin-left: 16px;
  margin-bottom: -48px;
  display: flex;
  align-items: center;
}

.button {
  @include square-button-small();
  @include shadow(8px);

  display: block;
  margin-right: 1em;
}

.text {
  font-weight: bold;
}
</style>
