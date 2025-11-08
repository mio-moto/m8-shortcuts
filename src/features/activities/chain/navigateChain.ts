import Data from '#assets/activity/chain/next-chain.json'
import Video from '#assets/activity/chain/next-chain.mp4'
import type { Activity } from '../../activity'

export const navigateChain = {
  id: 'navigate-chain',
  title: 'Next / prev chain',
  description: 'Navigates to previous or next chain in the song',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt-hold', 'up'], 'or', ['opt-hold', 'down']],
  categories: ['navigation'],
} as const satisfies Activity
