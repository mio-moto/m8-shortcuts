import Video from '#assets/activity/load-project/delete.webm'
import type { Activity } from '../../activity'

export const deleteFile = {
  id: 'delete',
  title: 'Delete',
  description: 'Deletes the highlighted file',
  keypress: [['opt', 'edit']],
  categories: ['misc'],
  media: { video: Video },
} as const satisfies Activity
