import Data from '#assets/activity/chain/insert-new.json'
import Video from '#assets/activity/chain/insert-new.mp4'
import type { Activity } from '../../activity'

export const insertNew = {
  id: 'insert-new',
  title: 'Insert New',
  description: 'Inserts a new value into an empty cell (--). The value is either the default value (00) or the last picked, edited or deleted value',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['edit'],
  categories: ['edit'],
} as const satisfies Activity
