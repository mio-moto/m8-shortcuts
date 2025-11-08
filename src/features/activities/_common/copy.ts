import type { Activity } from '../../activity'

export const makeCopy = <T extends string>({ video, events, description }: { video: string; events: [number, number][]; description?: T }) =>
  ({
    id: 'copy',
    title: 'Copy',
    description: description ?? 'When one or more values are selected, copies the selection into the clipboard',
    media: { video, events },
    keypress: ['opt'],
    categories: ['selection'],
  }) as const satisfies Activity
