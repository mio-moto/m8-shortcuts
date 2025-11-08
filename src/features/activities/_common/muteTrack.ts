import type { Activity } from '../../activity'

export const makeMuteTrack = <T extends string>({ video, events, description }: { video: string; events: [number, number][]; description?: T }) =>
  ({
    id: 'mute-track',
    title: 'Mute Track',
    description: description ?? 'Mute current track - if you release option first, holds the mute',
    media: { video, events },
    keypress: [['opt-hold', 'shift']],
    categories: ['play'],
  }) as const satisfies Activity
