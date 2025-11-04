import Data from '#assets/activity/scale/edit-large.json'
import Video from '#assets/activity/scale/edit-large.mp4'
import type { Activity } from '../../activity'

export const editLarge = {
  id: 'edit-large',
  title: 'Edit in large increments',
  description: 'Edits an instrument parameter in large steps (16 steps, the left, most significant byte)',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
