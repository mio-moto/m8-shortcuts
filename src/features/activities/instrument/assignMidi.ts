import Video from '#assets/activity/instrument/assign-midi.webm'
import type { Activity } from '../../activity'

export const assignMidi = {
  id: 'assign-midi',
  title: 'Assign Touch-Axis to MIDI',
  description:
    'Assign the touchscreen axis to the selected parameter on any value with a visual slider. This can be leveraged to create assignments, that can be reassigned for internal MIDI.',
  media: { video: Video },
  keypress: ['edit', 'touch'],
  categories: ['misc'],
} as const satisfies Activity
