import Data from '#assets/activity/mixer/navigate.json'
import Video from '#assets/activity/mixer/navigate.mp4'
import type { Activity } from '../../activity'

export const navigate = {
  id: 'navigate-screen',
  title: 'Navigate',
  description: 'Moves the cursor up or down, left or right',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['up', 'or', 'left', 'or', 'down', 'or', 'right'],
  categories: ['navigation'],
} as const satisfies Activity
