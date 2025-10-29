import Video from '#assets/activity/sample-editor/preview.webm'
import type { Activity } from '../../activity'

export const preview = {
  id: 'preview',
  title: 'Preview Sample',
  description: 'Previews the sample, which can be used for lazy chopping',
  media: { video: Video },
  keypress: ['hold', 'play'],
  categories: ['navigation'],
} as const satisfies Activity
