import Video from '#assets/activity/sample-editor/move-small-steps.webm'
import type { Activity } from '../../activity'

export const moveSmallSteps = {
  id: 'move-large',
  title: 'Move 1 Step',
  description: 'Moves 4 steps based on the tempo of the project.',
  media: { video: Video },
  keypress: [['opt', 'left'], 'or', ['opt', 'right']],
  categories: ['edit'],
} as const satisfies Activity
