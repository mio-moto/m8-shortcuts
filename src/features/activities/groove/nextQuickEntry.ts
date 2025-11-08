import Data from '#assets/activity/groove/next-entry-quick.json'
import Video from '#assets/activity/groove/next-entry-quick.mp4'
import type { Activity } from '../../activity'

export const nextQuickEntry = {
  id: 'next-quick-entry',
  title: 'Next / prev 16 Grooves',
  description: 'Moves 16 grooves at a time.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt', 'up'], 'or', ['opt', 'down']],
  categories: ['navigation'],
} as const satisfies Activity
