import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonType } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: ButtonType.PRIMARY,
  text: 'Button',
};

export const Default = Template.bind({});
Default.args = {
  type: ButtonType.DEFAULT,
  text: 'Button',
};
