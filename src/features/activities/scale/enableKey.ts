import Data from '#assets/activity/scale/enable-key.json'
import Video from '#assets/activity/scale/enable-key.mp4'
import type { Activity } from '../../activity'

export const enableKey = {
  id: 'enable-key',
  title: 'Enable Key',
  description: 'When the cursor is on the enable column, enables or disables the key of that row',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['edit'],
  categories: ['edit'],
} as const satisfies Activity
