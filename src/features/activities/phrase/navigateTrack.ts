import Video from '#assets/activity/phrase/navigate-track.webm'
import type { Activity } from '../../activity'

export const navigateTrack = {
  id: 'navigate-track',
  title: 'Next / prev track',
  description: 'Navigates to previous or next track',
  media: { video: Video },
  keypress: [['shift', 'left'], 'or', ['shift', 'right']],
  categories: ['navigation'],
} as const satisfies Activity
