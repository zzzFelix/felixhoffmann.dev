<template>
  <section class="contact-info">
    <p>Send me a message</p>
    <p>
      <a href="mailto:hello@felixhoffmann.dev">hello@felixhoffmann.dev</a>
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ContactInfo extends Vue {}
</script>

<style scoped lang="scss">
@import "../variables.scss";

section {
  padding: $padding-wide;

  p {
    text-align: center;
    line-height: 1.4;
  }
}
</style>
