import Data from '#assets/activity/song/edit-multiple.json'
import Video from '#assets/activity/song/edit-multiple.mp4'
import type { Activity } from '../../activity'

export const editMultiple = {
  id: 'edit-multiple',
  title: 'Edit multiple selections',
  description: 'Edits the current selection by incrementing or decrementing the value by one. Only works when a single row is selected.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'left'], 'or', ['edit', 'right']],
  categories: ['selection'],
} as const satisfies Activity
