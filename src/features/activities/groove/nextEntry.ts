import Data from '#assets/activity/groove/next-entry.json'
import Video from '#assets/activity/groove/next-entry.mp4'
import type { Activity } from '../../activity'

export const nextEntry = {
  id: 'next-entry',
  title: 'Next / prev groove',
  description: 'Navigates to previous or next groove',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt', 'left'], 'or', ['opt', 'right']],
  categories: ['navigation'],
} as const satisfies Activity
