import Data from '#assets/activity/groove/edit-adjacent.json'
import Video from '#assets/activity/groove/edit-adjacent.mp4'
import type { Activity } from '../../activity'

export const editRelated = {
  id: 'edit-related',
  title: 'Change value with adjacent entry',
  description:
    'Increments or decrements the current value with the next adjacent value, keeping the total tick number even. This helps in making swings without increasing the total ticks of a groove.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
