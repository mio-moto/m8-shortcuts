import Data from '#assets/activity/song/navigate.json'
import Video from '#assets/activity/song/navigate.mp4'
import type { Activity } from '../../activity'

export const navigateScreenActivity = {
  id: 'navigate-screen',
  title: 'Navigate Screens',
  description: 'Navigates between screens, which are outlined on the bottom right',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['shift', 'up'], 'or', ['shift', 'left'], 'or', ['shift', 'down'], 'or', ['shift', 'right']],
  categories: ['global'],
} as const satisfies Activity
