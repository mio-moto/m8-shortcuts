import Video from '#assets/activity/global/move-cursor.webm'
import type { Activity } from '../../activity'

export const moveCursorActivity = {
  id: 'move-cursor',
  title: 'Move Cursor',
  description: 'Moves the cursor on the screen',
  media: { video: Video },
  keypress: ['up', 'or', 'down', 'or', 'left', 'or', 'right'],
  categories: ['global'],
} as const satisfies Activity
