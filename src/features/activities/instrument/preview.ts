import Data from '#assets/activity/instrument/preview.json'
import Video from '#assets/activity/instrument/preview.mp4'
import type { Activity } from '../../activity'

export const preview = {
  id: 'preview',
  title: 'Preview Instrument',
  description: 'Previews the instrument by triggering it once and keeping it on until either key is released.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'play']],
  categories: ['play'],
} as const satisfies Activity
