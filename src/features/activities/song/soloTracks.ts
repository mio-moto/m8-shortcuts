import Data from '#assets/activity/song/solo-side.json'
import Video from '#assets/activity/song/solo-side.mp4'
import type { Activity } from '../../activity'

export const soloTracks = {
  id: 'solo-tracks',
  title: 'Solo tracks to the left / right',
  description: "Solo all tracks to the left or right side of the cursor's position.",
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt-hold', 'left'], 'or', ['opt', 'right']],
  categories: ['play'],
} as const satisfies Activity
