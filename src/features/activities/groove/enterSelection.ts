import Data from '#assets/activity/groove/enter-selection.json'
import Video from '#assets/activity/groove/enter-selection.mp4'
import type { Activity } from '../../activity'

export const enterSelection = {
  id: 'enter-selection',
  title: 'Enter Selection Mode',
  description: 'Enters Selection mode, which then can be expanded by using the directional keys',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'opt']],
  categories: ['selection'],
} as const satisfies Activity
