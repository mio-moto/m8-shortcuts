import Video from '#assets/activity/groove/edit.webm'
import type { Activity } from '../../activity'

export const edit = {
  id: 'edit',
  title: 'Edit Value',
  description: 'Increments or decrements the selected value',
  media: { video: Video },
  keypress: [['edit', 'left'], 'or', ['edit', 'right']],
  categories: ['edit'],
} as const satisfies Activity
