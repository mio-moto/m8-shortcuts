import Video from '#assets/activity/sample-editor/delete-slice.webm'
import type { Activity } from '../../activity'

export const deleteSlice = {
  id: 'delete-slice',
  title: 'Delete Slice',
  description: 'Delete a slice.',
  media: { video: Video },
  keypress: ['edit'],
  categories: ['edit'],
} as const satisfies Activity
