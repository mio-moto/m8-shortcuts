import Video from '#assets/activity/load-project/go-top.webm'
import type { Activity } from '../../activity'

export const quickTop = {
  id: 'quick-top',
  title: 'Go to top / bottom',
  description: 'Navigates immediately to the top or bottom of the screen',
  media: { video: Video },
  keypress: ['left', 'or', 'right'],
  categories: ['navigation'],
} as const satisfies Activity
