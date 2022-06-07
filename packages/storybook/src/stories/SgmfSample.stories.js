import { SgmfSample } from 'sgmf-ui';
export default {
  title: 'Example/SGMF Sample',
  component: SgmfSample,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SgmfSample },

  // Here we define the `template`
  template: '<sgmf-sample />',
});

export const Default = Template.bind({});
