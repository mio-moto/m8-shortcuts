import Video from '#assets/activity/project/assign-midi.webm'
import type { Activity } from '../../activity'

export const assignMidi = {
  id: 'assign-midi',
  title: 'Assign MIDI CC to Tempo',
  description: 'Assign a MIDI CC to a selected parameter',
  media: { video: Video },
  keypress: ['edit', 'midi'],
  categories: ['misc'],
} as const satisfies Activity
