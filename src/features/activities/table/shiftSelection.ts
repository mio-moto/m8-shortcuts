import Data from '#assets/activity/table/shift-selection.json'
import Video from '#assets/activity/table/shift-selection.mp4'
import type { Activity } from '../../activity'

export const shiftSelection = {
  id: 'shift-selection',
  title: 'Shift Selection',
  description: 'Shifts the selection up or down.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
