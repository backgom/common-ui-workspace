const sgmfUiComponentPlugin = {
  install(app) {
    const components = import.meta.globEager('./components/**/*/.vue');
    components.forEach((component) => app.component(component));
  },
};

export default sgmfUiComponentPlugin;

import SgmfSample from '@/components/SgmfSample/SgmfSample.vue';
import SgmfSample2 from '@/components/SgmfSample2/SgmfSample2.vue';
export { SgmfSample, SgmfSample2 };
