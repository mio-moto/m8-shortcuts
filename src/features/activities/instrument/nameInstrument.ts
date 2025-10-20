import Video from '#assets/activity/instrument/name-instrument.webm'
import type { Activity } from '../../activity'

export const nameInstrument = {
  id: 'name-instrument',
  title: 'Name Instrument',
  description: 'Naming the instrument by holding edit, navigating to the letter and releasing the edit key.',
  media: { video: Video },
  keypress: ['edit', 'after', ['up', 'down', 'left', 'right']],
  categories: ['misc'],
} as const satisfies Activity
