import Video from '#assets/activity/chain/play.webm'
import type { Activity } from '../../activity'

export const play = {
  id: 'play',
  title: 'Play',
  description: 'Starts / stops playing chain at current cursor position.',
  media: { video: Video },
  keypress: ['play'],
  categories: ['play'],
} as const satisfies Activity
