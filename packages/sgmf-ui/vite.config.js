import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // lib: {
    //   // eslint-disable-next-line no-undef
    //   entry: path.resolve(__dirname, 'src/index.js'),
    //   name: 'SgmfUiComponents',
    //   fileName: (format) => `sgmf-ui-components.${format}.js`,
    // },
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
      },
      preserveEntrySignatures: 'strict',
    },
  },
});
