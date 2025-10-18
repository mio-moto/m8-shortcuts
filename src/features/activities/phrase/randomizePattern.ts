import Video from '#assets/activity/phrase/randomize-pattern.webm'
import type { Activity } from '../../activity'

export const randomizePattern = {
  id: 'randomize-pattern',
  title: 'Randomize Pattern',
  description: 'When the selection includes notes, randomizes note triggers.',
  media: { video: Video },
  keypress: [['opt', 'right']],
  categories: ['edit'],
} as const satisfies Activity
