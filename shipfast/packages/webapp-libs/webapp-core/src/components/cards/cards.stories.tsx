import { Meta, StoryObj } from '@storybook/react';

import { Card, CardContent, CardHeader } from './';

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = {
  title: 'Core/Card',
  component: Card,
};

export default meta;

export const Open: Story = {
  args: {
    children: <CardContent>Card content</CardContent>,
  },
};

export const CustomHeader: Story = {
  args: {
    children: (
      <>
        <CardHeader>CustomHeader</CardHeader>
        <CardContent>Card content</CardContent>
      </>
    ),
  },
};
