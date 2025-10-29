import Video from '#assets/activity/sample-editor/move-large.webm'
import type { Activity } from '../../activity'

export const moveLarge = {
  id: 'move-large',
  title: 'Fast Move',
  description: 'Moves the hovered marker quickly by time, independent from phrase length.',
  media: { video: Video },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
