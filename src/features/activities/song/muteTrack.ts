import Video from '#assets/activity/song/mute-track.webm'
import type { Activity } from '../../activity'

export const muteTrack = {
  id: 'mute-track',
  title: 'Mute current track',
  description: 'Mutes the current track. If you release option first, then you keep the track muted (or remove the mute, if it was being held).',
  media: { video: Video },
  keypress: [['opt', 'shift']],
  categories: ['play'],
} as const satisfies Activity
