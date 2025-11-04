import Data from '#assets/activity/song/navigate-quick.json'
import Video from '#assets/activity/song/navigate-quick.mp4'
import type { Activity } from '../../activity'

export const moveFast = {
  id: 'move-fast',
  title: 'Move 16 Rows',
  description: 'Moves / scrolls the cursor 16 rows up or down',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt', 'up'], 'or', ['opt', 'down']],
  categories: ['navigation'],
} as const satisfies Activity
