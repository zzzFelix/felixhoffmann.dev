<template>
  <section class="stories">
    <h2>Projects</h2>
    <div class="stories-inner">
      <StoryLink
        title="Sorting Algorithm Visualizer"
        description="Sort books by color using different sorting algorithms. Some slow, others even slower."
        url="#/book-sort"
        url-title="felixhoffman.dev"
      />
      <StoryLink
        title="Future Projects"
        description="Awesome stuff in the making. This is but a placeholder. I'm lazy."
        url-title="Coming soon"
        :inactive="true"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StoryLink from "@/components/StoryLink.vue";

@Component({
  components: {
    StoryLink
  }
})
export default class Stories extends Vue {}
</script>

<style scoped lang="scss">
@import "../variables.scss";

.stories {
  padding: $padding-wide;
  max-width: 1000px;
  margin: auto;
}

@media only screen and (min-width: 768px) {
  .stories-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.375em;
  }
}

h2 {
  font-size: 2.5rem;
  font-weight: 200;
  text-align: left;
  margin-bottom: 0.25em;
}
</style>
