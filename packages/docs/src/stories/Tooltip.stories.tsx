import type { Meta, StoryObj } from '@storybook/react'
import { Box, Heading, Tooltip, TooltipProps } from '@ignite-ui/react'

import { formatDate, getDate } from '../utils/format'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            marginTop: '$5',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

const day = getDate(new Date())
const date = formatDate(new Date())

export const Default: StoryObj<TooltipProps> = {
  args: {
    title: `${date} - Disponível`,
    children: <Heading css={{ textAlign: 'center' }}>{day}</Heading>,
  },
}
