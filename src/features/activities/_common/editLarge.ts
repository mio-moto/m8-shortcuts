import type { Activity } from '../../activity'

export const makeEditLarge = <T extends string>({ video, events, description }: { video: string; events: [number, number][]; description?: T }) =>
  ({
    id: 'edit-large',
    title: 'Edit in large increments',
    description: description ?? 'Edits a value at the cursor position in large steps.',
    media: { video, events },
    keypress: [['edit', 'up'], 'or', ['edit', 'down']],
    categories: ['edit'],
  }) as const satisfies Activity
