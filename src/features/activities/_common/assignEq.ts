import type { Activity } from '../../activity'

export const makeAssignEq = <T extends string>({ video, events, description }: { video: string; events: [number, number][]; description?: T }) =>
  ({
    id: 'assign-eq',
    title: 'Assign EQ',
    description: description ?? 'With the cursor on the EQ, assigns an EQ bank to the instrument - which can be edited by pressing edit again',
    media: { video, events },
    keypress: ['edit', 'after', 'edit'],
    categories: ['misc'],
  }) as const satisfies Activity
