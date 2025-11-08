import Data from '#assets/activity/song/navigate.json'
import Video from '#assets/activity/song/navigate.mp4'
import type { Activity } from '../../activity'

export const moveCursorActivity = {
  id: 'move-cursor',
  title: 'Move Cursor',
  description: 'Moves the cursor on the screen',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['up', 'or', 'down', 'or', 'left', 'or', 'right'],
  categories: ['global'],
} as const satisfies Activity
