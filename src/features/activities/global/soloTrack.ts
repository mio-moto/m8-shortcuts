import Video from '#assets/activity/instrument/solo-track.mp4'
import type { Activity } from '../../activity'

export const soloTrack = {
  id: 'solo-track',
  title: 'Solo Track',
  description: 'Solo current track, release option first to hold the solo.',
  media: { video: Video },
  keypress: [['opt-hold', 'play']],
  categories: ['play'],
} as const satisfies Activity
