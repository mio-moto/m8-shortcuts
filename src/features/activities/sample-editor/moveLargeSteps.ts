import Data from '#assets/activity/sample-editor/move-step-fast.json'
import Video from '#assets/activity/sample-editor/move-step-fast.mp4'
import type { Activity } from '../../activity'

export const moveLargeSteps = {
  id: 'move-large-steps',
  title: 'Move 4 Steps',
  description: 'Moves 4 steps based on the tempo of the project.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: [['opt', 'up'], 'or', ['opt', 'down']],
  categories: ['edit'],
} as const satisfies Activity
