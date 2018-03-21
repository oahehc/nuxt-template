<template>
  <section class="container">
    <div>
      <h1 class="title">COUNTER</h1>
      <div class="links">
        <nuxt-link class="button--green" to="/">HOME</nuxt-link>
      </div>
      <div class="counter">
        <span>{{ amount }}</span>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import axios from "axios";

export default {
  computed: {
    amount() {
      return this.$store.state.counter.amount;
    }
  },
  methods: {
    ...mapMutations({
      increment: "counter/increment",
      decrement: "counter/decrement"
    })
  },
  async fetch({ store, params }) {
    // const { data } = await axios.get("https://api.ipify.org?format=json");
    // store.commit("counter/setDefault", 9);
    await store.dispatch("counter/init");
  }
};
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}

.counter {
  span {
    padding: 10px;
    font-size: 20px;
  }
  button {
    font-size: 20px;
    margin: 5px;
  }
}
</style>
