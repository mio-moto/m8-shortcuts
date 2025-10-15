import Video from '#assets/activity/song/edit-small.webm'
import type { Activity } from '../../activity'

export const editSmall = {
  id: 'edit-small',
  title: 'Edit in small increments',
  description: 'Edits a value in small increments (1 step)',
  media: { video: Video },
  keypress: [['edit', 'left'], 'or', ['edit', 'right']],
  categories: ['edit'],
} as const satisfies Activity
