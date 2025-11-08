import type { Activity } from '../../activity'

export const makePlay = <T extends string>({ video, events, description }: { video: string; events: [number, number][]; description?: T }) =>
  ({
    id: 'play',
    title: 'Play',
    description: description ?? 'Plays / stops the current phrase.',
    media: { video, events },
    keypress: [['play']],
    categories: ['play'],
  }) as const satisfies Activity
