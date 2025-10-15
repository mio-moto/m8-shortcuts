import Video from '#assets/activity/load-project/navigate-fast.webm'
import type { Activity } from '../../activity'

export const stepFast = {
  id: 'step-fast',
  title: 'Skip over 8 entries',
  description: 'Skips over 8 entries in the list',
  media: { video: Video },
  keypress: [['opt', 'up'], 'or', ['opt', 'down']],
  categories: ['navigation'],
} as const satisfies Activity
