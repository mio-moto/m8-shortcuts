import Video from '#assets/activity/scale/enable-key.webm'
import type { Activity } from '../../activity'

export const enableKey = {
  id: 'enable-key',
  title: 'Enable Key',
  description: 'When the cursor is on the enable column, enables or disables the key of that row',
  media: { video: Video },
  keypress: ['edit'],
  categories: ['edit'],
} as const satisfies Activity
