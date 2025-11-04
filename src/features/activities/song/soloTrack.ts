import Data from '#assets/activity/song/solo-track.json'
import Video from '#assets/activity/song/solo-track.mp4'
import type { Activity } from '../../activity'

export const soloTrack = {
  id: 'solo-track',
  title: 'Solo current track',
  description: 'Solos the current track. If you release option first, then you keep the track solo (or remove the solo, if it was being held).',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt-hold', 'play']],
  categories: ['play'],
} as const satisfies Activity
