import Video from '#assets/activity/sample-editor/move-small.webm'
import type { Activity } from '../../activity'

export const moveSmall = {
  id: 'move-small',
  title: 'Slow Move',
  description: 'Moves the hovered marker slowly by time, independent from phrase length.',
  media: { video: Video },
  keypress: [['edit', 'left'], 'or', ['edit', 'right']],
  categories: ['edit'],
} as const satisfies Activity
