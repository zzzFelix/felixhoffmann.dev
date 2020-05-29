<template>
  <section class="stories">
    <h2>Stories</h2>
    <StoryLink
      title="Never mind Google Fonts"
      description="System fonts make for great UX. And they speed up your app. 🚀"
      url="https://google.com"
      url-title="Medium.com"
    />
    <StoryLink
      title="This is but a mock"
      description="There will be content eventually. A desktop version is also in the making."
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
