import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';

import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'

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
  Vue.use(VueFilterDateFormat);
  Vue.use(VueGoodTablePlugin);

  // For fix for "Unknown custom element"
  // https://github.com/vuejs/vuepress/issues/1173#issuecomment-470534176
  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }
}
