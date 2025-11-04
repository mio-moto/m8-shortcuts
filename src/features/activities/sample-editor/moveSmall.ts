import Data from '#assets/activity/sample-editor/move-slow.json'
import Video from '#assets/activity/sample-editor/move-slow.mp4'
import type { Activity } from '../../activity'

export const moveSmall = {
  id: 'move-small',
  title: 'Slow Move',
  description: 'Moves the hovered marker slowly by time, independent from phrase length.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['edit', 'left'], 'or', ['edit', 'right']],
  categories: ['edit'],
} as const satisfies Activity
