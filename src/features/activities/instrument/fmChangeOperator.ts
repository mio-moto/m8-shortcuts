import Video from '#assets/activity/instrument/fm-change-operator.webm'
import type { Activity } from '../../activity'

export const fmChangeOperator = {
  id: 'fm-change-operator',
  title: 'Change FM Operator',
  description: 'Changes the FM Operator between a algorithms. Consult the manual for how they operate.',
  media: { video: Video },
  keypress: [['edit', 'left'], 'or', ['edit', 'right'], 'or', ['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['fm'],
} as const satisfies Activity
