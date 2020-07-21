<template>
  <section class="stories">
    <h2>Projects</h2>
    <div class="stories-inner">
      <StoryLink
        title="This is but a mock"
        description="There will be content eventually. I am a lazy person."
        url="https://google.com"
        url-title="Medium.com"
      />
      <StoryLink
        title="This is but a mock"
        description="There will be content eventually. I am a lazy person."
        url="https://google.com"
        url-title="Medium.com"
      />
      <StoryLink
        title="This is but a mock"
        description="There will be content eventually. I am a lazy person."
        url="https://google.com"
        url-title="Medium.com"
      />
      <StoryLink
        title="This is but a mock"
        description="There will be content eventually. I am a lazy person."
        url="https://google.com"
        url-title="Medium.com"
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
