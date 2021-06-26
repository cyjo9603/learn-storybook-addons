import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Submit = Template.bind({});
Submit.args = {
  type: 'submit',
  text: 'Button',
};

export const _Button = Template.bind({});
_Button.args = {
  type: 'button',
  text: 'Button',
};
