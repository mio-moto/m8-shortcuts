import Data from '#assets/activity/instrument/edit-touch.json'
import Video from '#assets/activity/instrument/edit-touch.mp4'
import type { Activity } from '../../activity'

export const editTouch = {
  id: 'edit-touch',
  title: 'Edit with touchscreen',
  description: 'Edits the selected parameter by horizontal sliding',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['edit', 'touch'],
  categories: ['edit'],
} as const satisfies Activity
