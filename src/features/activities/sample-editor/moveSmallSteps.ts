import Data from '#assets/activity/sample-editor/move-step-slow.json'
import Video from '#assets/activity/sample-editor/move-step-slow.mp4'
import type { Activity } from '../../activity'

export const moveSmallSteps = {
  id: 'move-small-steps',
  title: 'Move 1 Step',
  description: 'Moves 4 steps based on the tempo of the project.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt', 'left'], 'or', ['opt', 'right']],
  categories: ['edit'],
} as const satisfies Activity
