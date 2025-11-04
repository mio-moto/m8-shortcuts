import Data from '#assets/activity/scope/solo-track.json'
import Video from '#assets/activity/scope/solo-track.mp4'
import type { Activity } from '../../activity'

export const soloTrack = {
  id: 'solo-track',
  title: 'Solo Track',
  description: 'Solo current track, release option first to hold the solo.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt-hold', 'play']],
  categories: ['play'],
} as const satisfies Activity
