import Data from '#assets/activity/fileBrowser/navigate-fast.json'
import Video from '#assets/activity/fileBrowser/navigate-fast.mp4'
import type { Activity } from '../../activity'

export const stepFast = {
  id: 'step-fast',
  title: 'Skip over 8 entries',
  description: 'Skips over 8 entries in the list',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt', 'up'], 'or', ['opt', 'down']],
  categories: ['navigation'],
} as const satisfies Activity
