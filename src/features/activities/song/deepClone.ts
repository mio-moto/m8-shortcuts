import Video from '#assets/activity/song/deep-clone.webm'
import type { Activity } from '../../activity'

export const deepClone = {
  id: 'deep-clone',
  title: 'Deep clone selection',
  description: 'Deep clones the selected chains into new chains, copying the phrases contained into new phrases.',
  media: { video: Video },
  keypress: [['shift', 'opt'], 'after', ['edit'], 'after', ['edit']],
  categories: ['selection'],
} as const satisfies Activity
