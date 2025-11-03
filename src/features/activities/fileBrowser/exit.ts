import Data from '#assets/activity/fileBrowser/exit.json'
import Video from '#assets/activity/fileBrowser/exit.mp4'

import type { Activity } from '../../activity'

export const exit = {
  id: 'exit',
  title: 'Exit',
  description: 'Exits the file browser',
  keypress: ['opt'],
  media: { video: Video, events: Data as [number, number][] },
  categories: ['navigation'],
} as const satisfies Activity
