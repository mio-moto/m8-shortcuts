import Video from '#assets/activity/instrument/next-instrument-quick.webm'
import type { Activity } from '../../activity'

export const nextInstrumentQuick = {
  id: 'next-instrument-quick',
  title: 'Quick next / prev instrument',
  description: 'Steps in large increments to the next instrument (16 instruments)',
  media: { video: Video },
  keypress: [['opt', 'up'], 'or', ['opt', 'down']],
  categories: ['navigation'],
} as const satisfies Activity
