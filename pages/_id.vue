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
    const allow = ["andrew", "chehao"];
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
.title {
  font-size: 50px !important;
}
</style>
