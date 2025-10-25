import Video from '#assets/activity/groove/solo-track.webm'
import type { Activity } from '../../activity'

export const soloTrack = {
  id: 'solo-track',
  title: 'Solo Track',
  description: 'Solo current track, release option first to hold the solo.',
  media: { video: Video },
  keypress: [['opt', 'play']],
  categories: ['play'],
} as const satisfies Activity
