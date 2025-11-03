import Data from '#assets/activity/instrument/next-instrument-quick.json'
import Video from '#assets/activity/instrument/next-instrument-quick.mp4'
import type { Activity } from '../../activity'

export const nextInstrumentQuick = {
  id: 'next-instrument-quick',
  title: 'Quick next / prev instrument',
  description: 'Steps in large increments to the next instrument (16 instruments)',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt', 'up'], 'or', ['opt', 'down']],
  categories: ['navigation'],
} as const satisfies Activity
