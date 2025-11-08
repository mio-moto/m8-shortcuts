import type { Activity } from '../../activity'

export const makeNavigate = <T extends string>({ video, events, description }: { video: string; events: [number, number][]; description?: T }) =>
  ({
    id: 'navigate-screen',
    title: 'Navigate',
    description: description ?? 'Moves the cursor up or down, left or right',
    media: { video, events },
    keypress: ['up', 'or', 'left', 'or', 'down', 'or', 'right'],
    categories: ['navigation'],
  }) as const satisfies Activity
