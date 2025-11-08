import Data from '#assets/activity/eq/assign-midi.json'
import Video from '#assets/activity/eq/assign-midi.mp4'
import type { Activity } from '../../activity'

export const assignMidi = {
  id: 'assign-midi',
  title: 'Assign MIDI CC to Parameter',
  description: 'Assign a MIDI CC to a selected parameter',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['edit', 'midi'],
  categories: ['misc'],
} as const satisfies Activity
