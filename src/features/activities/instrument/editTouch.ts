import Video from '#assets/activity/instrument/edit-touch.webm'
import type { Activity } from '../../activity'

export const editTouch = {
  id: 'edit-touch',
  title: 'Edit with touchscreen',
  description: 'Edits the selected parameter by horizontal sliding',
  media: { video: Video },
  keypress: ['edit', 'touch'],
  categories: ['edit'],
} as const satisfies Activity
