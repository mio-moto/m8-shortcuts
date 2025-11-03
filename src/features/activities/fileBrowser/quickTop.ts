import Data from '#assets/activity/fileBrowser/go-top.json'
import Video from '#assets/activity/fileBrowser/go-top.mp4'
import type { Activity } from '../../activity'

export const quickTop = {
  id: 'quick-top',
  title: 'Go to top / bottom',
  description: 'Navigates immediately to the top or bottom of the screen',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['left', 'or', 'right'],
  categories: ['navigation'],
} as const satisfies Activity
