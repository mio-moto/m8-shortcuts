import Data from '#assets/activity/song/move-selection.json'
import Video from '#assets/activity/song/move-selection.mp4'
import type { Activity } from '../../activity'

export const moveSelection = {
  id: 'move-selection',
  title: 'Move selection up / down',
  description: 'Moves the selection up or down',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'up'], 'or', ['edit', 'down']],
  categories: ['edit'],
} as const satisfies Activity
