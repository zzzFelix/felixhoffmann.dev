<template>
  <section class="stories">
    <h2>Stories</h2>
    <StoryLink
      title="En vogue: narrow web design"
      description="Building for mobile AND desktop? Ain't nobody got time for that. Plus: media queries are a pain."
      url="https://google.com"
      url-title="nytimes.com"
    />
    <StoryLink
      title="This is but a mock"
      description="There will be content eventually. I am a lazy person."
      url="https://google.com"
      url-title="Medium.com"
    />
    <StoryLink
      title="Why is there a picture of a sunset?"
      description="Nothing on this website makes any sense. Nobody loves working with Javascript."
      url="https://google.com"
      url-title="Medium.com"
    />
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
}

h2 {
  font-size: 2.5rem;
  font-weight: 200;
  text-align: left;
  margin-bottom: 0.25em;
}
</style>
