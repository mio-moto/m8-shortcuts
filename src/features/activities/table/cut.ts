import Video from '#assets/activity/table/cut.webm'
import type { Activity } from '../../activity'

export const cut = {
  id: 'cut',
  title: 'Cut',
  description: 'Cuts out the value on the cursor or the entire selection.',
  media: { video: Video },
  keypress: [['opt', 'edit']],
  categories: ['selection'],
} as const satisfies Activity
