<template>
  <section class="introduction">
    <div class="introduction-inner">
      <h1>{{ headline }}</h1>
      <p>
        <slot />
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    headline: {
      type: String,
      required: true
    }
  }
})
export default class Introduction extends Vue {}
</script>

<style scoped lang="scss">
@import "../variables.scss";

.introduction {
  color: white;
  background: $trump;
  text-align: left;
  display: flex;
  justify-content: center;
  width: 100%;

  .introduction-inner {
    padding: (2 * $padding-wide) $padding-wide 9em;
    width: 100%;
    max-width: 62.5em;

    h1 {
      font-size: 4.375rem;
      font-weight: 200;
    }

    p {
      hyphens: manual;
      width: clamp(15em, 60%, 30em);
    }
  }
}
</style>
