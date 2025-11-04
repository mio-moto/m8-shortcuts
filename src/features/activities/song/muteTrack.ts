import Data from '#assets/activity/song/mute-track.json'
import Video from '#assets/activity/song/mute-track.mp4'
import type { Activity } from '../../activity'

export const muteTrack = {
  id: 'mute-track',
  title: 'Mute current track',
  description: 'Mutes the current track. If you release option first, then you keep the track muted (or remove the mute, if it was being held).',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt-hold', 'shift']],
  categories: ['play'],
} as const satisfies Activity
