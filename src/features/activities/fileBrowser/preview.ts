import Data from '#assets/activity/fileBrowser/preview.json'
import Video from '#assets/activity/fileBrowser/preview.mp4'
import type { Activity } from '../../activity'

export const preview = {
  id: 'preview',
  title: 'Preview',
  description: 'Previews the song',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['play'],
  categories: ['misc'],
} as const satisfies Activity
