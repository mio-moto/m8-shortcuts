import Video from '#assets/activity/song/move-slow.webm'
import type { Activity } from '../../activity'

export const moveSlow = {
  id: 'move-slow',
  title: 'Move Cursor',
  description: 'Moves the cursor on the screen',
  media: { video: Video },
  keypress: ['up', 'or', 'down', 'or', 'left', 'or', 'right'],
  categories: ['navigation'],
} as const satisfies Activity
