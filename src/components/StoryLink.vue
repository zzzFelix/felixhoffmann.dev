<template>
  <article>
    <h1>{{ title }}</h1>
    <p>
      {{ description }}
    </p>
    <p class="link">
      Read at
      <a :href="url" target="_blank" rel="noopener noreferrer">
        {{ urlTitle }}
        <font-awesome-icon :icon="['fas', 'external-link-alt']" />
      </a>
    </p>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    urlTitle: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: false
    }
  }
})
export default class StoryLink extends Vue {}
</script>

<style scoped lang="scss">
@import "../variables.scss";

article {
  background-color: white;
  box-shadow: $box-shadow;
  padding: 1em;
  margin-bottom: 1.375em;

  h1 {
    font-weight: 600;
  }
  p {
    margin-top: 0.5625em;
    line-height: 1.4;

    &.link {
      text-align: right;
    }
  }
}
</style>
