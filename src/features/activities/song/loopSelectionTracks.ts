import Video from '#assets/activity/song/loop-selection-tracks.webm'
import type { Activity } from '../../activity'

export const loopSelectionTracks = {
  id: 'loop-selection-tracks',
  title: 'Loop Selection with Track',
  description: 'Loops the selected chains with the remaining tracks looping the same chains.',
  media: { video: Video },
  keypress: ['play', ['shift', 'play']],
  categories: ['play'],
} as const satisfies Activity
