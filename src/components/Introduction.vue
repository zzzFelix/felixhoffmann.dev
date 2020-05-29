<template>
  <section class="introduction">
    <h1>Hello</h1>
    <p>
      I am passionate about web develop&shy;ment, NoSQL data&shy;bases, and
      Oxford com&shy;mas.
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Introduction extends Vue {}
</script>

<style scoped lang="scss">
@import "../variables.scss";

.introduction {
  color: white;
  background: $trump;
  padding: (2 * $padding-wide) $padding-wide 9em;
  text-align: left;

  h1 {
    font-size: 4.375rem;
    font-weight: 200;
  }

  p {
    hyphens: manual;
    //noinspection CssInvalidFunction
    width: clamp(12em, 65%, 30em);
  }
}
</style>
