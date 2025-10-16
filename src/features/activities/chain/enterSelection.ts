import Video from '#assets/activity/chain/enter-selection.webm'
import type { Activity } from '../../activity'

export const enterSelection = {
  id: 'enter-selection',
  title: 'Enter Selection Mode',
  description: 'Enters Selection mode, which then can be expanded by using the directional keys',
  media: { video: Video },
  keypress: [['shift', 'opt']],
  categories: ['selection'],
} as const satisfies Activity
