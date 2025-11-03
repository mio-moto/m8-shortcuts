import Data from '#assets/activity/phrase/loop-selection-tracks.json'
import Video from '#assets/activity/phrase/loop-selection-tracks.mp4'
import type { Activity } from '../../activity'

export const loopSelectionTracks = {
  id: 'loop-selection-tracks',
  title: 'Loop Selection with Track',
  description: 'Loops the selected steps with the remaining tracks looping the same steps.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'play']],
  categories: ['play'],
} as const satisfies Activity
