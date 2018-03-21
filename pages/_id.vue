<template>
  <section class="container">
    <div>
      <h1 class="title">
        Dynamic Routes: {{paramsId}}
      </h1>
      <div class="links">
        <nuxt-link class="button--green" to="/">HOME</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  layout: "id",
  asyncData({ params }) {
    return { paramsId: params.id };
  },
  validate({ params }) {
    // route param validate
    const allow = ["andrew", "zoey"];
    return allow.indexOf(params.id) > -1;
  },
  head() {
    return {
      title: this.paramsId.toUpperCase()
    };
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
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
