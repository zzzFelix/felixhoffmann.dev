<template>
  <section class="bookSort">
    <Introduction headline="Sorting Algorithm Visualizer">
      A visualization of popular sorting algorithms using books, sorting them by color.
    </Introduction>
    <section class="headline">
      <h2>Sort by color</h2>
      <a
        @click="hasBeenStopped = false; bubbleSort()"
        href="#/book-sort"
        v-if="(hasBeenStarted === false && hasBeenStopped === false) || hasBeenResetted === true"
      >Bubble Sort</a>
      <a
        @click="stop()"
        v-if="hasBeenStarted === true && hasBeenStopped === false"
        href="#/book-sort"
      >Stop</a>
      <a
        @click="hasBeenStopped = false; bubbleSort()"
        v-if="hasBeenStarted === true && hasBeenStopped === true"
        href="#/book-sort"
      >Weiter</a>
      <a @click="reset()" href="#/book-sort">Reset</a>
    </section>

    <div class="speed-illustration-container">
      <img
        src="./../assets/speed.svg"
        class="speed-illustration"
        alt="Choose efficiency and timeout"
      />
    </div>
    <section class="bookshelf">
      <div class="compartment" v-for="(books, index) in shelvedBooks" :key="index">
        <div
          v-for="book in books"
          :key="book.id"
          class="book"
          :style="setBackgroundColor(book) + setDimensions(book)"
        ></div>
      </div>
    </section>

    <TechStack />
    <ContactInfo />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TechStack from "@/components/TechStack.vue";
import Introduction from "@/components/Introduction.vue";
import ContactInfo from "@/components/ContactInfo.vue";

function getHueFromBookColor(book: Book) {
  const v = Math.max(book.red, book.green, book.blue),
    n = v - Math.min(book.red, book.green, book.blue);
  const h =
    n &&
    (v == book.red
      ? (book.green - book.blue) / n
      : v == book.green
      ? 2 + (book.blue - book.red) / n
      : 4 + (book.red - book.green) / n);
  return 60 * (h < 0 ? h + 6 : h);
}

function compareBooks(current: Book, next: Book) {
  const sumCurrent = getHueFromBookColor(current);
  const sumNext = getHueFromBookColor(next);

  if (sumCurrent < sumNext) {
    return -1;
  } else if (sumCurrent > sumNext) {
    return 1;
  }

  return 0;
}

function* bubbleSort(books: Book[]) {
  const n = books.length;

  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (compareBooks(books[i - 1], books[i]) === -1) {
        const temp = books[i];
        Vue.set(books, i, books[i - 1]);
        Vue.set(books, i - 1, temp);
        swapped = true;
        yield;
      }
    }
  }
}

@Component({
  components: {
    TechStack,
    ContactInfo,
    Introduction
  }
})
export default class BookSort extends Vue {
  numberOfBooks = 120;
  efficiency = "BUBBLE";
  speed = 50;
  books: Book[] = [];

  // status booleans
  hasBeenStarted = false;
  hasBeenStopped = false;
  hasBeenResetted = false;

  mounted() {
    this.createRandomBooks();
  }

  createRandomBooks() {
    for (let i = 0; i < this.numberOfBooks; i++) {
      this.books.push(this.createRandomBook(i));
    }
  }

  reset() {
    this.stop();
    this.books = [];
    this.createRandomBooks();
    this.hasBeenStarted = false;
    this.hasBeenResetted = true;
  }

  stop() {
    this.hasBeenStopped = true;
  }

  get shelvedBooks() {
    const shelvedBooks = [];

    let before = 0;
    for (let i = 15; i <= this.numberOfBooks; i = i + 15) {
      shelvedBooks.push(this.books.slice(before, i));
      before = i;
    }

    return shelvedBooks;
  }

  bubbleSort(): void {
    this.hasBeenStarted = true;
    if (!this.hasBeenStopped && !bubbleSort(this.books).next().done) {
      setTimeout(() => {
        this.bubbleSort();
      }, this.speed);
    }
  }

  createRandomBook(id: number): Book {
    const book: Book = {
      id: id,
      red: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      width: Math.floor(Math.random() * (30 - 15 + 1) + 15),
      height: Math.floor(Math.random() * (150 - 85 + 1) + 85)
    };
    return book;
  }

  setBackgroundColor(book: Book): string {
    return `background: rgb(${book.red}, ${book.green}, ${book.blue});`;
  }

  setDimensions(book: Book): string {
    return `width: ${book.width}px; height: ${book.height}px;`;
  }
}
interface Book {
  id: number;
  red: number;
  green: number;
  blue: number;
  width: number;
  height: number;
}
</script>

<style lang="scss">
@import "../variables.scss";

.bookSort {
  .headline {
    text-align: center;
    padding: 1em;
    font-size: 2em;

    a {
      display: block;
    }
  }
  .speed-illustration-container {
      display: grid;
      justify-items: center;
      height: 90px;
      
    .speed-illustration {
      width: 10em;
      margin-top: -1.87em;
      margin-left: -25em;
    }
  }
}

.bookshelf {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  width: 932px;
  border: 1em solid lighten($dark-knight, 10);
  border-bottom-width: 4em;
  margin-bottom: 4em;

  .compartment {
    display: flex;
    height: 160px;
    width: 450px;
    align-items: flex-end;
    border: 0.5em solid $dark-knight;

    &:nth-of-type(2),
    &:nth-of-type(3),
    &:nth-of-type(6) {
      display: grid;
      grid-template-columns: repeat(15, 1fr);
    }

    .book {
      border: 0.1px solid darken($mud, 20);
      border-bottom-width: 0;
      margin-right: 0.1px;
    }
  }
}
</style>