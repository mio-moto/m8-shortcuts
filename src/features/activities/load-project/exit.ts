import Video from '#assets/activity/load-project/exit.webm'

import type { Activity } from '../../activity'

export const exit = {
  id: 'exit',
  title: 'Exit',
  description: 'Exits the file browser',
  keypress: ['opt'],
  media: { video: Video },
  categories: ['navigation'],
} as const satisfies Activity
