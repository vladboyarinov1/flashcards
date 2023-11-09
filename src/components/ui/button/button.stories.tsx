import type { Meta, StoryObj } from '@storybook/react'

import logOut from '@/common/icons/svgs/log-out.svg'

import { Button } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    tabIndex: 1,
    variant: 'primary',
  },
}
export const PrimaryIconButton: Story = {
  args: {
    children: (
      <>
        <img alt={'logOut'} src={logOut} />
        <>Primary Icon Button </>
      </>
    ),
    disabled: false,
    tabIndex: 1,
    variant: 'primary',
  },
}
export const Secondary: Story = {
  args: {
    children: 'Button Secondary',
    disabled: false,
    tabIndex: 1,
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    disabled: false,
    tabIndex: 1,
    variant: 'tertiary',
  },
}
export const Link: Story = {
  args: {
    as: 'a',
    children: 'Link-button',
    disabled: true,
    href: 'https://google.com',
    tabIndex: 1,
    variant: 'link',
  },
}

export const SecondaryIconButton: Story = {
  args: {
    children: (
      <>
        <img alt={'logOut'} src={logOut} />
        <>Primary Icon Button </>
      </>
    ),
    disabled: false,
    tabIndex: 1,
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    tabIndex: 1,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    tabIndex: 1,
    variant: 'primary',
  },
}
