<template>
  <section class="contact-info">
    <div>
      <p>Send me a message</p>
      <p>
        <a href="mailto:hello@felixhoffmann.dev">hello@felixhoffmann.dev</a>
      </p>
    </div>
    <div class="social">
      <div>
        <p>Find me on</p>
        <p>
          <a href="https://stackoverflow.com/users/4598786/felix">Stack Overflow</a>
        </p>
      </div>
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
  column-gap: 3em;
  padding: $padding-wide;
  margin: auto;
  max-width: 1000px;

  .social {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1em;
    align-items: end;
  }

  p {
    line-height: 1.4;
  }
}
</style>
