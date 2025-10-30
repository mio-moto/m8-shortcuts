import Image from '#assets/screens/eq-bank.png'
import type { Activity } from '../../activity'

export const muteTrack = {
  id: 'mute-track',
  title: 'Mute Track',
  description: 'Mute current track - if you release option first, holds the mute',
  media: { img: Image },
  keypress: [['opt-hold', 'shift']],
  categories: ['play'],
} as const satisfies Activity
