import Data from '#assets/activity/chain/next-track.json'
import Video from '#assets/activity/chain/next-track.mp4'
import type { Activity } from '../../activity'

export const navigateTrack = {
  id: 'navigate-track',
  title: 'Next / prev track',
  description: 'Navigates to previous or next track',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt-hold', 'left'], 'or', ['opt-hold', 'right']],
  categories: ['navigation'],
} as const satisfies Activity
