import Data from '#assets/activity/mixer/assign-touch.json'
import Video from '#assets/activity/mixer/assign-touch.mp4'
import type { Activity } from '../../activity'

export const assignTouch = {
  id: 'assign-touch',
  title: 'Assign Touch-Axis as MIDI to Parameter',
  description:
    'Assign the touchscreen axis to the selected parameter on any value with a visual slider. This can be leveraged to create assignments, that can be reassigned for internal MIDI.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['edit', 'touch'],
  categories: ['misc'],
} as const satisfies Activity
