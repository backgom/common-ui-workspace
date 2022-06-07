import { app } from '@storybook/vue3';
// Styles
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Vuetify
import { createVuetify } from 'vuetify';

const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify);

export default vuetify;

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
