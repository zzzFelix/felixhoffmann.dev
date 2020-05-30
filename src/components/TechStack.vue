<template>
  <section class="tech-stack">
    <p class="title">I love working with</p>
    <p>
      <font-awesome-icon :icon="['fab', 'vuejs']" />
      <font-awesome-icon :icon="['fab', 'js']" />
      <font-awesome-icon :icon="['fab', 'html5']" />
      <font-awesome-icon :icon="['fab', 'css3']" />
      <font-awesome-icon :icon="['fab', 'aws']" />
      <font-awesome-icon :icon="['fab', 'github']" />
      <font-awesome-icon :icon="['fab', 'docker']" />
      <font-awesome-icon :icon="['fab', 'font-awesome']" />
      <font-awesome-icon :icon="['fab', 'sass']" />
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TechStack extends Vue {}
</script>

<style scoped lang="scss">
@import "../variables.scss";

section {
  background-color: white;
  padding: $padding-wide;

  p {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-weight: 100;

    &.title {
      color: $dark-knight;
      margin-bottom: 0.5em;
    }

    svg {
      color: $hamburg-skies;
      font-size: 1.5rem;
      margin: 0.5em 0.7em 0;

      &:hover {
        color: $trump;
      }
    }
  }
}
</style>
