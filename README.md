# TODO
plugins & middleware


---
# Nuxt default structure + below setting
- scss
- postcss-autoprefix
- vuex
- i18n


---
## Build Setup
``` bash
# install dependencies
$ npm install # Or yarn install
# serve with hot reload at localhost:3000
$ npm run dev
# build for production and launch server
$ npm run build
$ npm start
# generate static project
$ npm run generate
```
For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


---
## Structure
* https://nuxtjs.org/guide/directory-structure
```
| |- assets        with css/file/url-loader     * https://nuxtjs.org/guide/assets#webpacked
| |- components
| |- layouts       template design              * https://nuxtjs.org/guide/views#layouts
| |- middleware                                 * https://nuxtjs.org/guide/routing#middleware
| |- pages         route                        * https://nuxtjs.org/guide/routing
| |- plugins                                    * https://nuxtjs.org/guide/plugins
| |- static        clone wo loader              * https://nuxtjs.org/guide/assets#static
| |- store         Vuex                         * https://nuxtjs.org/guide/vuex-store
```
