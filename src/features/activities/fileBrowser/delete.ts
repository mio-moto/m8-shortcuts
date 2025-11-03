import Data from '#assets/activity/fileBrowser/delete.json'
import Video from '#assets/activity/fileBrowser/delete.mp4'
import type { Activity } from '../../activity'

export const deleteFile = {
  id: 'delete',
  title: 'Delete',
  description: 'Deletes the highlighted file',
  keypress: [['opt', 'edit']],
  categories: ['misc'],
  media: { video: Video, events: Data as [number, number][] },
} as const satisfies Activity
