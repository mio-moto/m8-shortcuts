import Data from '#assets/activity/song/deep-clone.json'
import Video from '#assets/activity/song/deep-clone.mp4'
import type { Activity } from '../../activity'

export const deepClone = {
  id: 'deep-clone',
  title: 'Deep clone selection',
  description: 'Deep clones the selected chains into new chains, copying the phrases contained into new phrases.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'opt'], 'after', '2x', ['shift', 'edit']],
  categories: ['selection'],
} as const satisfies Activity
