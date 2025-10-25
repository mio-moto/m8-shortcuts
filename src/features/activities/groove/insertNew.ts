import Video from '#assets/activity/groove/insert-new.webm'
import type { Activity } from '../../activity'

export const insertNew = {
  id: 'insert-new',
  title: 'Insert New',
  description: 'Inserts a new value into an empty cell (--). The value is either the default value (00) or the last picked, edited or deleted value',
  media: { video: Video },
  keypress: ['edit'],
  categories: ['edit'],
} as const satisfies Activity
