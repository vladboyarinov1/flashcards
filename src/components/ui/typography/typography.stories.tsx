import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  component: Typography.H1,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography.H1>

export default meta
type Story = StoryObj<typeof meta>

export const AllTypography: Story = {
  args: {},
  render: () => (
    <div style={{ alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
      <Typography.Large>Large text</Typography.Large>
      <Typography.H1>H1</Typography.H1>
      <Typography.H2>H2</Typography.H2>
      <Typography.H3>H3</Typography.H3>
      <Typography.Body1>body1</Typography.Body1>
      <Typography.Body2>body2</Typography.Body2>
      <Typography.Subtitle1>subtitle1</Typography.Subtitle1>
      <Typography.Subtitle2>subtitle2</Typography.Subtitle2>
      <Typography.Caption>caption</Typography.Caption>
      <Typography.Overline>overline</Typography.Overline>
      <Typography.Link1>link1</Typography.Link1>
      <Typography.Link2>link2</Typography.Link2>
    </div>
  ),
}
