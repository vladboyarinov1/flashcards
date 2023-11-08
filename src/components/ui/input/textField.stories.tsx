import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  argTypes: {
    options: ['default', 'email', 'password', 'search'],
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    initialValue: 'Default ',
    variant: 'default',
  },
}
export const Password: Story = {
  args: {
    initialValue: 'Default ',
    variant: 'password',
  },
}
export const Search: Story = {
  args: {
    initialValue: 'Search response',
    variant: 'search',
  },
}
