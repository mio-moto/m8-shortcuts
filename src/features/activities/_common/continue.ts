import type { Activity } from '../../activity'

export const makeContinuePlay = <T extends string>({ video, events, description }: { video: string; events: [number, number][]; description?: T }) =>
  ({
    id: 'continue-song',
    title: 'Continue song',
    description: description ?? 'Continues song at the cursor position with the other tracks.',
    media: { video, events },
    keypress: [['shift', 'play']],
    categories: ['play'],
  }) as const satisfies Activity
