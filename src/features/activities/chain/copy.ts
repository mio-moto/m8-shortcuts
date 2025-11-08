import Data from '#assets/activity/chain/copy.json'
import Video from '#assets/activity/chain/copy.mp4'
import type { Activity } from '../../activity'

export const copy = {
  id: 'copy-value',
  title: 'Copy',
  description: 'When one or more values are selected, copies the selection into the clipboard',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['opt'],
  categories: ['selection'],
} as const satisfies Activity
