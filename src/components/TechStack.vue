<template>
  <section class="tech-stack">
    <p class="title">
      I love working with
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
    { name: "React", icon: "react" },
    { name: "Javascript", icon: "js" },
    { name: "Node.js", icon: "node" },
    { name: "Amazon Web Services", icon: "aws" },
    { name: "Github", icon: "github" },
    { name: "Docker", icon: "docker" },
    { name: "Sass", icon: "sass" },
    { name: "Java", icon: "java" },
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
