import Data from '#assets/activity/groove/edit-multiple-fast.json'
import Video from '#assets/activity/groove/edit-multiple-fast.mp4'
import type { Activity } from '../../activity'

export const editMultipleQuick = {
  id: 'edit-multiple-quick',
  title: 'Edit multiple values in large steps',
  description: 'Increments or decrements the selection in large (16) steps',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
