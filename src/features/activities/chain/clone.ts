import Data from '#assets/activity/chain/clone.json'
import Video from '#assets/activity/chain/clone.mp4'
import type { Activity } from '../../activity'

export const clone = {
  id: 'clone',
  title: 'Clone selection',
  description: 'Clones the selected chains into new chains, keeping the phrase numbers.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'opt'], 'after', ['shift', 'edit']],
  categories: ['selection'],
} as const satisfies Activity
