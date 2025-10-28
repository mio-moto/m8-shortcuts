import Video from '#assets/activity/eq/set-default.webm'
import type { Activity } from '../../activity'

export const setDefault = {
  id: 'set-default',
  title: 'Set default value',
  description: 'Sets the default value for the highlighted setting',
  media: { video: Video },
  keypress: [['edit', 'opt']],
  categories: ['edit'],
} as const satisfies Activity
