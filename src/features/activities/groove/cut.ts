import Data from '#assets/activity/groove/cut.json'
import Video from '#assets/activity/groove/cut.mp4'
import type { Activity } from '../../activity'

export const cut = {
  id: 'cut',
  title: 'Cut',
  description: 'Cuts out the value on the cursor or the entire selection.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt', 'edit']],
  categories: ['selection'],
} as const satisfies Activity
