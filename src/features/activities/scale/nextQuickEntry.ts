import Data from '#assets/activity/scale/next-scale-quick.json'
import Video from '#assets/activity/scale/next-scale-quick.mp4'
import type { Activity } from '../../activity'

export const nextQuickEntry = {
  id: 'next-quick-entry',
  title: 'First / last scale',
  description: 'Moves to the first or last groove',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'up'], 'or', ['shift', 'down']],
  categories: ['navigation'],
} as const satisfies Activity
