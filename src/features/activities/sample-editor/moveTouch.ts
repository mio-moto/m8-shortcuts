import Video from '#assets/activity/sample-editor/move-small-steps.webm'
import type { Activity } from '../../activity'

export const moveTouch = {
  id: 'move-touch',
  title: 'Move by Touch',
  description: 'Moves the selected marker to the position where you touch the screen.',
  media: { video: Video },
  keypress: ['edit', 'touch'],
  categories: ['edit'],
} as const satisfies Activity
