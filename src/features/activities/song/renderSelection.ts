import Video from '#assets/activity/song/quick-render.webm'
import type { Activity } from '../../activity'

export const renderSelection = {
  id: 'render-selection',
  title: 'Render selection',
  description: 'Only when playback is stopped, allows the selected chains to be quickly rendered into a new instrument.',
  media: { video: Video },
  keypress: [['shift', 'opt'], 'after', 'edit', 'after', 'edit'],
  categories: ['selection'],
} as const satisfies Activity
