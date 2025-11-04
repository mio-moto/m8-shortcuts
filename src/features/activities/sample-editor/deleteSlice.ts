import Data from '#assets/activity/sample-editor/delete-slice.json'
import Video from '#assets/activity/sample-editor/delete-slice.mp4'
import type { Activity } from '../../activity'

export const deleteSlice = {
  id: 'delete-slice',
  title: 'Delete Slice',
  description: 'Delete a slice.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['edit'],
  categories: ['edit'],
} as const satisfies Activity
