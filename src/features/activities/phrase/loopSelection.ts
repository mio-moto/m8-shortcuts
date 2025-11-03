import Data from '#assets/activity/phrase/loop-selection.json'
import Video from '#assets/activity/phrase/loop-selection.mp4'
import type { Activity } from '../../activity'

export const loopSelection = {
  id: 'loop',
  title: 'Loop Selection',
  description: 'When a few steps are currently selected, loops that selection.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['play'],
  categories: ['play'],
} as const satisfies Activity
