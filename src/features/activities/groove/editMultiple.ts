import Video from '#assets/activity/groove/edit-multiple.webm'
import type { Activity } from '../../activity'

export const editMultiple = {
  id: 'edit-multiple',
  title: 'Edit multiple values',
  description: 'Increments or decrements the selection',
  media: { video: Video },
  keypress: [['edit', 'left'], 'or', ['edit', 'right']],
  categories: ['edit'],
} as const satisfies Activity
