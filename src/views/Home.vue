<template>
  <section class="home">
    <Introduction />
    <FakeVideo />
    <Stories />
    <!-- <TechStack /> -->
    <ContactInfo />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Introduction from "@/components/Introduction.vue";
import Stories from "@/components/Stories.vue";
import FakeVideo from "@/components/FakeVideo.vue";
import TechStack from "@/components/TechStack.vue";
import ContactInfo from "@/components/ContactInfo.vue";

@Component({
  components: {
    ContactInfo,
    TechStack,
    Introduction,
    FakeVideo,
    Stories
  }
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
