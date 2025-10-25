import Video from '#assets/activity/groove/play.webm'
import type { Activity } from '../../activity'

export const play = {
  id: 'play',
  title: 'Play',
  description: 'Starts / stops playing phrase, repeats the same phrase endlessly.',
  media: { video: Video },
  keypress: ['play'],
  categories: ['play'],
} as const satisfies Activity
