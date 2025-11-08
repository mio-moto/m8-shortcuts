import type { Activity } from '../../activity'

export const makePaste = <T extends string>({ video, events, description }: { video: string; events: [number, number][]; description?: T }) =>
  ({
    id: 'paste-value',
    title: 'Paste',
    description: description ?? 'The copied instrument is pasted into the current instrument slot. Release both buttons and repeat to undo.',
    media: { video, events },
    keypress: [['shift-hold', 'edit']],
    categories: ['selection'],
  }) as const satisfies Activity
