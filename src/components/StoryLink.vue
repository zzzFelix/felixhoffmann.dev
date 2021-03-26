<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="no-styles">
    <article :class="{ inactive: inactive }">
      <h1>{{ title }}</h1>
      <p>
        {{ description }}
      </p>
      <p class="link">
        <a :href="url" target="_blank" rel="noopener noreferrer" :class="{ 'no-styles': inactive }">
          {{ urlTitle }}
          <font-awesome-icon :icon="['fas', 'external-link-alt']" v-if="!inactive" />
        </a>
      </p>
    </article>
  </a>
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
      required: false
    },
    urlTitle: {
      type: String,
      required: false
    },
    imageUrl: {
      type: String,
      required: false
    },
    inactive: {
      type: Boolean,
      required: false
    }
  }
})
export default class StoryLink extends Vue {}
</script>

<style scoped lang="scss">
@import "../variables.scss";

a.no-styles {
  color: $dark-knight;
  font-weight: normal;
  text-decoration: none;
}

article {
  background-color: white;
  box-shadow: $box-shadow;
  padding: 1em;
  margin-bottom: 1.375em;

  &.inactive {
    background-color: rgba(white, 0.6);
    color: lighten($dark-knight, 50);
  }

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
