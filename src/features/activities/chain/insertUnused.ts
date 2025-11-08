import Data from '#assets/activity/chain/insert-unused.json'
import Video from '#assets/activity/chain/insert-unused.mp4'
import type { Activity } from '../../activity'

export const insertUnused = {
  id: 'insert-unused',
  title: 'Insert unused Phrase',
  description: 'Inserts a new, unused phrase into the current cell.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['2x', 'edit'],
  categories: ['edit'],
} as const satisfies Activity
