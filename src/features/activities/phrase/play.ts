import Video from '#assets/activity/phrase/play.webm'
import type { Activity } from '../../activity'

export const play = {
  id: 'play',
  title: 'Play',
  description: 'Starts / stops playing phrase at current cursor position, repeats the same phrase endlessly.',
  media: { video: Video },
  keypress: ['play'],
  categories: ['play'],
} as const satisfies Activity
