import Video from '#assets/activity/scale/last-entry.webm'
import type { Activity } from '../../activity'

export const nextQuickEntry = {
  id: 'next-quick-entry',
  title: 'First / last scale',
  description: 'Moves to the first or last groove',
  media: { video: Video },
  keypress: [['shift', 'up'], 'or', ['shift', 'down']],
  categories: ['navigation'],
} as const satisfies Activity
