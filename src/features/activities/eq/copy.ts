import Data from '#assets/activity/eq/copy.json'
import Video from '#assets/activity/eq/copy.mp4'
import type { Activity } from '../../activity'

export const copy = {
  id: 'copy-value',
  title: 'Copy',
  description: 'When one or more values are selected, copies the selection into the clipboard',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'opt']],
  categories: ['edit'],
} as const satisfies Activity
