import Video from '#assets/activity/groove/next-quick.webm'
import type { Activity } from '../../activity'

export const nextQuickEntry = {
  id: 'next-quick-entry',
  title: 'Next / prev 16 Grooves',
  description: 'Moves 16 grooves at a time.',
  media: { video: Video },
  keypress: [['shift', 'up'], 'or', ['shift', 'down']],
  categories: ['navigation'],
} as const satisfies Activity
