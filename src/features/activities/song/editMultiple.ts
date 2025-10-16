import Video from '#assets/activity/song/edit-multiple.webm'
import type { Activity } from '../../activity'

export const editMultiple = {
  id: 'edit-multiple',
  title: 'Edit multiple selections',
  description: 'Edits the current selection by incrementing or decrementing the value by one. Only works when a single row is selected.',
  media: { video: Video },
  keypress: [['edit', 'left'], 'or', ['edit', 'right']],
  categories: ['selection'],
} as const satisfies Activity
