import Video from '#assets/activity/song/show-track-time.webm'
import type { Activity } from '../../activity'

export const trackTime = {
  id: 'show-track-time',
  title: 'Show Track Time',
  description: 'Shows the track time of that song island to the cursor. This only works when the song is currently not playing',
  media: { video: Video },
  keypress: ['hold', 'opt'],
  categories: ['misc'],
} as const satisfies Activity
