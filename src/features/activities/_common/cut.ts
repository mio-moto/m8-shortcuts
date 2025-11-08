import type { Activity } from '../../activity'

export const makeCut = <T extends string>({ video, events, description }: { video: string; events: [number, number][]; description?: T }) =>
  ({
    id: 'cut',
    title: 'Cut',
    description: description ?? 'Cuts out the value on the cursor or the entire selection.',
    media: { video, events },
    keypress: [['opt', 'edit']],
    categories: ['selection'],
  }) as const satisfies Activity
