<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt
      </h1>
      <h2 class="subtitle">
        IP: {{ip}}
      </h2>
      <div class="links">
        <nuxt-link class="button--green" to="/counter">COUNTER</nuxt-link>
        <nuxt-link class="button--green" to="/i18n">I18N</nuxt-link>
      </div>
      <div class="links">
        <nuxt-link v-for="user in userList"
          :key="user.id"
          class="button--grey" :to="user.id">
          {{user.name}}
          </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import axios from "axios";
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  },
  props: {},
  data: () => ({
    userList: [
      {
        id: "andrew",
        name: "Andrew"
      },
      {
        id: "chehao",
        name: "CheHao"
      }
    ]
  }),
  methods: {
    // ...mapMutations(['xxx']),
    // ...mapActions(['xxx']),
  },
  computed: {
    // ...mapGetters(['getLoading']),
  },
  watch: {},

  // Vue lifecycle
  beforeCreate() {
    console.log("---beforeCreate");
  },
  created() {
    console.log("---created");
  },
  beforeMount() {
    console.log("---beforeMount");
  },
  mounted() {
    console.log("---mounted");
  },
  beforeUpdate() {
    console.log("---beforeUpdate");
  },
  updated() {
    console.log("---updated");
  },
  beforeDestroy() {
    console.log("---beforeDestroy");
  },
  destroyed() {
    console.log("---destroyed");
  },

  // NUXT
  layout: "default",
  scrollToTop: true, // for nested routes
  async asyncData(context) {
    try {
      const res = await axios.get(`https://api.ipify.org?format=json`);
      return { ip: res.data.ip };
    } catch (e) {
      context.error({ statusCode: 404, message: "Custom Error Message" });
    }
  },
  fetch({ store, params }) {
    // The `fetch` method is used to fill the store before rendering the page
  },
  head() {
    return {
      title: "Home Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "home page description"
        }
      ]
    };
  },
  middleware: "logger"
  // transition() {}, // custom transition https://nuxtjs.org/api/pages-transition
  // validate() {}, // Validator function for dynamic routes
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
  font-family: "Quicksand", "Source Sans Pro", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
