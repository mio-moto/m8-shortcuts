import Data from '#assets/activity/instrument/play.json'
import Video from '#assets/activity/instrument/play.mp4'
import type { Activity } from '../../activity'

export const play = {
  id: 'play',
  title: 'Play',
  description: 'Plays / stops the current phrase.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['play']],
  categories: ['play'],
} as const satisfies Activity
