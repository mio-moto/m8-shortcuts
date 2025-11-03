import Data from '#assets/activity/instrument/assign-midi.json'
import Video from '#assets/activity/instrument/assign-midi.mp4'
import type { Activity } from '../../activity'

export const assignMidi = {
  id: 'assign-midi',
  title: 'Assign Touch-Axis to MIDI',
  description:
    'Assign the touchscreen axis to the selected parameter on any value with a visual slider. This can be leveraged to create assignments, that can be reassigned for internal MIDI.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['edit', 'touch'],
  categories: ['misc'],
} as const satisfies Activity
