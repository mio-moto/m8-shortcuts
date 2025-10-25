import Video from '#assets/activity/scale/next-entry.webm'
import type { Activity } from '../../activity'

export const nextEntry = {
  id: 'next-entry',
  title: 'Next / prev groove',
  description: 'Navigates to previous or next scale',
  media: { video: Video },
  keypress: [['shift', 'left'], 'or', ['shift', 'right']],
  categories: ['navigation'],
} as const satisfies Activity
