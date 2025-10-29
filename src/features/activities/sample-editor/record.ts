import Video from '#assets/activity/sample-editor/record.webm'
import type { Activity } from '../../activity'

export const record = {
  id: 'record',
  title: 'Record sample',
  description: 'Records a sample. Use the ARM to set a minimum threshold before a recording starts.',
  media: { video: Video },
  keypress: ['edit'],
  categories: ['edit'],
} as const satisfies Activity
