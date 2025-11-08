import Data from '#assets/activity/groove/edit-multiple.json'
import Video from '#assets/activity/groove/edit-multiple.mp4'
import type { Activity } from '../../activity'

export const editMultiple = {
  id: 'edit-multiple',
  title: 'Edit multiple values',
  description: 'Increments or decrements the selection',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'left'], 'or', ['edit', 'right']],
  categories: ['edit'],
} as const satisfies Activity
