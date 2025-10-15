import Video from '#assets/activity/song/cut.webm'
import type { Activity } from '../../activity'

export const cut = {
  id: 'cut',
  title: 'Cut',
  description: 'Cuts out the value on the cursor or the entire selection. Note: This moves the rows after the value or selection.',
  media: { video: Video },
  keypress: [['opt', 'edit']],
  categories: ['edit'],
} as const satisfies Activity
