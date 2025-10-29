import Video from '#assets/activity/instrument/fm-paste-operator.webm'
import type { Activity } from '../../activity'

export const fmPasteOperator = {
  id: 'fm-paste-operator',
  title: 'Paste FM Operator',
  description: 'Pastes a prior copied FM operator into the current hovered column.',
  media: { video: Video },
  keypress: [['shift', 'edit']],
  categories: ['fm'],
} as const satisfies Activity
