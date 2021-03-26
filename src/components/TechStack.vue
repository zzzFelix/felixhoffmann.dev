<template>
  <section class="tech-stack">
    <p class="title">
      Made with
    </p>
    <p>
      <font-awesome-icon
        v-for="tech in techStack"
        :key="tech.name"
        :title="tech.name"
        :icon="['fab', tech.icon]"
      />
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TechStack extends Vue {
  selectedTechnology = "";

  techStack = [
    { name: "Vue.js", icon: "vuejs" },
    { name: "Javascript", icon: "js" },
    { name: "Github", icon: "github" },
    { name: "Sass", icon: "sass" },
    { name: "Figma", icon: "figma" }
  ];
}
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
    font-weight: 200;

    em {
      color: $trump;
    }

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
