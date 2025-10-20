import Video from '#assets/activity/instrument/play.webm'
import type { Activity } from '../../activity'

export const play = {
  id: 'play',
  title: 'Play',
  description: 'Plays / stops the current phrase.',
  media: { video: Video },
  keypress: [['play']],
  categories: ['play'],
} as const satisfies Activity
