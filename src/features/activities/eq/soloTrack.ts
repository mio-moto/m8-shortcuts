import Image from '#assets/screens/eq-bank.png'
import type { Activity } from '../../activity'

export const soloTrack = {
  id: 'solo-track',
  title: 'Solo Track',
  description: 'Solo current track, release option first to hold the solo.',
  media: { img: Image },
  keypress: [['opt-hold', 'play']],
  categories: ['play'],
} as const satisfies Activity
