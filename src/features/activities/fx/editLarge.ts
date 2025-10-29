import Video from '#assets/activity/fx/edit-large.webm'
import type { Activity } from '../../activity'

export const editLarge = {
  id: 'edit-large',
  title: 'Edit in large increments',
  description: 'Edits a volume, instrument number or FX value in large increments (16 steps, the left, most significant byte)',
  media: { video: Video },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
