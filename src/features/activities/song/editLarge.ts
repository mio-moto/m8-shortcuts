import Data from '#assets/activity/song/edit-large.json'
import Video from '#assets/activity/song/edit-large.mp4'
import type { Activity } from '../../activity'

export const editLarge = {
  id: 'edit-large',
  title: 'Edit in large increments',
  description: 'Edits a value in large increments (16 steps, the left, most significant byte)',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
