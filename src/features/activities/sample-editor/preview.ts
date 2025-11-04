import Data from '#assets/activity/sample-editor/preview.json'
import Video from '#assets/activity/sample-editor/preview.mp4'
import type { Activity } from '../../activity'

export const preview = {
  id: 'preview',
  title: 'Preview Sample',
  description: 'Previews the sample, which can be used for lazy chopping',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['hold', 'play'],
  categories: ['navigation'],
} as const satisfies Activity
