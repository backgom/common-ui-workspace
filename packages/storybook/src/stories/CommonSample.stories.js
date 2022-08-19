import { CommonSample } from '@common/ui';
export default {
  title: 'Example/Common Sample',
  component: CommonSample,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CommonSample },

  // Here we define the `template`
  template: '<CommonSample />',
});

export const Default = Template.bind({});
