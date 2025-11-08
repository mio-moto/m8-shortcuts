import type { Activity } from '../../activity'

export const makeEnterSelection = <T extends string>({
  video,
  events,
  description,
}: {
  video: string
  events: [number, number][]
  description?: T
}) =>
  ({
    id: 'enter-selection',
    title: 'Enter Selection Mode',
    description: description ?? 'Enters Selection mode, which then can be expanded by using the directional keys',
    media: { video, events },
    keypress: [['shift-hold', 'opt']],
    categories: ['selection'],
  }) as const satisfies Activity
