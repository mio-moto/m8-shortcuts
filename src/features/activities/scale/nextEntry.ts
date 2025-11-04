import Data from '#assets/activity/scale/next-scale.json'
import Video from '#assets/activity/scale/next-scale.mp4'
import type { Activity } from '../../activity'

export const nextEntry = {
  id: 'next-entry',
  title: 'Next / prev scale',
  description: 'Navigates to previous or next scale',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'left'], 'or', ['shift', 'right']],
  categories: ['navigation'],
} as const satisfies Activity
