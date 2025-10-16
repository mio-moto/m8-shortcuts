import Video from '#assets/activity/chain/clone.webm'
import type { Activity } from '../../activity'

export const clone = {
  id: 'clone',
  title: 'Clone selection',
  description: 'Clones the selected chains into new chains, keeping the phrase numbers.',
  media: { video: Video },
  keypress: [['shift', 'opt'], 'after', ['edit']],
  categories: ['selection'],
} as const satisfies Activity
