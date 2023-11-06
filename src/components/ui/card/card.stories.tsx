import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardStand: Story = {
  args: {
    background: 'var(--dark-700, #171717)',
    children: 'Card',
    height: 552,
    width: 420,
  },
}
