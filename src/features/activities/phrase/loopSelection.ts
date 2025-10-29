import Video from '#assets/activity/phrase/loop-selection.webm'
import type { Activity } from '../../activity'

export const loopSelection = {
  id: 'loop',
  title: 'Loop Selection',
  description: 'When a few steps are currently selected, loops that selection.',
  media: { video: Video },
  keypress: ['play'],
  categories: ['play'],
} as const satisfies Activity
