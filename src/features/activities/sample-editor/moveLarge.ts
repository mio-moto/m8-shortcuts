import Data from '#assets/activity/sample-editor/move-fast.json'
import Video from '#assets/activity/sample-editor/move-fast.mp4'
import type { Activity } from '../../activity'

export const moveLarge = {
  id: 'move-large',
  title: 'Fast Move',
  description: 'Moves the hovered marker quickly by time, independent from phrase length.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
