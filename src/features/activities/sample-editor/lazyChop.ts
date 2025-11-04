import Data from '#assets/activity/sample-editor/lazy-chop.json'
import Video from '#assets/activity/sample-editor/lazy-chop.mp4'
import type { Activity } from '../../activity'

export const lazyChop = {
  id: 'lazy-chop',
  title: 'Lazy Chop',
  description: 'Inserts slice markers at the play head while previewing the sample.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['play', 'after', 'edit'],
  categories: ['edit'],
} as const satisfies Activity
