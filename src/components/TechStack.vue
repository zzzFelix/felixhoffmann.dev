<template>
  <section class="tech-stack">
    <p class="title">I love working with</p>
    <p>
      <font-awesome-icon :icon="['fab', 'vuejs']" />
      <font-awesome-icon :icon="['fab', 'js-square']" />
      <font-awesome-icon :icon="['fab', 'html5']" />
      <font-awesome-icon :icon="['fab', 'css3']" />
      <font-awesome-icon :icon="['fab', 'aws']" />
      <font-awesome-icon :icon="['fab', 'github']" />
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
    justify-content: space-around;
    font-weight: 100;

    &.title {
      color: $dark-knight;
      margin-bottom: 1em;
    }

    svg {
      color: $hamburg-skies;
      font-size: 1.5rem;

      &:hover {
        color: $trump;
      }
    }
  }
}
</style>
