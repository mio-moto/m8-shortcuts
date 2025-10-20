import Video from '#assets/activity/instrument/copy.webm'
import type { Activity } from '../../activity'

export const copy = {
  id: 'copy-value',
  title: 'Copy',
  description: 'When one or more values are selected, copies the selection into the clipboard',
  media: { video: Video },
  keypress: [['shift', 'opt']],
  categories: ['edit'],
} as const satisfies Activity
