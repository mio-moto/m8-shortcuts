import Data from '#assets/activity/groove/play.json'
import Video from '#assets/activity/groove/play.mp4'
import type { Activity } from '../../activity'

export const play = {
  id: 'play',
  title: 'Play',
  description: 'Starts / stops playing phrase, repeats the same phrase endlessly.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['play'],
  categories: ['play'],
} as const satisfies Activity
