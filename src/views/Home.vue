<template>
  <section class="home">
    <Introduction
      headline="Hello">
      I am Felix Hoffmann, soft&shy;ware engineer passionate about web develop&shy;ment, algorithms and data struc&shy;tures, and NoSQL data&shy;bases.
    </Introduction>
    <FakeVideo />
    <Stories />
    <TechStack />
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
export default class Home extends Vue {}
</script>

<style lang="scss"></style>
