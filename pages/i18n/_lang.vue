<template>
  <section class="container">
    <div>
      <h1 class="title">i18n</h1>
      <h2 class="subtitle">
        {{ $t('home.title') }}<br>
        {{ $t('home.introduction') }}
      </h2>
      <div class="links">
        <nuxt-link class="button--grey" to="/i18n">{{ $t('links.english') }}</nuxt-link>
        <nuxt-link class="button--grey" to="/i18n/fr">{{ $t('links.french') }}</nuxt-link>
      </div>
      <div class="links">
        <nuxt-link class="button--green" to="/">{{ $t('links.home') }}</nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {}
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
</style>
