import Data from '#assets/activity/instrument/fm-change-operator.json'
import Video from '#assets/activity/instrument/fm-change-operator.mp4'
import type { Activity } from '../../activity'

export const fmChangeOperator = {
  id: 'fm-change-operator',
  title: 'Change FM Operator',
  description: 'Changes the FM Operator between a algorithms. Consult the manual for how they operate.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'left'], 'or', ['edit', 'right'], 'or', ['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['fm'],
} as const satisfies Activity
