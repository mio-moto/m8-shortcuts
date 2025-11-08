import type { Activity } from '../../activity'

export const makeSoloTrack = <T extends string>({ video, events, description }: { video: string; events: [number, number][]; description?: T }) =>
  ({
    id: 'solo-track',
    title: 'Solo Track',
    description: description ?? 'Solo current track, release option first to hold the solo.',
    media: { video, events },
    keypress: [['opt-hold', 'play']],
    categories: ['play'],
  }) as const satisfies Activity
