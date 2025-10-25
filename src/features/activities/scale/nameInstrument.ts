import Video from '#assets/activity/scale/name-instrument.webm'
import type { Activity } from '../../activity'

export const nameScale = {
  id: 'name-scale',
  title: 'Name Scale',
  description: 'Naming the scale by holding edit, navigating to the letter and releasing the edit key.',
  media: { video: Video },
  keypress: ['edit', 'after', ['up', 'down', 'left', 'right']],
  categories: ['misc'],
} as const satisfies Activity
