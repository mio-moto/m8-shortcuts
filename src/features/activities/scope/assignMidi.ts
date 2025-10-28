import Video from '#assets/activity/scope/assign-midi.webm'
import type { Activity } from '../../activity'

export const assignMidi = {
  id: 'assign-midi',
  title: 'Assign MIDI CC to Parameter',
  description: 'Assign a MIDI CC to a selected parameter',
  media: { video: Video },
  keypress: ['edit', 'midi'],
  categories: ['misc'],
} as const satisfies Activity
