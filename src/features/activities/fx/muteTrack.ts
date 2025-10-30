import Video from '#assets/activity/fx/mute-track.webm'
import type { Activity } from '../../activity'

export const muteTrack = {
  id: 'mute-track',
  title: 'Mute Track',
  description: 'Mute current track - if you release option first, holds the mute',
  media: { video: Video },
  keypress: [['opt-hold', 'shift']],
  categories: ['play'],
} as const satisfies Activity
