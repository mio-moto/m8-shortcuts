import Data from '#assets/activity/instrument/fm-change-algo.json'
import Video from '#assets/activity/instrument/fm-change-algo.mp4'
import type { Activity } from '../../activity'

export const fmChangeAlgo = {
  id: 'fm-change-algo',
  title: 'Change FM Algo',
  description: 'Changes the FM algorithms, from some generators over to a variety of wavetables.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'left'], 'or', ['edit', 'right'], 'or', ['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['fm'],
} as const satisfies Activity
