import Data from '#assets/activity/instrument/name-instrument.json'
import Video from '#assets/activity/instrument/name-instrument.mp4'
import type { Activity } from '../../activity'

export const nameInstrument = {
  id: 'name-instrument',
  title: 'Name Instrument',
  description: 'Naming the instrument by holding edit, navigating to the letter and releasing the edit key.',
  media: { video: Video, events: Data as [number, number][] },
  keypress: ['edit', 'after', ['up', 'down', 'left', 'right']],
  categories: ['misc'],
} as const satisfies Activity
