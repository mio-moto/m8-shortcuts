import Video from '#assets/activity/scope/navigate.webm'
import type { Activity } from '../../activity'

export const navigate = {
  id: 'navigate-screen',
  title: 'Navigate',
  description: 'Moves the cursor up or down, left or right',
  media: { video: Video },
  keypress: ['up', 'or', 'left', 'or', 'down', 'or', 'right'],
  categories: ['navigation'],
} as const satisfies Activity
