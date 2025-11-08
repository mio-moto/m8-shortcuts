import type { Activity } from '../../activity'

export const makeAssignTouch = <T extends string>({ video, events, description }: { video: string; events: [number, number][]; description?: T }) =>
  ({
    id: 'assign-touch',
    title: 'Assign Touch-Axis as MIDI to Parameter',
    description:
      description ??
      'Assign the touchscreen axis to the selected parameter on any value with a visual slider. This can be leveraged to create assignments, that can be reassigned for internal MIDI.',
    media: { video, events },
    keypress: ['opt-hold', 'touch'],
    categories: ['misc'],
  }) as const satisfies Activity
