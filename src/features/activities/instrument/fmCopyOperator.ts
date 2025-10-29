import Video from '#assets/activity/instrument/fm-copy-operator.webm'
import type { Activity } from '../../activity'

export const fmCopyOperator = {
  id: 'fm-copy-operator',
  title: 'Copy FM Operator',
  description: 'Copies the selected FM operator to be pasted into another operator slot',
  media: { video: Video },
  keypress: [['shift', 'opt']],
  categories: ['fm'],
} as const satisfies Activity
