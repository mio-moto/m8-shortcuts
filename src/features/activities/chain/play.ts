import Data from '#assets/activity/chain/play.json'
import Video from '#assets/activity/chain/play.mp4'
import type { Activity } from '../../activity'

export const play = {
  id: 'play',
  title: 'Play',
  description: 'Starts / stops playing chain at current cursor position, repeats the same chain endlessly.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['play'],
  categories: ['play'],
} as const satisfies Activity
