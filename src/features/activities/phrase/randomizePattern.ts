import Data from '#assets/activity/phrase/randomize-pattern.json'
import Video from '#assets/activity/phrase/randomize-pattern.mp4'
import type { Activity } from '../../activity'

export const randomizePattern = {
  id: 'randomize-pattern',
  title: 'Randomize Pattern',
  description: 'When the selection includes notes, randomizes note triggers.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt', 'right']],
  categories: ['edit'],
} as const satisfies Activity
