import type { Activity } from '../../activity'

export const makeEditSmall = <T extends string>({ video, events, description }: { video: string; events: [number, number][]; description?: T }) =>
  ({
    id: 'edit-small',
    title: 'Edit in small increments',
    description: description ?? 'Edits the value at the cursor position by one step.',
    media: { video, events },
    keypress: [['edit', 'left'], 'or', ['edit', 'right']],
    categories: ['edit'],
  }) as const satisfies Activity
