import Data from '#assets/activity/instrument/mute-track.json'
import Video from '#assets/activity/instrument/mute-track.mp4'
import type { Activity } from '../../activity'

export const muteTrack = {
  id: 'mute-track',
  title: 'Mute Track',
  description: 'Mute current track - if you release option first, holds the mute',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt-hold', 'shift']],
  categories: ['play'],
} as const satisfies Activity
