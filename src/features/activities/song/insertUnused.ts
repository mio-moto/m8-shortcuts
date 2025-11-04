import Data from '#assets/activity/song/insert-new.json'
import Video from '#assets/activity/song/insert-new.mp4'
import type { Activity } from '../../activity'

export const insertUnused = {
  id: 'insert-unused',
  title: 'Insert unused Chain',
  description: 'Inserts a new, unused Chain into the current cell.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['edit', 'after', 'edit'],
  categories: ['edit'],
} as const satisfies Activity
