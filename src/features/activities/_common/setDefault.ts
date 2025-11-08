import type { Activity } from '../../activity'

export const makeSetDefault = <T extends string>({ video, events, description }: { video: string; events: [number, number][]; description?: T }) =>
  ({
    id: 'set-default',
    title: 'Set default value',
    description: description ?? 'Sets the default value for the highlighted setting',
    media: { video, events },
    keypress: [['edit', 'opt']],
    categories: ['edit'],
  }) as const satisfies Activity
