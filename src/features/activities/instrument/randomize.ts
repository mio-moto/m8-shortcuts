import Data from '#assets/activity/instrument/randomize.json'
import Video from '#assets/activity/instrument/randomize.mp4'
import type { Activity } from '../../activity'

export const preview = {
  id: 'randomize',
  title: 'Randomize Instrument',
  description: 'Randomizes all parameters of the instrument',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['up', 'down', 'left', 'right', 'edit']],
  categories: ['edit'],
} as const satisfies Activity
