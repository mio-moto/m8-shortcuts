import Video from '#assets/activity/instrument/next-instrument.webm'
import type { Activity } from '../../activity'

export const nextInstrument = {
  id: 'next-instrument',
  title: 'Next / prev instrument',
  description: 'Goes to the next or previous instrument',
  media: { video: Video },
  keypress: [['opt', 'left'], 'or', ['opt', 'right']],
  categories: ['navigation'],
} as const satisfies Activity
