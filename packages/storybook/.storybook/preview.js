import { makeDecorator } from '@storybook/addons';
import { loadFonts } from '@/plugins/webfontloader';
import vuetify from '@/plugins/vuetify';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (_) => {
    loadFonts();

    return {
      vuetify,
      template: `<v-app>
        <v-container>
          <v-icon large color="green darken-2">1111</v-icon>
          <story />
        </v-container>
      </v-app>`,
    };
  },
];
