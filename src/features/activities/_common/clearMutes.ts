import type { Activity } from '../../activity'

export const makeClearMutes = <T extends string>({ video, events, description }: { video: string; events: [number, number][]; description?: T }) =>
  ({
    id: 'clear-mutes',
    title: 'Clear mutes and solos',
    description: description ?? 'Clears all mute and solos that are being held by any track.',
    media: { video, events },
    keypress: [['opt-hold', 'shift', 'play']],
    categories: ['play'],
  }) as const satisfies Activity
