import Video from '#assets/activity/chain/navigate-chain.webm'
import type { Activity } from '../../activity'

export const navigateChain = {
  id: 'navigate-chain',
  title: 'Next / prev chain',
  description: 'Navigates to previous or next chain in the song',
  media: { video: Video },
  keypress: [['shift', 'up'], 'or', ['shift', 'down']],
  categories: ['navigation'],
} as const satisfies Activity
