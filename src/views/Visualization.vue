<template>
  <section>
    <button @click="values = insertionSort(values)">Sort with recursive insertion sort</button>
    <div id="sort-visualization">
      <div v-for="(value, index) in values" :key="index" :style="'height: ' + value + 'rem'"></div>
    </div>
    <ContactInfo />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContactInfo from "../components/ContactInfo.vue";

@Component({
  components: {
    ContactInfo
  }
})
export default class Visualization extends Vue {
  values: number[] = [];

  mounted() {
    this.values = this.createRandomNumbers();
  }

  calculateNumberOfBars(): number {
    const containerWidth: number =
      document.getElementById("sort-visualization")?.offsetWidth || 0;
    const fontSize = parseInt(
      getComputedStyle(document.documentElement).fontSize
    );
    return Math.floor(containerWidth / fontSize);
  }

  createRandomNumbers(): number[] {
    const numbers: number[] = [];
    for (let i = 0; i < this.calculateNumberOfBars(); i++) {
      numbers.push(Math.floor(Math.random() * 29) + 1);
    }
    return numbers;
  }

  async insertionSort(values: number[], n: number = values.length - 1): Promise<number[]> {
    if (n > 0) {
      this.insertionSort(values, n - 1);

      const x = values[n];
      let j = n - 1;

      while (j >= 0 && values[j] > x) {
        Vue.set(values, j + 1, values[j]);
        j = j - 1;
      }

      Vue.set(values, j + 1, x);
    }

    await this.wait(50);
    return values;
  }

  wait(ms: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(ms);
        return [4, 4];
      }, ms);
    });
  }
}
</script>

<style scoped lang="scss">
@import "../variables.scss";

button {
  margin: 2em;
}

#sort-visualization {
  display: flex;
  align-items: baseline;
  padding: 1em;

  div {
    width: 1rem;
    background: $trump;
    border: 1px solid $dark-knight;
    margin: 1px;
  }
}
</style>
