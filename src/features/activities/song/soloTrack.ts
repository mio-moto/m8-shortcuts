import Video from '#assets/activity/song/solo-track.webm'
import type { Activity } from '../../activity'

export const soloTrack = {
  id: 'solo-track',
  title: 'Solo current track',
  description: 'Solos the current track. If you release option first, then you keep the track solo (or remove the solo, if it was being held).',
  media: { video: Video },
  keypress: [['opt-hold', 'play']],
  categories: ['play'],
} as const satisfies Activity
