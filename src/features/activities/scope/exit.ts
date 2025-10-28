import Video from '#assets/activity/scope/exit.webm'
import type { Activity } from '../../activity'

export const exit = {
  id: 'exit',
  title: 'Exit EQ',
  description: 'Exits and returns to the screen it was entered from',
  media: { video: Video },
  keypress: ['opt'],
  categories: ['navigation'],
} as const satisfies Activity
