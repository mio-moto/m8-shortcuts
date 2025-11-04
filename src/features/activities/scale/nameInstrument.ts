import Data from '#assets/activity/scale/name-instrument.json'
import Video from '#assets/activity/scale/name-instrument.mp4'
import type { Activity } from '../../activity'

export const nameScale = {
  id: 'name-scale',
  title: 'Name Scale',
  description: 'Naming the scale by holding edit, navigating to the letter and releasing the edit key.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['edit', 'after', ['up', 'down', 'left', 'right']],
  categories: ['misc'],
} as const satisfies Activity
