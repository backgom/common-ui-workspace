import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import importCss from 'postcss-import';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  mode: import.meta.env?.PROD ? 'production' : 'development',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [importCss(), autoprefixer()],
    },
  },
  build: {
    // lib: {
    //   // eslint-disable-next-line no-undef
    //   entry: path.resolve(__dirname, 'src/index.js'),
    //   name: 'CommonUiComponents',
    //   fileName: (format) => `common-ui-components.${format}.js`,
    // },
    cssCodeSplit: false,
    rollupOptions: {
      input: './src/index.js',
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
        // inlineDynamicImports: true,
        entryFileNames: 'index.js',
        preserveModules: true,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'assets/[name][extname]';
          }

          return 'assets/[name].[hash][extname]';
        },
      },
      preserveEntrySignatures: 'strict',
    },
  },
});
