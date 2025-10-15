import Video from '#assets/activity/load-project/navigate-slow.webm'
import type { Activity } from '../../activity'

export const stepSlow = {
  id: 'step-slow',
  title: 'Navigate next/prev',
  description: 'Navigates to the next or previous entry',
  media: { video: Video },
  keypress: ['up', 'or', 'down'],
  categories: ['navigation'],
} as const satisfies Activity
