import Video from '#assets/activity/phrase/shift-selection.webm'
import type { Activity } from '../../activity'

export const editLarge = {
  id: 'shift-selection',
  title: 'Shift Selection',
  description: 'Shifts the selection up or down.',
  media: { video: Video },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
