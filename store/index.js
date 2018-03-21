import { myPlugin } from './myPlugin';

export const plugins = [myPlugin];

export const actions = {
  async nuxtServerInit(context, { req }) { // https://nuxtjs.org/guide/vuex-store#the-nuxtserverinit-action
    console.log('==nuxtServerInit');
    // await context.dispatch('xxx');
  }
};

export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'en'
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
};
