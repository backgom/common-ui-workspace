const commonUiComponentPlugin = {
  install(app) {
    const components = import.meta.globEager('./components/**/*/.vue');
    components.forEach((component) => app.component(component));
  },
};

export default commonUiComponentPlugin;

import CommonSample from '@/components/CommonSample/CommonSample.vue';
import CommonSample2 from '@/components/CommonSample2/CommonSample2.vue';
export { CommonSample, CommonSample2 };
