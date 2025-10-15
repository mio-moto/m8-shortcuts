import Video from '#assets/activity/song/play.webm'
import type { Activity } from '../../activity'

export const play = {
  id: 'play',
  title: 'Play',
  description: 'Plays / stops all tracks. When in Live Mode, the current selection will be queued.',
  media: { video: Video },
  keypress: [['play']],
  categories: ['play'],
} as const satisfies Activity
