<template>
  <section class="fake-video">
    <img
      src="./../assets/la-sunset.jpg"
      alt="Fake video of a Los Angeles sunset"
    />
    <p>
      Image courtesy of
      <a
        href="https://unsplash.com/@nate_dumlao"
        target="_blank"
        rel="noopener noreferrer"
        id="dark-link"
      >
        Nathan Dumlao 
        <font-awesome-icon :icon="['fas', 'external-link-alt']" />
      </a>
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FakeVideo extends Vue {}
</script>

<style scoped lang="scss">
@import "../variables.scss";

.fake-video {
  margin: -4.6875rem auto 0;
  text-align: center;
  padding: 0 $padding-narrow;
  max-width: 666px;

  img {
    box-shadow: $box-shadow;
    width: 100%;
  }

  p {
    text-align: right;
    font-weight: 200;
    font-size: 0.75rem;
    margin-top: 0.1em;
    color: $dark-knight;

    a#dark-link {
      color: $dark-knight;
      font-weight: 300;
    }
  }
}
</style>
