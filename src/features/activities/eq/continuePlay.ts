import Image from '#assets/screens/eq-bank.png'
import type { Activity } from '../../activity'

export const continuePlay = {
  id: 'continue-song',
  title: 'Continue song',
  description: 'Continues song at the cursor position.',
  media: { img: Image },
  keypress: ['play', ['shift', 'play']],
  categories: ['play'],
} as const satisfies Activity
