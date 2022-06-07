import { app } from '@storybook/vue3';
// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify);

export default vuetify;

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
