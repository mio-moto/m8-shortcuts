import Image from '#assets/screens/eq-bank.png'
import type { Activity } from '../../activity'

export const clearAllMuteSolo = {
  id: 'clear-all-mute-solo',
  title: 'Clear mutes and solos',
  description: 'Clears all mute and solos that are being held by any track.',
  media: { img: Image },
  keypress: [['opt-hold', 'shift', 'play']],
  categories: ['play'],
} as const satisfies Activity
