import Data from '#assets/activity/song/navigate.json'
import Video from '#assets/activity/song/navigate.mp4'
import type { Activity } from '../../activity'

export const moveSlow = {
  id: 'move-slow',
  title: 'Move Cursor',
  description: 'Moves the cursor on the screen',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['up', 'or', 'down', 'or', 'left', 'or', 'right'],
  categories: ['navigation'],
} as const satisfies Activity
