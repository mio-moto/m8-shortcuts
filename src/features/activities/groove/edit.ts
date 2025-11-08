import Data from '#assets/activity/groove/edit.json'
import Video from '#assets/activity/groove/edit.mp4'
import type { Activity } from '../../activity'

export const edit = {
  id: 'edit',
  title: 'Edit Value',
  description: 'Increments or decrements the selected value',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'left'], 'or', ['edit', 'right']],
  categories: ['edit'],
} as const satisfies Activity
