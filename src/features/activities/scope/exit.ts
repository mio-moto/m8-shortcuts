import Data from '#assets/activity/scope/exit.json'
import Video from '#assets/activity/scope/exit.mp4'
import type { Activity } from '../../activity'

export const exit = {
  id: 'exit',
  title: 'Exit EQ',
  description: 'Exits and returns to the screen it was entered from',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['opt'],
  categories: ['navigation'],
} as const satisfies Activity
