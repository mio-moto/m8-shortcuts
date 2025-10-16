import Video from '#assets/activity/chain/insert-unused.webm'
import type { Activity } from '../../activity'

export const insertUnused = {
  id: 'insert-unused',
  title: 'Insert unused Phrase',
  description: 'Inserts a new, unused phrase into the current cell.',
  media: { video: Video },
  keypress: ['edit', 'after', 'edit'],
  categories: ['edit'],
} as const satisfies Activity
