import Video from '#assets/activity/song/insert-new.webm'
import type { Activity } from '../../activity'

export const insertUnused = {
  id: 'insert-unused',
  title: 'Insert unused Chain',
  description: 'Inserts a new, unused Chain into the current cell.',
  media: { video: Video },
  keypress: ['edit', 'after', 'edit'],
  categories: ['edit'],
} as const satisfies Activity
