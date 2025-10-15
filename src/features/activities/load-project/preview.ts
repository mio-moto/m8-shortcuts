import Video from '#assets/activity/load-project/preview.webm'
import type { Activity } from '../../activity'

export const preview = {
  id: 'preview',
  title: 'Preview',
  description: 'Previews the song',
  media: { video: Video },
  keypress: ['play'],
  categories: ['misc'],
} as const satisfies Activity
