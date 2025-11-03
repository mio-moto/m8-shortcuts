import Data from '#assets/activity/instrument/next-instrument.json'
import Video from '#assets/activity/instrument/next-instrument.mp4'
import type { Activity } from '../../activity'

export const nextInstrument = {
  id: 'next-instrument',
  title: 'Next / prev instrument',
  description: 'Goes to the next or previous instrument',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt', 'left'], 'or', ['opt', 'right']],
  categories: ['navigation'],
} as const satisfies Activity
