import Video from '#assets/activity/groove/edit-multiple-quick.webm'
import type { Activity } from '../../activity'

export const editMultipleQuick = {
  id: 'edit-multiple-quick',
  title: 'Edit multiple values in large steps',
  description: 'Increments or decrements the selection in large (16) steps',
  media: { video: Video },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
