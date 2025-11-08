import Data from '#assets/activity/chain/loop-track.json'
import Video from '#assets/activity/chain/loop-track.mp4'
import type { Activity } from '../../activity'

export const loopSelectionTracks = {
  id: 'loop-selection-tracks',
  title: 'Loop Selection with Track',
  description: 'Loops the selected chains with the remaining tracks looping the same chains.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'play']],
  categories: ['play'],
} as const satisfies Activity
