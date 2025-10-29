import Video from '#assets/activity/chain/loop-selection.webm'
import type { Activity } from '../../activity'

export const loopSelection = {
  id: 'loop',
  title: 'Loop Selection',
  description: 'When a few chains are currently selected, loops these chains.',
  media: { video: Video },
  keypress: ['play'],
  categories: ['play'],
} as const satisfies Activity
