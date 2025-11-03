import Data from '#assets/activity/fileBrowser/navigate-slow.json'
import Video from '#assets/activity/fileBrowser/navigate-slow.mp4'
import type { Activity } from '../../activity'

export const stepSlow = {
  id: 'step-slow',
  title: 'Navigate next/prev',
  description: 'Navigates to the next or previous entry',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['up', 'or', 'down'],
  categories: ['navigation'],
} as const satisfies Activity
