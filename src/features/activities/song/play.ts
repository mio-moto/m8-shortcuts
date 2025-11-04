import Data from '#assets/activity/song/play.json'
import Video from '#assets/activity/song/play.mp4'
import type { Activity } from '../../activity'

export const play = {
  id: 'play',
  title: 'Play',
  description: 'Plays / stops all tracks. When in Live Mode, the current selection will be queued.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['play']],
  categories: ['play'],
} as const satisfies Activity
