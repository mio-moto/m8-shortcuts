import Data from '#assets/activity/phrase/next-track.json'
import Video from '#assets/activity/phrase/next-track.mp4'
import type { Activity } from '../../activity'

export const navigateTrack = {
  id: 'navigate-track',
  title: 'Next / prev track',
  description: 'Navigates to previous or next track',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'left'], 'or', ['shift', 'right']],
  categories: ['navigation'],
} as const satisfies Activity
