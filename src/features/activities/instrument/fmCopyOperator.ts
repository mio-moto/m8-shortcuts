import Data from '#assets/activity/instrument/fm-copy-operator.json'
import Video from '#assets/activity/instrument/fm-copy-operator.mp4'
import type { Activity } from '../../activity'

export const fmCopyOperator = {
  id: 'fm-copy-operator',
  title: 'Copy FM Operator',
  description: 'Copies the selected FM operator to be pasted into another operator slot',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'opt']],
  categories: ['fm'],
} as const satisfies Activity
