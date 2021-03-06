// From https://vuetifyjs.com/en/getting-started/installation/#usage-with-vuepress

// register vuetify as a global plugin with vuepress
// .vuepress/enhanceApp.js
import Vuetify from 'vuetify'
// vuetify.min.css is not actually loaded here, as it messes with the default vuepress theme,
// It should be loaded in each component that actually makes use of vuetify
//import "vuetify/dist/vuetify.min.css";

import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';

// Wikit
// https://wmde.github.io/wikit/?path=/story/documentation-getting-started--page
import '@wmde/wikit-vue-components/dist/wikit-vue-components.css';

// For fix for "Unknown custom element"
// https://github.com/vuejs/vuepress/issues/1173#issuecomment-470534176
import pageComponents from '@internal/page-components'

export default ({
  Vue,      // the version of Vue being used in the VuePress app
  options,  // the options for the root Vue instance
  router,   // the router instance for the app
  siteData,  // site metadata
}) => {
  Vue.use(Vuetify)
  options.vuetify = new Vuetify({})
  Vue.use(VueFilterDateFormat);

  // For fix for "Unknown custom element"
  // https://github.com/vuejs/vuepress/issues/1173#issuecomment-470534176
  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }
}
