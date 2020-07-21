<template>
  <section class="contact-info">
    <div class="email">
      <p>Send me a message</p>
      <p>
        <a href="mailto:hello@felixhoffmann.dev">hello@felixhoffmann.dev</a>
      </p>
    </div>
    <div class="social">
      <p>Find me on</p>
      <p>
        <a href="https://github.com/zzzFelix">GitHub</a>
      </p>
    </div>
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
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 5em;
  padding: $padding-wide;
  margin: auto;
  max-width: 1000px;

  p {
    line-height: 1.4;
  }
}
</style>
