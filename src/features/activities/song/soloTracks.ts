import Video from '#assets/activity/song/solo-tracks.webm'
import type { Activity } from '../../activity'

export const soloTracks = {
  id: 'solo-tracks',
  title: 'Solo tracks to the left / right',
  description: "Solo all tracks to the left or right side of the cursor's position.",
  media: { video: Video },
  keypress: [['opt-hold', 'left'], 'or', ['opt', 'right']],
  categories: ['play'],
} as const satisfies Activity
